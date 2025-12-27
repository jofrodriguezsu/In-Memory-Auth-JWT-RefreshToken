# JWT Authentication & Refresh Token System 🔐

This is an authentication system built with Node.js and Express. The project demonstrates the implementation of JSON Web Tokens (JWT) using a short-lived access token strategy combined with refresh tokens to improve security.

## ✨ Features

- **Register & Login**: User management with encrypted passwords using `bcrypt`. 
- **Dual Token System (JWT)**: 
  - `AccessToken`: Short-lived token (1 h) used to authorize requests.
  - `RefreshToken`: Long-lived token (7 d) used to renew access without re-authentication.
- **Security**: Route protection using authorization middlewares.
- **In-Memory Persistence**: Simulated database for users and storage of active refresh tokens.
- **Environment Variables**: `.env`. 

## 🛠️ Technologies Used

- **Node.js** & **Express**
- **jsonwebtoken (JWT)**: For token generation and validation.
- **Bcrypt**: For password hashing.
- **Dotenv**: For managing sensitive environment variables.

## 📂 Project Structure

```text
├── src/
│   ├── controller/     # Route logic (Login, Register, Refresh)
│   ├── data/           # Simulated database (Arrays)
│   ├── middleware/     # Private route protection
│   ├── routes/         # Endpoint definitions
│   ├── utils/          # Helper functions (Hashing, Tokens)
│   └── server.js       # Application entry point
├── .env                # Server secrets (Do not upload to production)
└── package.json        # Dependencies and scripts
