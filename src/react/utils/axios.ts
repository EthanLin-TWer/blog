import axiosInstance from 'axios'

export const axiosServer = axiosInstance.create({
  baseURL: process.env.SERVER_URL,
  timeout: 20 * 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

export const axiosNormal = axiosInstance.create({
  timeout: 20 * 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})
