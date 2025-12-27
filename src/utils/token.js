const jwt = require("jsonwebtoken")

const accessToken = (payload)=>{
  return jwt.sign(payload, process.env.SECRET_ACCESS_TOKEN, {expiresIn:"1h"})
}

const refreshToken = (payload)=>{
  return jwt.sign(payload, process.env.REFRESH_TOKEN, {expiresIn: "7d"})
}

module.exports = {accessToken, refreshToken}