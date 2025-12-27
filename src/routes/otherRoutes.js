const express = require("express")
const otherRouter = express.Router()
const { authMiddleware } = require("../middleware/authMiddleware.js")
const {profile, register} = require("../controller/userController.js")


otherRouter.get("/profile", authMiddleware, profile)

otherRouter.post("/register", register)


module.exports = otherRouter