const usersDB = require("../data/usersDB.js")
const {hashedPassword, hashCompared} = require("../utils/hash.js")
const {accessToken, refreshToken} = require("../utils/token.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

//PROFILE

const profile = (req, res)=>{
  res.send("You're in your profile page")
}

//LOGIN

const login = async (req, res)=>{
  const {username, password} = req.body

  if(!username || !password){
    return res.status(400).json({message: "missing field"})
  }

  const user = usersDB.find(u => u.username === username)

  if (!user) {
    return res.status(404).json({message: "User does not exist!"})
  }

  const userPassword = user.password
  try{
  const hashComp = await hashCompared(password, userPassword)

  if(!hashComp){
    return res.status(401).json({message:"Wrong password!"})
  }

  //Access token

  const payload = {
    id: user.id,
    username: user.username 
  }
  const accToken = accessToken(payload)

  // Refresh token

  const refToken = refreshToken(payload)
  
  res.status(200).json({message: "User logged successfully✅", data: {AccessToken: accToken, RefreshToken: refToken}})

  }  

  catch(error){
    console.error(error)
    res.status(500).json({message: "Server error"})
  }

}

//REGISTER

const register = async (req, res)=>{
  const {username, password} = req.body

  if(!username || !password){
    return res.status(400).json({message: "missing field"})
  }

  if (usersDB.find(u => u.username == username)){
    return res.status(400).json({message: "User already exists!"})
  }

  const hashed = await hashedPassword (password)

  usersDB.push({username, password: hashed})

  res.status(200).json({message: "User registered successfully✅", data: {username, password: hashed}})
}

// REFRESH TOKEN 

const refreToken = (req, res) => {
  res.send("Refresh Token route OK")
}

// LOGOUT 

const logout = (req, res) => {
  res.send("Logout route OK")
}


module.exports = {profile, login, register, refreToken, logout}