import axiosClient from './api/axiosClient'
import axios from 'axios'
import postApi from './api/postApi'

async function main() {
  try {
    const queryParams = {
      _page: 1,
      _limit: 5,
    }
    const data = await postApi.getAll(queryParams)
    console.log(data);
  } catch (error) {}

  await postApi.update({
    id: 'lea11nlelf3n3umu',
    title: 'Dicta molestiae uplo',
  })
}

main()
