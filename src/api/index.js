import createUserApi from './user.js'
import createPostApi from './post.js'
import createCommentApi from './comment.js'
import createTagApi from './tag.js'

//export 'default' mówi o tym żę jest to nienazwany export
export default ({ axios }) => {
  return {
    userApi: createUserApi({ axios }),
    postApi: createPostApi({ axios }),
    commentApi: createCommentApi({ axios }),
    tagApi: createTagApi({ axios })
  }
}