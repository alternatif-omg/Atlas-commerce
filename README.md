# 🛒 Atlas Commerce – MERN E-Commerce (Docker & CI)

Atlas Commerce is a MERN Stack (MongoDB, Express, React, Node.js) E-Commerce application used as a DevOps learning and portfolio project.

This repository is a clone and adaptation of the following open-source project:

🔗 **Original Repository**: [https://github.com/burakorkmez/mern-ecommerce](https://github.com/burakorkmez/mern-ecommerce)

The goal of this repository is to demonstrate foundational DevOps practices, focusing on containerization and continuous integration, rather than full production deployment.

---

## 🎯 Project Scope

### ✅ **Implemented**
- Dockerfile for frontend and backend
- Multi-service orchestration using Docker Compose
- Redis running as a containerized service
- Continuous Integration (CI) using GitHub Actions
- Docker image build and push to Docker Hub

### ❌ **Not Implemented Yet**
- Continuous Deployment (CD)
- Kubernetes
- Nginx / reverse proxy
- Monitoring & logging
- Production-ready frontend build

---

## ✨ Application Features
*(Inherited from the original project)*
- User authentication (JWT)
- Product listing and product details
- Shopping cart and checkout flow
- Order management
- Admin dashboard
- Product and user management

---

## 🧱 Tech Stack

### **Application**
- **Frontend**: React.js (Vite)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (external service)
- **Caching**: Redis
- **State Management**: Redux Toolkit
- **Authentication**: JWT

### **DevOps**
- **Containerization**: Docker
- **Multi-container orchestration**: Docker Compose
- **CI**: GitHub Actions
- **Image Registry**: Docker Hub

---

## 🏗️ System Architecture Overview

<img width="9460" height="5492" alt="Frame 1 (2)" src="https://github.com/user-attachments/assets/91d5d44e-3bd3-43ed-9ab6-a13116868814" />

Atlas Commerce uses a Docker Compose–based architecture for local development and CI validation, combined with external managed services.

### **Application Containers (Docker Compose)**
- **Frontend**: React application running with Vite development server
- **Backend**: Node.js / Express REST API
- **Redis**: Containerized caching service

All containers communicate internally using a Docker bridge network.

### **External Managed Services**
The following services are not containerized and are accessed via secure environment variables:
- **MongoDB Atlas** – Primary database
- **Cloudinary** – Image and media storage for product assets
- **Stripe** – Payment processing and checkout services

These services are managed externally and accessed by the backend via their official APIs.

---

## 🐳 Run Locally with Docker Compose

```bash
docker compose up --build
```

### **Available Services**
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Redis**: localhost:6379

---

## 🔄 CI Pipeline Overview

<img width="2433" height="400" alt="Untitled Diagram drawio (54)" src="https://github.com/user-attachments/assets/ea89fb3f-0f3e-4af6-a2db-f5f2b5d07b7d" />

This CI pipeline focuses on build validation and Docker image publishing.  
Continuous Deployment is planned but not yet implemented.

---

## 🙏 Credits

- **Original Author**: [burakorkmez](https://github.com/burakorkmez)
- **Original Project**: [mern-ecommerce](https://github.com/burakorkmez/mern-ecommerce)

---

## 📜 License

This project follows the license of the original repository.  
Please refer to the original repository for license details.

---

## 👨‍💻 Author

**Atlas Commerce** – DevOps Learning & Portfolio Project  
by [alternatif-omg](https://github.com/alternatif-omg)

Built to learn DevOps fundamentals step by step 🚀
