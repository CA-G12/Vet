import CustumError from '../error/custumError'
import { User } from '../../models'
// import { string } from 'joi'

const findOrCreate = async (name:string, email:string, avatar:string) => {
  try {
    let userAuth:{
        username?: string
        email?:string
        profileImg?: string
        accessToken?:string
    } = {}
    const userExist = await User.findOne({ where: { email } })
    console.log(userExist)

    if (!userExist) {
      console.log('user not Exist')
      await User.create({ name, email, avatar, password: '', role: 'USER' })
    }
    userAuth = {
      username: name,
      email,
      profileImg: avatar
    }
    return userAuth
  } catch (error) {
    throw new CustumError(422, 'error in google auth')
  }
}

export default findOrCreate
