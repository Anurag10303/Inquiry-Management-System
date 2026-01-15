# 🚀 Inquiry Management System (MVP)

#### Kyrex – Web Developer Intern (Final Round Assignment)

A lightweight internal inquiry tracking MVP focused on clarity and real-world trade-offs.

## 📌Overview

This project is an intern-level MVP designed to demonstrate:

• Clear backend–frontend data flow

• Practical architectural decisions

• Awareness of real-world limitations

It is not intended to be production-ready.

## ✨ Features

• ➕ Add inquiries (name, contact, source, status)

• 📋 View all inquiries in a centralized dashboard

• 🔄 Update inquiry status (New / Contacted / Closed)

• ⚠️ Basic validation, loading states, and error handling

## 🛠 Tech Stack

### Frontend

• React (Vite)

• Material UI (MUI) – for prebuilt, consistent UI components

• Fetch API

### Backend

• Node.js

• Express

• MongoDB

• CORS

## 🗂 Project Structure

```
Inquiry-Management-System/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   ├── index.html
│   └── package.json
├── .gitignore
├── README.md
```

## ⚙️ Prerequisites

• Node.js (v18+ recommended)

• npm

• MongoDB account

## 🚧 Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/Anurag10303/Inquiry-Management-System.git

cd Inquiry-Management-System
```

### 2️⃣ Backend Setup

```
cd backend

npm install
```

#### 🔹Create a .env file inside the backend directory:

```
MONGO_URI=<your_mongodb_atlas_connection_string>

PORT=5000
```

#### 🔹Start the backend server:

```
npm run dev
```

#### 🔹Backend will run at:

```
http://localhost:5000
```

### 3️⃣ Frontend Setup

#### 🔹Open a new terminal:

```
cd frontend

npm install

npm run dev
```

#### 🔹Frontend will run at:

```
http://localhost:5173
```

## 🔗 API Endpoints

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| POST   | `/api/inquiries`     | Add a new inquiry     |
| GET    | `/api/inquiries`     | Fetch all inquiries   |
| PATCH  | `/api/inquiries/:id` | Update inquiry status |
