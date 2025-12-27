# JWT Authentication & Refresh Token System 🔐

Este es un sistema de autenticación completo y seguro construido con **Node.js** y **Express**. El proyecto demuestra la implementación profesional de **JSON Web Tokens (JWT)** utilizando una estrategia de tokens de acceso de corta duración y tokens de actualización (Refresh Tokens) para mejorar la seguridad.

## ✨ Características

- [cite_start]**Registro y Login**: Gestión de usuarios con contraseñas encriptadas mediante `bcrypt`. [cite: 25, 146, 114]
- **Doble Token (JWT)**: 
  - `AccessToken`: Token de corta duración (1 min) para autorizar peticiones. [cite: 18]
  - `RefreshToken`: Token de mayor duración (5 min) para renovar el acceso sin re-autenticarse. [cite: 21]
- **Seguridad**: Protección de rutas mediante Middlewares de autorización. [cite: 54]
- **Persistencia en Memoria**: Simulación de base de datos para usuarios y almacenamiento de Refresh Tokens activos. [cite: 72, 101]
- **Variables de Entorno**: Configuración segura de secretos mediante `.env`. [cite: 3, 183]

## 🛠️ Tecnologías Utilizadas

- **Node.js** & **Express**
- **jsonwebtoken (JWT)**: Para la generación y validación de tokens.
- **Bcrypt**: Para el hashing de contraseñas.
- **Dotenv**: Para la gestión de variables críticas.

## 📂 Estructura del Proyecto

```text
├── src/
│   ├── controller/     # Lógica de las rutas (Login, Register, Refresh)
│   ├── data/           # Simulación de base de datos (Arrays)
│   ├── middleware/     # Protección de rutas privadas
│   ├── routes/         # Definición de endpoints
│   ├── utils/          # Funciones de ayuda (Hash, Tokens)
│   └── server.js       # Punto de entrada de la aplicación
├── .env                # Secretos del servidor (No subir a producción)
└── package.json        # Dependencias y scripts
