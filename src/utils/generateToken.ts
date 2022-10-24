import jwt from 'jsonwebtoken'
import config from '../config/environment'

const generateToken = (payload:any) => new Promise((resolve, reject) => {
  jwt.sign(payload, config.secretKey || 'hello World', (err:any, token:any) => {
    if (err) reject(err)
    else resolve(token)
  })
})

export default generateToken
