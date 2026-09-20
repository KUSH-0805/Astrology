# 🛠️ House of Astrology — Command Cheat Sheet

> **How to use this file:** Every command we use in this project is listed here with a plain-English explanation. I'll update this file after each step whenever we use a new command. Bookmark it — it's your personal reference guide!

---

## 📌 Table of Contents
1. [Git Commands (Version Control)](#1-git-commands)
2. [Python & Django Commands (Backend)](#2-python--django-commands)
3. [Node & npm Commands (Frontend)](#3-node--npm-commands)
4. [Windows Utility Commands](#4-windows-utility-commands)
5. [How to Run the Project](#5-how-to-run-the-project)

---

## 1. Git Commands

Git is like a **time machine** for your code. It saves snapshots so you can always go back.

| Command | What it does | When to use it |
|---|---|---|
| `git status` | Shows which files are changed/untracked | Before committing, to see what's new |
| `git add <file>` | **Stages** a file (marks it "ready to save") | Before committing, to choose what to save |
| `git add .` | Stages **all** changed files | When you want to save everything |
| `git commit -m "message"` | Creates a **snapshot** with a description | After staging, to save your work |
| `git push origin main` | **Uploads** your snapshots to GitHub | To back up your work online |
| `git log --oneline -5` | Shows your last 5 commits | To see your history |

### 🔄 The Golden Workflow (use every time)
```
git add <files>     →  git commit -m "what I did"  →  git push origin main
     (stage)                 (snapshot)                    (upload)
```

---

## 2. Python & Django Commands

### Virtual Environment (venv)
A venv is a **private room** for your project's Python packages — it keeps them separate from your system.

| Command | What it does | When to use it |
|---|---|---|
| `python -m venv backend\venv` | **Creates** a virtual environment in the `backend/venv` folder | Once, when setting up the project |
| `backend\venv\Scripts\activate` | **Activates** the venv (enters the private room) | Every time you open a new terminal to work on the backend |
| `backend\venv\Scripts\python -m pip list` | Lists all packages installed in the venv | To check what's installed |

### Installing Packages (pip)
pip is Python's **package installer** (like an app store for code).

| Command | What it does | When to use it |
|---|---|---|
| `pip install -r backend\requirements.txt` | Installs everything on the "shopping list" | After creating a new venv, or when requirements.txt changes |
| `backend\venv\Scripts\python -m pip install -r backend\requirements.txt` | Same as above, but **guaranteed** to install into the venv | **Always use this one** — it's safer! |

### Django Commands

| Command | What it does | When to use it |
|---|---|---|
| `backend\venv\Scripts\django-admin startproject config backend` | **Creates** a new Django project | Once, when setting up the backend |
| `backend\venv\Scripts\python backend\manage.py runserver` | **Starts** the Django development server (port 8000) | Every time you want to run the backend |
| `backend\venv\Scripts\python backend\manage.py migrate` | Applies database changes | After creating/editing models (we'll use this later) |
| `backend\venv\Scripts\python backend\manage.py createsuperuser` | Creates an admin login | To access Django Admin (we'll use this later) |

---

## 3. Node & npm Commands

npm is Node's **package manager** (like pip for Python, but for JavaScript).

| Command | What it does | When to use it |
|---|---|---|
| `npm create vite@latest frontend -- --template react-ts` | **Creates** a new React app with Vite + TypeScript | Once, when setting up the frontend |
| `npm install --prefix frontend` | **Installs** all dependencies listed in `package.json` | After creating the project, or when new packages are added |
| `npm run dev --prefix frontend` | **Starts** the Vite dev server (port 5173) | Every time you want to run the frontend |
| `npm install <package> --prefix frontend` | Installs a **specific** package | When we add new libraries (e.g., Tailwind, Axios) |
| `npm install tailwindcss @tailwindcss/vite --prefix frontend` | Installs Tailwind CSS + its Vite plugin | Once, to set up the styling framework |
| `npm install framer-motion --prefix frontend` | Installs Framer Motion — the animation library for React | Once, to power the cosmic animations in the Hero |
| `npm run build --prefix frontend` | **Compiles** and checks the whole app for errors (builds the production files) | To verify your code has no TypeScript errors |

> **Note:** `--prefix frontend` tells npm to work inside the `frontend/` folder. This is needed because our terminal doesn't remember `cd` between commands.

---

## 4. Windows Utility Commands

| Command | What it does | When to use it |
|---|---|---|
| `dir` | Lists files in the current folder | To see what's in a folder |
| `dir <path>` | Lists files in a specific folder | e.g., `dir backend\venv\Scripts` |
| `del <file>` | **Deletes** a file | To remove unwanted files |
| `curl -s <url>` | Fetches a web page/API from the command line | To test if a server is running |
| `curl -s <url> \| findstr /C:"text"` | Fetches a page and searches for text | To quickly check if a page contains something |
| `start <url>` | Opens a URL in your default browser | To open the website |
| `taskkill /F /IM node.exe` | **Force-stops** all Node processes | To stop the Vite dev server |
| `taskkill /F /IM python.exe` | **Force-stops** all Python processes | To stop the Django server |

---

## 5. How to Run the Project

### 🖥️ Terminal 1 — Start the Backend (Django)
```
backend\venv\Scripts\python backend\manage.py runserver
```
- Runs on: **http://localhost:8000**
- Test it: `curl -s http://localhost:8000/api/health/`

### 🎨 Terminal 2 — Start the Frontend (React)
```
npm run dev --prefix frontend
```
- Runs on: **http://localhost:5173**
- Open it: `start http://localhost:5173`

### 🧪 Quick Health Check
```
curl -s http://localhost:8000/api/health/
```
Expected output: `{"status": "ok", "message": "House of Astrology API is running!"}`

---

## 🗂️ Project File Structure

Here's how the project is organized — this will grow as we add features:

```
HouseOfAstrology/
├── backend/                  ← Django (Python) — the API server
│   ├── venv/                 ← Isolated Python packages (don't touch)
│   ├── manage.py             ← Django's main command tool
│   └── config/               ← Django project settings
│
├── frontend/                 ← React (TypeScript) — the website we see
│   ├── node_modules/         ← Installed JS packages (don't touch)
│   ├── src/
│   │   ├── main.tsx          ← Entry point (loads the app)
│   │   ├── index.css         ← Tailwind + our custom theme & animations
│   │   ├── App.tsx           ← The main page — assembles all sections
│   │   └── components/       ← Reusable UI pieces
│   │       ├── Navbar.tsx    ← ✅ Step 6: top navigation bar
│   │       └── Hero.tsx      ← ✅ Step 7: hero section (moon + stars)
│   └── package.json          ← List of JS packages + scripts
│
├── COMMANDS_CHEATSHEET.md    ← This file 📖
└── house_of_astrology_full_implementation_plan.md  ← The master plan
```

> **Tip:** Every visible piece of the page is a **component** in `frontend/src/components/`. We build one at a time, then plug it into `App.tsx`.

---

## 📝 Commands Log (What We've Used So Far)

| Step | Command | Purpose |
|---|---|---|
| 1 | `git add house_of_astrology_full_implementation_plan.md` | Stage the plan file |
| 1 | `git commit -m "Add full implementation plan document"` | Save the plan |
| 1 | `git push origin main` | Upload to GitHub |
| 2 | `python -m venv backend\venv` | Create virtual environment |
| 2 | `backend\venv\Scripts\python -m pip install -r backend\requirements.txt` | Install Django + DRF + CORS |
| 2 | `backend\venv\Scripts\django-admin startproject config backend` | Create Django project |
| 2 | `backend\venv\Scripts\python backend\manage.py runserver` | Start Django server |
| 2 | `curl -s http://localhost:8000/` | Verify Django rocket page |
| 3 | `npm create vite@latest frontend -- --template react-ts` | Create React app |
| 3 | `npm install --prefix frontend` | Install React dependencies |
| 3 | `npm run dev --prefix frontend` | Start Vite dev server |
| 3 | `curl -s http://localhost:5173/` | Verify React is running |
| 4 | `curl -s http://localhost:8000/api/health/` | Test health check endpoint |
| 4 | `start http://localhost:5173` | Open the website in browser |
| 5 | `npm install tailwindcss @tailwindcss/vite --prefix frontend` | Install Tailwind CSS + Vite plugin |
| 5 | `del frontend\src\App.css` | Remove old CSS (Tailwind replaces it) |
| 6 | `npm run build --prefix frontend` | Compile & verify the whole frontend builds without errors |
| 7 | `npm install framer-motion --prefix frontend` | Install Framer Motion for animations |
| 7 | `npm run build --prefix frontend` | Verify Hero section compiles with Framer Motion |

---

*This file will be updated after every step with any new commands we use.*