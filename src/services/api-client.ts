
import axios, { CanceledError } from 'axios'

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
      key: '841fdb88b7c14bcdbb8e7058452abd86',
    },
  });

export { CanceledError }
