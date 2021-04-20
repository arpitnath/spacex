import React, { useEffect, useState } from 'react'
import commonStyles from '../styles/common.module.css'
import History from './History'

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  query
}) => {
  const [urlPg] = useState(() => (query ? query : 1))

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    // deepscan-disable-line
    pageNumbers.push(i)
  }
  const nextPage = e => {
    e.preventDefault()
    if (currentPage < pageNumbers.slice(-1)[0]) {
      paginate(currentPage + 1)
    }
  }
  const prevPage = () => {
    if (currentPage > pageNumbers[0]) {
      paginate(currentPage - 1)
    }
  }

  useEffect(() => {
    let page = currentPage
    if (page != null) {
      if (History.location.pathname === '/launch') {
        History.push('/launch?q=page' + currentPage)
        // console.log(page)
      }
    }

    return () => {
      page = null
    }
  }, [currentPage])

  useEffect(() => {
    paginate(urlPg)
    // eslint-disable-next-line
  }, [urlPg])

  return (
    <div className={commonStyles.PaginateContainer}>
      <ul className={commonStyles.Pagination}>
        <button onClick={prevPage} className={commonStyles.PaginateBtn}>
          Previous
        </button>
        {pageNumbers.map(number => (
          <li
            onClick={() => {
              paginate(number)
            }}
            key={number}
            className={`${currentPage === number ? 'active' : ''} ${
              commonStyles.pgNumber
            }`}
          >
            {number}
          </li>
        ))}
        <button className={commonStyles.PaginateBtn} onClick={nextPage}>
          Next
        </button>
      </ul>
    </div>
  )
}

export default Pagination
