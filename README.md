# NITR-TRAVEL-SAATHI

## 🚀 Prerequisites

Before initiating local installation, ensure you have the following software installed:

| Tool | Version | Download |
|------|---------|----------|
| **Node.js** | LTS | [nodejs.org](https://nodejs.org/) |
| **npm** | Bundled with Node.js | — |
| **Git** | Latest stable | [git-scm.com](https://git-scm.com/) |

> **Tip:** Run `node -v` and `git --version` in your terminal to verify installations before proceeding.

---

## 🛠️ Getting Started & Local Setup

Follow these precise steps to establish a fully operational local development environment.

### 1. Install Node.js

Download and install Node.js (v18+) from the official site:

```
https://nodejs.org/en/download
```

After installation, verify with:

```bash
node -v   # should print v18.x.x or higher
npm -v    # should print 9.x.x or higher
```

---

### 2. Install Git

Download Git from:

```
https://git-scm.com/downloads
```

Verify installation:

```bash
git --version
```

---

### 3. Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/anish-chandrasekar/NITR-TRAVEL-SAATHI.git
cd NITR-TRAVEL-SAATHI
```

---

### 4. Install Dependencies

Inside the project directory, install all required packages:

```bash
npm install
```

This will install React, Vite, Tailwind CSS, and all other dependencies listed in `package.json`.

---

### 5. Start the Development Server

```bash
npm run dev
```

Vite will spin up a local dev server. Open your browser and navigate to:

```
http://localhost:5173
```

> The page hot-reloads automatically whenever you save changes to source files.

---

### 6. Build for Production

To generate an optimized static build in the `dist/` folder:

```bash
npm run build
```

---

### 7. Preview the Production Build Locally

```bash
npm run preview
```

This serves the `dist/` folder locally so you can verify the production build before deploying.

---

## 🔧 Git Initialization & Remote Setup

If you are starting from scratch (not cloning) and want to initialize this project locally:

```bash
# Initialize a new git repository
git init

# Add all files to staging
git add .

# Create the initial commit
git commit -m "feat: initial project setup"

# Add the remote origin
git remote add origin https://github.com/anish-chandrasekar/NITR-TRAVEL-SAATHI.git

# Push to the main branch
git push -u origin main
```

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server at `localhost:5173` |
| `npm run build` | Build optimized production bundle into `dist/` |
| `npm run preview` | Serve the production build locally for testing |
| `npm run lint` | Run ESLint to check for code issues |

---
