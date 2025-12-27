const bcrypt = require("bcrypt")

const hashedPassword = async (password)=>{
  return await bcrypt.hash(password, 10)
}

const hashCompared = async (password, userPassword)=>{
  return await bcrypt.compare(password, userPassword)
}

module.exports = {hashedPassword, hashCompared}