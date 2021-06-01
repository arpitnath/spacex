import React, { useCallback, useEffect, useState } from 'react'
import Table from '../components/Table'
import { launchApi, fetchData, categorize } from '../helpers/utils'

import styles from '../styles/scss/styles.module.scss'
import { launchHead } from '../helpers/tableheadData'
import History from '../helpers/History'
import { useFetch } from '../helpers/Hooks'
import Pagination from '../components/Pagination'
import Icon from '@iconify/react'
import { calender, downIcon } from '../helpers/icons'
import Accordion from '../components/Accordion'
import FilterBtn from '../components/FilterBtn'
import { launchDataRes } from '../helpers/types'
import Modal from '../components/Modal'

const Launch: React.FC = () => {
  const path = History.location.pathname.split('/')[1]
  const loc = History.location.search
  const params = History.location.search
  const q = params.split('=page')[1]
  const query = parseInt(q)

  const { data, setData, error } = useFetch(launchApi)

  const [filter, setFilter] = useState<string[]>([])
  const [urlPath, setUrlPath] = useState<string>(path)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstpage = indexOfLastPost - postsPerPage
  let currentPost: launchDataRes[] | null = null
  if (data.state) {
    currentPost = data.state?.slice(indexOfFirstpage, indexOfLastPost)
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  //modal state

  //** */

  const updateUrl = useCallback(() => {
    const Path = path
    const options = filter.join('&')
    const urlQuery = Path + '?filter=' + options
    // console.log(urlQuery)
    setUrlPath(urlQuery)
  }, [filter, path])

  //Filter function
  const filterFunctions = async (status: string) => {
    const launchQuery: string =
      status === 'success' ? 'launch_success=true' : 'launch_success=false'
    const queryPath = urlPath

    let filter_params = '?'
    if (queryPath.includes('filter')) {
      filter_params = queryPath.split('filter=')[1]
    }

    if (queryPath.includes('start')) {
      if (status === 'fail') {
        const getData = await fetchData(
          `${launchApi}${filter_params}&${launchQuery}`
        )
        setData({ state: getData, loading: true })
        // console.log(getData)
        setFilter([...filter, launchQuery])
      }
      if (status === 'success') {
        const getData = await fetchData(
          `${launchApi}${filter_params}&${launchQuery}`
        )
        setData({ state: getData, loading: true })
        console.log(getData)

        setFilter([...filter, launchQuery])
      }
    } else {
      if (status === 'success') {
        const getData = await fetchData(
          `${launchApi}${filter_params}&${launchQuery}`
        )
        setData({ state: getData, loading: true })
        // console.log(getData)
      }
      if (status === 'fail') {
        const getData = await fetchData(
          `${launchApi}${filter_params}&${launchQuery}`
        )
        setData({ state: getData, loading: true })
        console.log(getData)
      }

      setFilter([launchQuery])
    }
    setCurrentPage(1)
  }

  //filter upcoming
  function filterUpcoming() {
    if (data.state) {
      const upcoming = data.state.filter((item) => item.upcoming === true)
      setData({ state: upcoming, loading: true })
      setFilter([...filter, 'upcoming'])
      setCurrentPage(1)
    }
  }

  //remove filters
  async function removeFilter() {
    setFilter([])
    setUrlPath(path)
    const getData = await fetchData(launchApi)
    setData({ state: getData, loading: true })
    // setDatePicker('Filter by date')
  }

  // =============================
  useEffect(() => {
    const _params = loc.split('?q')[0]

    let _filterApplied = '?'
    if (_params.includes('filter')) {
      _filterApplied = _params.split('filter=')[1]

      //check

      // const check_start = categorize(loc, 'start', _filterApplied)
      const check_launch = categorize(loc, 'launch', _filterApplied)
      const check_upcoming = categorize(loc, 'upcoming', _filterApplied)

      // console.log(check_launch)
      // console.log(check_upcoming)
      ;(async function () {
        //upcoming
        if (check_upcoming) {
          const getData = await fetchData(launchApi, true)
          // console.log(getData)
          setData({ state: getData, loading: true })
          setFilter((f) => (f = [...filter, 'upcoming']))
        }

        //start & launch

        //launch
        if (check_launch) {
          const getData = await fetchData(`${launchApi}?${check_launch}`)
          // console.log(getData)
          setData({ state: getData, loading: true })
          setFilter((f) => (f = [check_launch]))
        }

        //start
      })()
    }

    return () => setFilter((f) => (f = []))

    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (filter.length !== 0) {
      updateUrl()
    }
  }, [filter.length, updateUrl])

  function test() {
    console.log('testing modal')
  }

  return (
    <>
      {/* Loading state => `spinner` */}
      <div className={styles.LaunchWrapper}>
        {/* Filters */}
        {error.status !== 100 && error.message}
        {!data.loading ? (
          <>{'loading...'}</>
        ) : (
          <>
            <div className={styles.FilterWrapper}>
              <div className={styles.FilterBtnContainer}>
                <button className={styles.Button}>
                  <Icon className='react-icons' icon={calender} />
                  <span>{'datePicker'}</span>
                  <Icon className='react-icons' icon={downIcon} />
                </button>

                {/* if filters */}
                {loc.includes('filter') && (
                  <button
                    className={styles.ResetBtn}
                    onClick={() => removeFilter()}>
                    Reset
                  </button>
                )}
              </div>
              {/* calender modal */}
              <Modal name='test' callBack={() => test()}>
                <h4>Modal</h4>
              </Modal>

              <Accordion Title='All launches'>
                {
                  <FilterBtn
                    filterFunctions={filterFunctions}
                    removeFilter={removeFilter}
                    filterUpcoming={filterUpcoming}
                  />
                }
              </Accordion>
            </div>

            {data.state !== null && (
              <div className={styles.Container}>
                <Table thead={launchHead} data={currentPost} />
                <Pagination
                  paginate={paginate}
                  postsPerPage={postsPerPage}
                  totalPosts={data.state?.length}
                  currentPage={currentPage}
                  query={query}
                  route={urlPath}
                />
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default Launch
