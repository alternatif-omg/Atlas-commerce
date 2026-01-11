# 🛒 Atlas Commerce

**MERN E-Commerce – Dockerized with CI Pipeline**

Atlas Commerce is a **MERN Stack e-commerce application** used as a **DevOps learning & portfolio project**.
The main focus of this repository is **containerization, CI automation, and deployment planning**, rather than delivering a fully production-ready application.

This project demonstrates how a real-world application **can be progressively evolved** from local Docker-based development into a **Kubernetes-based production system**.

---

## 📌 Project Background

This repository is an **adaptation and DevOps-focused extension** of the following open-source project:

🔗 **Original Repository**
👉 [https://github.com/burakorkmez/mern-ecommerce](https://github.com/burakorkmez/mern-ecommerce)

All application features are inherited from the original project, while **infrastructure, containerization, and CI workflows** are implemented and documented independently.

---

## 🎯 Project Scope

### ✅ Implemented (Current State)

* Dockerfile for **frontend** and **backend**
* Multi-service orchestration using **Docker Compose**
* **Redis** as a containerized caching service
* **CI pipeline** using GitHub Actions
* Automated **Docker image build & push** to Docker Hub
* Environment-based configuration for external services

### 🛠️ Planned (Design & Architecture Stage)

* Continuous Deployment (CD)
* Kubernetes deployment
* NGINX Ingress / reverse proxy
* Rolling update & health checks
* Monitoring & centralized logging (Prometheus + Grafana)
* Production-ready frontend build

> ⚠️ These components are **intentionally not implemented yet** and are documented as part of the **future DevOps roadmap**, not missing features.

---

## ✨ Application Features

*(Inherited from the original MERN project)*

* User authentication (JWT)
* Product listing & product details
* Shopping cart & checkout flow
* Order management
* Admin dashboard
* Product & user management

---

## 🧱 Tech Stack

### Application Layer

* **Frontend:** React.js (Vite)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (external – MongoDB Atlas)
* **Caching:** Redis
* **Image Storage:** Cloudinary (External)
* **Payment:** Stripe Cloudinary (External)
* **Authentication:** JWT

### DevOps & Infrastructure

* **Containerization:** Docker
* **Orchestration:** Docker Compose
* **CI:** GitHub Actions
* **Image Registry:** Docker Hub

---

## 🏗️ Architecture Overview

### 1️⃣ Current State – Dockerized Application

This diagram represents the **currently implemented architecture**, focused on local development and CI validation using Docker Compose.

<img width="9460" height="5492" alt="Frame 1 (4)" src="https://github.com/user-attachments/assets/9b0c5f24-105f-4639-a325-d363a80286a7" />

**Key points:**

* Frontend, Backend, and Redis run as isolated containers
* Internal Docker bridge network for service communication
* Backend integrates with **external managed services** via environment variables:

  * MongoDB Atlas
  * Cloudinary
  * Stripe

---

### 2️⃣ CI Pipeline – GitHub Actions

This diagram shows the **implemented CI pipeline** triggered on push or pull request.

<img width="13632" height="6048" alt="Frame 2" src="https://github.com/user-attachments/assets/0d2b2425-fff5-4318-b2a9-10c465b2fc66" />

**Pipeline flow:**

1. Source code checkout
2. Dependency installation
3. Docker image build
4. Push images to Docker Hub

> 🚫 Continuous Deployment (CD) is **not implemented yet** and intentionally separated from CI.

---

### 3️⃣ Planned State – Kubernetes & CD Architecture

This diagram illustrates the **target architecture design** for future implementation.

<img width="13204" height="11052" alt="Frame 3" src="https://github.com/user-attachments/assets/95173170-ff5f-4d6f-b02d-ab2d5542dace" />

**Planned components:**

* Kubernetes cluster
* NGINX Ingress Controller
* Rolling updates & health checks
* Horizontal scaling (multiple backend replicas)
* Redis as an internal service
* Centralized logging & monitoring (Prometheus + Grafana)

This section demonstrates **infrastructure design understanding**, even though the system is not deployed yet.

---

## 🐳 Run Locally (Docker Compose)

```bash
docker compose up --build
```

### Available Services

| Service     | URL / Port                                     |
| ----------- | ---------------------------------------------- |
| Frontend    | [http://localhost:5173](http://localhost:5173) |
| Backend API | [http://localhost:5000](http://localhost:5000) |
| Redis       | localhost:6379                                 |

---

## 🔄 CI/CD Status

* ✅ Continuous Integration (CI): **Implemented**
* 🚧 Continuous Deployment (CD): **Planned**

This repository intentionally focuses on **CI reliability and container correctness** before introducing automated deployment.

---

## 🙏 Credits

* **Original Author:** burakorkmez
* **Original Project:** mern-ecommerce

All application logic credits go to the original author.

---

## 📜 License

This project follows the license of the original repository.
Please refer to the original repository for detailed license information.

---

## 👨‍💻 Author

**Atlas Commerce**
DevOps Learning & Portfolio Project
by **alternatif-omg**

> Built to understand DevOps fundamentals step by step —
> from Docker → CI → Kubernetes planning 🚀

---

## Why Some Components Are Not Implemented Yet?

This project is designed as a learning journey.
Each stage (Docker, CI, CD, Kubernetes) is intentionally separated
to ensure proper understanding and clean implementation.

Future work is documented as architecture plans rather than unfinished tasks.


