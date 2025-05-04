# Eisenhower Matrix To-Do App (React + Node.js + PostgreSQL)

This is a full-stack To-Do application built using:

- **React + Vite (Frontend)**  
- **Express + Node.js (Backend API)**  
- **PostgreSQL (Database)**

It uses the Eisenhower Matrix concept to help prioritize tasks based on urgency and importance.

## 🚀 Features

- Add tasks with name and deadline.
- After adding, you answer if it's important + urgent (custom popup).
- Tasks are automatically placed in quadrants:  
  ✅ Do (Important + Urgent)  
  ✅ Schedule (Important + Not Urgent)  
  ✅ Delegate (Not Important + Urgent)  
  ✅ Delete (Not Important + Not Urgent)
  
- Mark tasks as done.
- Completed tasks appear separately.
- Late tasks are flagged.
- Quadrants have scrollable areas if too many tasks.
- Clean and simple design.

## 📦 Installation

### 1️⃣ Clone this project

```bash
git clone https://github.com/yourusername/eisenhower-matrix-todo.git
cd eisenhower-matrix-todo
```

*(or just download the folder)*

### 2️⃣ Install Frontend (React) dependencies

```bash
npm install
```

*(make sure you are in the project folder where package.json is)*

### 3️⃣ Install Backend (Node.js + Express) dependencies

Go to your backend folder (where `server.js` is):

```bash
cd server
npm install
```

Install required packages:

```bash
npm install express pg cors
npm install -g nodemon  # optional, for auto-reloading server
```

### 4️⃣ Setup PostgreSQL Database

Make sure you have **PostgreSQL installed and running**.

Create a database (you can use `pgAdmin` or command line):

```sql
CREATE DATABASE eisenhower_matrix_db;
```

Create the `tasks` table:

```sql
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    task TEXT NOT NULL,
    deadline TIMESTAMP NOT NULL,
    is_important BOOLEAN,
    is_urgent BOOLEAN,
    done BOOLEAN DEFAULT false,
    completed_at TIMESTAMP
);
```

Update `server.js` PostgreSQL config with your username, password and port if needed.

## 📌 How to Run the Project

### ▶️ 1. Start Backend (API server)

In the `server` folder:

```bash
nodemon server.js
```

or

```bash
node server.js
```

Should say:

```
Server running at http://localhost:3000
```

### ▶️ 2. Start Frontend (React)

In the main project folder:

```bash
npm run dev
```

This will start Vite and React:

```
http://localhost:5173/
```

Open that in your browser.

## ✅ Notes

- PostgreSQL must be running before starting backend.
- Start backend first, then frontend.
- Update ports or DB settings in `server.js` if necessary.

## 📌 Future Ideas

- Add users and login
- Allow editing of tasks
- Add snooze/postpone option
- Add tags or categories

## 📢 License

MIT — free to use, modify and share.
