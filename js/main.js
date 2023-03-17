import axiosClient from './api/axiosClient'
import axios from 'axios'
import postApi from './api/postApi'

console.log('hmm')

async function main() {
  const queryParams = {
    _page: 1,
    _limit: 5,
  }
  const reponse = await postApi.getAll(queryParams)
  console.log(reponse)
}

main()
