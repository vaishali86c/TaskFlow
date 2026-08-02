# TaskFlow

A simple todo app built with React, Tailwind CSS, and React Router.

## Features

- Add, edit, delete, and complete tasks
- Filter by all / active / completed
- Dark mode toggle
- Stats page showing progress
- Tasks saved automatically in your browser (localStorage)

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router

## Setup

**Requirements:** Node.js (v18 or higher)

1. Install dependencies
   ```bash
   npm install
   ```

2. Start the dev server
   ```bash
   npm run dev
   ```

3. Open the URL shown in your terminal (usually `http://localhost:5173`)

## Other Commands

```bash
npm run build      # builds the app for production into the dist/ folder
npm run preview    # preview the production build locally
```

## Project Structure

```
src/
  components/   → reusable UI pieces (TaskForm, TaskList, TaskItem, Header, ThemeToggle)
  context/      → ThemeContext for dark/light mode
  hooks/        → useLocalStorage custom hook
  reducer/      → taskReducer, handles all task state changes
  pages/        → Home and Stats pages
  App.jsx       → routes + top-level state
  main.jsx      → app entry point
```
