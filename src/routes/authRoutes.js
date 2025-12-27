const express = require("express")
const authRouter = express.Router()
const {login, refreToken, logout} = require("../controller/userController.js")

//Login

authRouter.post("/login", login)

//Refresh Token

authRouter.post("/refresh-token", refreToken)

//Logout

authRouter.post("/logout", logout)


module.exports = authRouter