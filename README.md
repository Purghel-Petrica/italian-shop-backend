# 🍞 Italian Shop - Backend

Backend-ul pentru aplicația **La Bottega Italiana** – o băcănie italiană online.

## 🧠 Descriere
Server Express + MongoDB ce gestionează produsele italiene (brânzeturi, paste, mezeluri, vinuri, gelato etc).

## 🛠️ Tehnologii folosite
- Node.js  
- Express  
- MongoDB + Mongoose  
- dotenv  
- CORS  

## 🚀 Rute principale
| Metodă | Endpoint | Descriere |
|---------|-----------|-----------|
| GET | `/api/products` | Afișează toate produsele |
| GET | `/api/products/:id` | Afișează un produs după ID |
| POST | `/api/products/create` | Creează un produs nou |
| PUT | `/api/products/update/:id` | Actualizează un produs |
| DELETE | `/api/products/delete/:id` | Șterge un produs după ID |
| DELETE | `/api/products/delete-by-name/:name` | Șterge un produs după nume |