import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

async function main() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const repoRoot = path.resolve(__dirname, '..');
    const messagesDir = path.join(repoRoot, 'messages');
    const manifestPath = path.join(messagesDir, 'manifest.json');

    try {
        const entries = await fs.readdir(messagesDir, { withFileTypes: true });
        const messageFiles = entries
            .filter((entry) => entry.isFile())
            .map((entry) => entry.name)
            .filter((name) => name.endsWith('.json') && name !== 'manifest.json')
            .sort((a, b) => a.localeCompare(b));

        const manifest = {
            generatedAt: new Date().toISOString(),
            messages: messageFiles
        };

        await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
        console.log(`Manifest updated with ${messageFiles.length} entries at ${manifestPath}`);
    } catch (error) {
        console.error('Failed to update manifest:', error);
        process.exitCode = 1;
    }
}

main();

