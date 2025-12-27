require("dotenv").config()
const express = require("express")
const app= express()
const authRouter = require("./routes/authRoutes.js")
const otherRouter = require("./routes/otherRoutes.js")

const PORT = 3000

app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/", otherRouter)

app.listen(PORT, ()=>{
  console.log(`authServer running on port ${PORT}`)
})

