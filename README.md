# ELIDENS Comprehensive College – School Website

A school website with a gallery, admin dashboard, and contact page. Built with HTML, CSS, and Firebase.

## Project Structure

```
School-project/
├── index.html          → Home page
├── about.html          → About the school
├── Sections.html       → School sections (Primary, Middle, High)
├── Gallery.html        → Photo/video gallery (Firebase)
├── Contact.html        → Contact information
├── admin.html          → Admin dashboard (create posts, moderate comments)
├── css/
│   └── styles.css      → All styles (colors, layout, gallery, admin)
├── js/
│   ├── utils.js        → Helper functions (getTimeAgo, createUser, fileToDataURL)
│   └── firebase-config.js → Firebase connection (API keys)
├── images/             → Put your images here
│   ├── about.jpg       → Banner for About, Sections, Contact
│   ├── g.png           → Gallery banner
│   ├── gallery.avif     → Hero image on home page
│   └── school-logo.png → School logo (rename from "School logo.PNG" if needed)
├── docs/
│   └── MODERATION_GUIDE.md → How to use the admin panel
└── README.md           → This file
```

## How to Run Locally

1. Open the project folder in VS Code or any editor.
2. Use a local server (ES modules require it—`file://` won't work):
   - **VS Code:** Install "Live Server" → right-click `index.html` → "Open with Live Server"
   - **Command line:** `npx serve` or `python -m http.server 8000`
3. Open `http://localhost:8000` (or the port shown).

## Important Files

| File | Purpose |
|------|---------|
| `css/styles.css` | All CSS (hero, gallery, admin, forms, etc.) |
| `js/utils.js` | Shared helpers used by Gallery and Admin |
| `js/firebase-config.js` | Firebase app and Firestore setup |
| `docs/MODERATION_GUIDE.md` | Admin features and moderation steps |

## Adding New Features

- **New page:** Copy `about.html` and change the content.
- **Change colors:** Edit `:root` in `css/styles.css` (e.g. `--primary-color`).
- **Update navbar:** Change the links in the `<nav>` section of each HTML file.

## Images

Add these files to the `images/` folder:

| File | Used on |
|------|---------|
| `about.jpg` | About, Sections, Contact banners |
| `g.png` | Gallery banner |
| `gallery.avif` | Home page hero |
| `school-logo.png` | About and Contact pages |

If your logo is named `School logo.PNG`, rename it to `school-logo.png` when adding.

## Admin Access

- Visit `admin.html` to create posts and manage comments.
- See `docs/MODERATION_GUIDE.md` for full instructions.
