import axios from '../../utils/axios'

export const fetchBlogList = async () => {
  return await axios.get('http://blog.linesh.tw/api/posts.json')
}
