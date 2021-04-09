import createUserApi from './user.js'
import createPostApi from './post.js'


export default ({ axios }) => {
  return {
    userApi: createUserApi({ axios }),
    postApi: createPostApi({ axios })
  }
}