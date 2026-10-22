# My Website

A small starter website, built from a phone with GitHub Codespaces.

## What's in this project

| File | What it does |
| --- | --- |
| `index.html` | The page itself: its text and structure |
| `style.css` | How the page looks: colors, spacing, fonts |
| `script.js` | What the page does: the "Tap me" counter |
| `.devcontainer/devcontainer.json` | Sets up the cloud computer (Codespace) and starts the website for you |

## Run it (Codespaces, no PC needed)

1. Open this repository on github.com (in Chrome, turn on **Desktop site** from the ⋮ menu for a usable layout).
2. Tap **Code** > **Codespaces** > **Create codespace on main**.
3. Wait about a minute while the cloud computer starts.
4. The website starts automatically on port **3000**. Open the **Ports** tab and tap the link next to port 3000 to see it.

If the page doesn't open, open the **Terminal** in the Codespace and run:

```
python3 -m http.server 3000
```

Then open the link in the **Ports** tab again. If the terminal says the port is already in use, the site is already running, so just open the link.

## Edit the site

1. In the Codespace, open the file from the left-hand file list.
2. Make your change and save it (Ctrl+S, or the menu: **File** > **Save**).
3. Refresh the website tab to see the change.

Where to change things:
- **Text on the page:** `index.html`
- **Colors, sizes, spacing:** `style.css`
- **Button behavior:** `script.js`

## Save your changes to GitHub

Changes inside the Codespace are not on GitHub until you commit them. In the Codespace terminal:

```
git add .
git commit -m "Describe what you changed"
git push
```

## When you're done

Stop the Codespace at https://github.com/codespaces so it doesn't use up your free monthly hours. Your files are kept, and you can resume later.
