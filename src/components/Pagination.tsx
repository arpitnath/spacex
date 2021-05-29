import React, { useEffect, useState } from 'react'
import styles from '../styles/scss/styles.module.scss'
import History from '../helpers/History'

interface IProps {
  currentPage: number
  postsPerPage: number
  paginate: (pageNumber: number) => void
  totalPosts: number
  query: number
  route: string
}

const Pagination: React.FC<IProps> = ({
  paginate,
  postsPerPage,
  totalPosts,
  currentPage,
  query,
  route
}) => {
  const [urlPg, setUrlPg] = useState<number>(() => (query ? query : 1))

  const pageNumbers: number[] = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const nextPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    paginate(currentPage + 1)
  }
  const prevPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (currentPage > pageNumbers[0]) {
      paginate(currentPage - 1)
    }
  }

  useEffect(() => {
    let page: number | null = currentPage
    if (page != null) {
      History.push(`/${route}?q=page` + currentPage)
    }

    return () => {
      page = null
    }
  }, [currentPage, route])

  useEffect(() => {
    paginate(urlPg)

    return () => {
      setUrlPg(1)
    }
    // eslint-disable-next-line
  }, [urlPg])

  return (
    <div className={styles.PaginationContainer}>
      <div className={styles.Pagination}>
        <button className={styles.PaginationButton} onClick={prevPage}>
          {/* <Icon icon={left} /> */}
          Back
        </button>
        <ul>
          {pageNumbers.map((number, idx) => (
            <li
              className={`${currentPage === number ? 'pgActive' : ''} ${
                styles.PaginationNumber
              }`}
              key={idx}
              onClick={() => {
                paginate(number)
              }}>
              {number}
            </li>
          ))}
        </ul>
        <button className={styles.PaginationButton} onClick={nextPage}>
          {/* <Icon icon={right} /> */}
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination
