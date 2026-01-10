
🛒 Atlas Commerce (Backend)

Backend untuk aplikasi e-commerce lengkap dengan API untuk authentication, products, cart, payments, coupons, dan analytics — di‑containerize dengan Docker, otomatis dideploy via CI/CD.

📌 Table of Contents

🔎 Overview

🚀 Features

🧠 Tech Stack

⚙️ Installation (Local)

🐳 Docker Setup

🚢 Deployment (CI/CD)

🔐 Environment Variables

📡 API Endpoints (Contoh Postman)

📖 Postman Testing

📁 Folder Structure

🤝 Contributing

📜 License

🌟 Overview

Atlas Commerce adalah backend e‑commerce berbasis Node.js + Express + MongoDB yang sudah dikonfigurasi dengan Docker, Docker Compose, dan pipeline CI/CD (GitHub Actions) untuk versi production deployment. Backend menyediakan API siap pakai untuk frontend (React/Vite), mobile app, atau sistem lain.

🧩 Features

✔ User Authentication (signup / login / profile)
✔ JWT Authentication & Authorization
✔ Product management (CRUD)
✔ Cart management
✔ Coupon & Payment API
✔ Analytics & Health check
✔ Dockerized backend + MongoDB
✔ CI/CD dengan GitHub Actions
✔ Deployed backend (Railway / lain)

🛠️ Tech Stack
Layer	Technology
Backend	Node.js + Express
Database	MongoDB Atlas
ORM/ODM	Mongoose
Container	Docker & Docker Compose
CI/CD	GitHub Actions
Deployment	Railway (atau platform lain)
API Testing	Postman
🧪 Quick Installation (Local)

Clone repo:

git clone https://github.com/alternatif-omg/Atlas-commerce
cd Atlas-commerce


Install dependencies:

cd backend
npm install


Buat file .env dari template .env.example (lihat bagian ENV)

Jalankan development server:

npm run dev


Server akan berjalan di http://localhost:5000 (atau sesuai env).

🐳 Docker Setup
Build Image
docker build -t atlas-commerce-backend .

Run with Docker
docker run -p 5000:5000 \
  -e MONGO_URI="<your_mongodb_uri>" \
  -e ACCESS_TOKEN_SECRET="<token_secret>" \
  atlas-commerce-backend

Docker Compose

Kalau kamu punya layanan lain (frontend / database lokal), tinggal pakai:

docker-compose up -d

⚙️ Deployment & CI/CD

Backend sudah dilengkapi pipeline otomatis melalui GitHub Actions:
✔ Build image
✔ Test (opsional)
✔ Deploy ke platform target (Railway / Fly / Render / GCP / AWS)

Setiap push ke branch main akan otomatis trigger CI/CD.

🔐 Environment Variables

Pastikan punya .env seperti:

PORT=5000
MONGO_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_jwt_secret
REFRESH_TOKEN_SECRET=your_refresh_secret


Tambahkan variabel lain sesuai kebutuhan (payment, analytics, dsb).

📡 API Endpoints (Contoh)
Auth
Method	Endpoint	Description
POST	/api/auth/signup	Register user
POST	/api/auth/login	Login (returns jwt)
GET	/api/auth/profile	User profile (JWT)
Public
Method	Endpoint	Description
GET	/api/health	Health check
GET	/api/products	List products
Protected

Gunakan Header:

Authorization: Bearer <accessToken>

Endpoint	Use
POST /api/cart	Add item
POST /api/payments/checkout	Checkout
GET /api/analytics	Admin analytics
📘 Postman Testing

Auth → Signup / Login → dapatkan accessToken.

Simpan di Header Postman:

Authorization: Bearer {{accessToken}}


Test endpoint protected seperti:

GET /api/auth/profile
POST /api/cart
GET /api/cart

📁 Folder Structure
Atlas-commerce/
├─ backend/  
│   ├─ controllers/  
│   ├─ middleware/  
│   ├─ models/  
│   ├─ routes/  
│   ├─ Dockerfile  
│   ├─ .env.example  
│   └─ ...
├─ frontend/  
│   └─ ... (optional)  
├─ .github/workflows/ (CI/CD)  
├─ docker-compose.yml  
└─ README.md

🤝 Contributing

Contributions are welcome!

Fork repo

Create feature branch

Submit pull request

📜 License

MIT License — free to use, modify, and distribute 🚀
