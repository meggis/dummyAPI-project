import createUserApi from './user.js'
import createPostApi from './post'

export default ({ axios }) => {
  return {
    userApi: createUserApi({ axios }),
    postApi: createPostApi({ axios })
  }
  //And some others components or methods//
  
}