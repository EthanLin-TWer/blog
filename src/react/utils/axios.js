import axios from 'axios'

export default axios.create({
  // baseURL: 'http',
  timeout: 20 * 1000,
})
