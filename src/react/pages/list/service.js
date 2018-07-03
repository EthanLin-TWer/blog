import axios from '../../utils/axios'

export const fetchBlogList = async () => {
  return await axios.get(
    'https://api.github.com/repos/linesh-simplicity/linesh-simplicity.github.io/contents/_posts'
  )
}
