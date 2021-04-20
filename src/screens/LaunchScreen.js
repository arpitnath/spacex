import React from 'react'
import Tables from '../components/Tables'
import { useFetch } from '../useFetch'

const LaunchScreen = () => {
  const { data } = useFetch('https://jsonplaceholder.typicode.com/posts')

  return (
    <div>
      <h1>Launch Screen</h1>

      {!data ? 'loading...' : <Tables data={data} />}
    </div>
  )
}

export default LaunchScreen
