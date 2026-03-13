# 🖼️ LensFlow — Full-Stack Image Management System

A robust, full-stack application designed for high-performance image handling and data persistence. This project demonstrates a modern **MERN (MongoDB, Express, React, Node.js)** architecture, focusing on decoupled services and scalable API design.

---

## 🏗️ Technical Architecture

This application is built as a **Monorepo**, separating concerns between a responsive UI and a performant RESTful API.

### 💻 Frontend (Client-Side)
* **React & Vite:** Leveraged Vite for an optimized development experience and ultra-fast HMR (Hot Module Replacement).
* **Dynamic UI Flow:** Utilized `useNavigate` for seamless, programmatic routing, creating a fluid Single Page Application (SPA) experience.
* **State Hydration:** Implemented `useEffect` hooks to synchronize UI state with asynchronous API data fetches.
* **Asset Optimization:** Designed to handle image rendering and layout shifts efficiently.

### ⚙️ Backend (Server-Side)
* **Node.js & Express:** Built a structured API layer with custom middleware for error handling and request parsing.
* **Cross-Origin Resource Sharing (CORS):** Configured specialized CORS policies to allow secure communication between the frontend (Vite) and the backend server.
* **Environment Security:** Integrated `dotenv` to manage sensitive database URI strings and API keys, ensuring zero-exposure of credentials.

### 🗄️ Database & Tooling
* **MongoDB Atlas:** Implemented a non-relational document store for flexible image metadata management.
* **Postman Orchestration:** All API endpoints were rigorously validated via Postman for status code accuracy and payload integrity before frontend integration.

---

## 🛠️ Installation & Environment Setup

### 1. Backend Configuration
```bash
cd Backend
npm install
# Create a .env file and add:
# PORT=3000
# MONGO_URI=your_mongodb_atlas_connection_string
npm start
