import axiosInstance from 'axios'

export const axios = axiosInstance.create({
  timeout: 20 * 1000,
})
