const jwt = require("jsonwebtoken")

const accessToken = (payload)=>{
  return jwt.sign(payload, process.env.SECRET_ACCESS_TOKEN, {expiresIn:"1m"})
}

const refreshToken = (payload)=>{
  return jwt.sign(payload, process.env.REFRESH_TOKEN, {expiresIn: "5m"})
}

module.exports = {accessToken, refreshToken}