import axios from 'axios'

export function getProducts(params: any) {
  return axios.get('test.com/test').then((res) => res.data)
}
