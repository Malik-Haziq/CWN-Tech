# CWN‑Tech 🚀

A full‑stack software development company platform built with modern technologies.

## 🧭 Table of Contents
- [About](#about)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Running Locally](#running-locally)
- [Testing](#testing)
- [Deployment](#deployment)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About

CWN‑Tech is a demo platform representing a software development company’s full‑stack architecture. It includes:

- A **React** front‑end for the client portal  
- A **Node.js**/Express and **PHP** hybrid backend  
- APIs for user management, project tracking, and admin analytics  

---

## Tech Stack

| Layer         | Technology       |
|--------------|------------------|
| Frontend     | React, Vite, CSS |
| Backend      | Node.js, Express |
| Legacy       | PHP              |
| Database     | (e.g. MongoDB / MySQL) |
| Dev Tools    | ESLint, Prettier |  
| Deployment   | VPS |

---

## Architecture

- **cwn-react/** – React + Vite SPA
- **cwn-backend/** – Express.js API (Node.js)
- **PHP modules** – Legacy endpoints or admin handlers
- Shared models, routes, controllers as common patterns

---

## Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/Malik-Haziq/CWN-Tech.git
   cd CWN-Tech

2. **Install Dependencies**
    ```bash
   cd cwn-react
   npm install

   cd ../cwn-backend
   npm install
3. **Set Up Environment Variables**
Create a .env file in both the cwn-react/ and cwn-backend/ directories.

## Deployment
Build Frontend for Production

    cd cwn-react
    npm run build

## Folder Structure

    CWN-Tech/
    ├── cwn-react/          # React frontend
    │   ├── public/
    │   └── src/
    │       ├── components/
    │       ├── pages/
    │       ├── services/
    │       └── App.jsx
    ├── cwn-backend/        # Node.js backend
    │   ├── src/
    │   │   ├── controllers/
    │   │   ├── models/
    │   │   ├── routes/
    │   │   └── utils/
    │   └── server.js
    ├── cwn-admin-php/      # Optional: Admin area in PHP
    ├── README.md
    └── .gitignore
