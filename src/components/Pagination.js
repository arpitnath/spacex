import React from 'react'
import commonStyles from '../styles/common.module.css'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
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
