# Task Management System — Phase 1

Full-stack Task Management System built with React, Tailwind CSS, Node.js, Express.js, and MongoDB Atlas.

---

## 1. Project Overview

The Task Management System is a scalable, multi-phase full-stack web application. Phase 1 establishes the core frontend and backend folder structure, Express.js backend with central routing and error middleware, Mongoose MongoDB Atlas database connection handling, Axios API communication, Tailwind CSS setup, and dynamic system health monitoring.

---

## 2. Technology Stack

### Frontend
- **React.js**: Component-based UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM (v6)**: Client-side routing
- **Axios**: HTTP client for backend communication

### Backend
- **Node.js**: Runtime environment (ES Modules)
- **Express.js**: Web framework
- **MongoDB Atlas & Mongoose**: Cloud NoSQL database & ODM
- **dotenv**: Environment variable manager
- **CORS**: Cross-Origin Resource Sharing configuration

---

## 3. Project Structure

```text
task-management-system/
│
├── frontend/
│   ├── public/
│   │
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Dashboard.jsx
│       │   └── NotFound.jsx
│       ├── layouts/
│       │   └── MainLayout.jsx
│       ├── routes/
│       │   └── AppRoutes.jsx
│       ├── services/
│       │   └── api.js
│       ├── hooks/
│       ├── context/
│       ├── utils/
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── controllers/
│   │   │   └── healthController.js
│   │   │
│   │   ├── models/
│   │   │
│   │   ├── routes/
│   │   │   └── index.js
│   │   │
│   │   ├── middleware/
│   │   │   └── errorMiddleware.js
│   │   │
│   │   ├── services/
│   │   │
│   │   ├── utils/
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## 4. Environment Variables

### Backend Configuration (`backend/.env`)
```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
CLIENT_URL=http://localhost:5173
```

### Frontend Configuration (`frontend/.env`)
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 5. MongoDB Atlas Setup Instructions

To connect the application to a live cloud database:

1. **Create a MongoDB Atlas Cluster**: Log into [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a cluster.
2. **Create a Database User**: Under *Database Access*, create a user with read and write permissions to the database.
3. **Configure Network Access**: Under *Network Access*, add your IP address (or `0.0.0.0/0` for development access).
4. **Obtain Connection String**: Click **Connect** on your cluster, select **Drivers**, and copy the connection URI format:
   ```text
   mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
   ```
5. **Update Backend `.env`**: Set the URI in `backend/.env`:
   ```env
   MONGODB_URI=mongodb+srv://your_user:your_password@cluster.mongodb.net/task_management?retryWrites=true&w=majority
   ```

---

## 6. How to Run Frontend & Backend

### 1. Backend Setup & Startup
```bash
cd backend
npm install
npm run dev
```
The backend server runs on `http://localhost:5000`.

### 2. Frontend Setup & Startup
```bash
cd frontend
npm install
npm run dev
```
The frontend web application runs on `http://localhost:5173`.

---

## 7. Health Check API Endpoint

- **Endpoint**: `GET http://localhost:5000/api/health`
- **Response Format**:
```json
{
  "success": true,
  "message": "Task Management System API is running",
  "database": "connected",
  "timestamp": "2026-09-18T10:52:16.000Z"
}
```

---

## 8. Phase 1 Implementation Summary

- ✅ Standardized directory structure for frontend and backend.
- ✅ Mongoose async database connection with error handling and status reporting.
- ✅ Central Express app initialization in `app.js` and server bootstrap in `server.js`.
- ✅ Configured CORS restricting origins to `CLIENT_URL`.
- ✅ Global error handling and 404 middleware.
- ✅ React Router configuration (`/`, `/dashboard`, `*`).
- ✅ Axios API service instance with base URL environment configuration.
- ✅ Interactive Home and Dashboard UI displaying live backend and database connection status badges.

---

## 9. Future Development Phases

- **Phase 2: Authentication & User Management**: User registration, login, JWT authorization, protected routes, role management.
- **Phase 3: Task CRUD Operations**: Create, read, update, delete tasks; priorities; categories; due dates; assignments.
- **Phase 4: Dashboard & Analytics**: Visual statistics, completion metrics, task filters, sorting, search, pagination.

