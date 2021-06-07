import React, { useEffect, useState } from 'react'
import History from '../helpers/History'
import styles from '../styles/scss/styles.module.scss'

const PageNotFound: React.FC = () => {
  const [query, setQuery] = useState('inital state')
  const params = History.location.pathname

  useEffect(() => {
    setQuery(params)
  }, [params])
  console.log('https://www.freepik.com/vectors/banner')
  return (
    <div className={styles.errorPage}>
      <div>
        <h3>
          <span className={styles.notpath}>{query}</span> Page Does Not exist!
        </h3>
      </div>
    </div>
  )
}

export default PageNotFound
