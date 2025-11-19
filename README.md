# TechSTART November: Git Ready, Set, Commit!

A Beginner's Guide to Git & Collaboration

This project is a collaborative bulletin board webpage where participants of the TechSTART November workshop can add their messages, quotes, or "I was here" notes. The webpage is built with HTML, CSS, and JavaScript, and is deployed via GitHub Pages.

## 📋 How It Works

1. Participants fork this repository to their GitHub account
2. They create their own message file in the `messages/` folder (e.g., `messages/their-username.json`)
3. They create a pull request to merge their changes
4. Once merged, their message automatically appears on the live webpage!

## 📝 How to Contribute

### Step 1: Fork the Repository

1. Click the "Fork" button at the top right of this repository
2. This creates a copy of the repository in your GitHub account

### Step 2: Create Your Message File

1. In your forked repository, navigate to the `messages/` folder
2. Click "Add file" → "Create new file"
3. Name your file: `your-username.json` (replace `your-username` with your actual GitHub username)
4. Add your message following this format:

```json
{
  "author": "your-username",
  "message": "Your message, quote, or 'I was here' note here!"
}
```

**Required fields:**
- `username`: Your GitHub username
- `message`: Your message content

### Step 3: Commit Your Changes

1. Open your terminal.
2. Stage your new file:
   ```sh
   git add messages/your-username.json
   ```
3. Commit your changes with a message (replace the text as needed):
   ```sh
   git commit -m "Add my message to the bulletin board"
   ```


### Step 4: Push Your Changes

1. Push your commit to your forked repository on GitHub:
   ```sh
   git push origin main
   ```

### Step 5: Create a Pull Request

1. Go to your forked repository on GitHub.
2. Click on the "Pull requests" tab.
3. Click "New pull request".
4. Make sure you are comparing your branch with the main repository's `main` branch.
5. Add a title and description for your pull request (optional).
6. Click "Create pull request".

### Step 6: Wait for Merge

Once your pull request is reviewed and merged, your message will automatically appear on the live webpage!

## 🤝 Contributing Guidelines

- Use your GitHub username as the filename
- Keep messages appropriate and respectful
- Follow the JSON format specified in `messages/README.md`

## 🔄 Manifest & Automation

The webpage reads message files based on `messages/manifest.json`. This file is regenerated automatically by a GitHub Actions workflow whenever new JSON files are pushed to `main`. If you are working locally and want to refresh the manifest before opening a pull request, run:

```sh
node scripts/update-manifest.mjs
```

This script scans the `messages/` directory, lists every `.json` message file, and rewrites the manifest.

## 📄 License

See the [LICENSE](LICENSE) file for details.

---

**Happy Contributing! 🎉**
