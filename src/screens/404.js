import React, { useEffect, useState } from 'react'
import ScrollLock from 'react-scrolllock'
import History from '../components/History'

const NotFound = () => {
  const [query, setQuery] = useState('inital state')
  let params = History.location.pathname

  useEffect(() => {
    setQuery(params)
  }, [params])
  return (
    <>
      <ScrollLock>
        <div className='NFpage'>
          <div>
            <h3>
              <span className='nfRoute'>{query}</span> Page Does Not exist!
            </h3>
          </div>
        </div>
      </ScrollLock>
    </>
  )
}

export default NotFound
