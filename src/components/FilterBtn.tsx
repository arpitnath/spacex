import React, { useEffect, useState } from 'react'
import History from '../helpers/History'
import styles from '../styles/scss/styles.module.scss'

type Props = {
  filterFunctions: (x: string) => void
  removeFilter: () => void
  filterUpcoming: () => void
}

type BtnState = {
  active: boolean
  state: boolean
}

type BtnProperties = {
  id: number
  title: string
  filterFunction: () => void
  active: boolean
  state: boolean
  status: string | false
  disable: boolean
}

const FilterButtons: React.FC<Props> = ({
  filterFunctions,
  removeFilter,
  filterUpcoming
}) => {
  const intialState = { active: false, state: false }
  const [succesBtn, setSuccesBtn] = useState<BtnState>(intialState)
  const [failedBtn, setFailedBtn] = useState<BtnState>(intialState)
  const [upcomingBtn, setUpcomingBtn] = useState<BtnState>(intialState)
  const [removeBtn, setRemoveBtn] = useState<BtnState>({
    active: false,
    state: true
  })

  const success = () => {
    filterFunctions('success')
    urlSuccess()
  }
  const fail = () => {
    filterFunctions('fail')
    urlFail()
  }

  const upcoming = () => {
    filterUpcoming()
    urlUpcoming()
  }

  const urlFail = () => {
    // filterFunctions('fail')
    setFailedBtn({ active: true, state: true })
    setSuccesBtn({ active: false, state: true })
    setUpcomingBtn({ active: false, state: true })
    setRemoveBtn({ active: false, state: false })
  }

  const urlSuccess = () => {
    setSuccesBtn({ active: true, state: true })
    setFailedBtn({ active: false, state: true })
    setUpcomingBtn({ active: false, state: true })
    setRemoveBtn({ active: false, state: false })
  }

  const urlUpcoming = () => {
    setUpcomingBtn({ active: true, state: true })
    setSuccesBtn({ active: false, state: true })
    setFailedBtn({ active: false, state: true })
    setRemoveBtn({ active: false, state: false })
  }

  const remove = () => {
    removeFilter()
    setSuccesBtn(intialState)
    setFailedBtn(intialState)
    setUpcomingBtn(intialState)
    setRemoveBtn({ active: false, state: true })
  }

  const btnProps: BtnProperties[] = [
    {
      id: 0,
      title: 'fail',
      filterFunction: () => fail(),
      active: failedBtn.active,
      state: failedBtn.state,
      status: failedBtn.active && 'filterapplied',
      disable: failedBtn.state
    },
    {
      id: 1,
      title: 'success',
      filterFunction: () => success(),
      active: succesBtn.active,
      state: succesBtn.state,
      status: succesBtn.active && 'filterapplied',
      disable: succesBtn.state
    },
    {
      id: 2,
      title: 'upcoming',
      filterFunction: () => upcoming(),
      active: upcomingBtn.active,
      state: upcomingBtn.state,
      status: upcomingBtn.active && 'filterapplied',
      disable: upcomingBtn.state
    },
    {
      id: 3,
      title: 'remove',
      filterFunction: () => remove(),
      active: removeBtn.active,
      state: removeBtn.state,
      status: removeBtn.active && 'filterapplied',
      disable: removeBtn.state
    }
  ]

  useEffect(() => {
    const activeUrlFilter = History.location.search.includes('?filter')
    const activeSuccess = History.location.search.includes(
      'launch_success=true'
    )
    const activeFail = History.location.search.includes('launch_success=false')
    const activeUpcoming = History.location.search.includes('upcoming')

    if (!activeUrlFilter) {
      setSuccesBtn(intialState)
      setFailedBtn(intialState)
      setRemoveBtn({ active: false, state: true })
      setUpcomingBtn(intialState)
    }
    if (activeSuccess) {
      urlSuccess()
    }
    if (activeFail) {
      urlFail()
    }
    if (activeUpcoming) {
      urlUpcoming()
    }
    // eslint-disable-next-line
  }, [History.location.search])
  return (
    <div className={styles.filterWrapper}>
      {btnProps.map((btn) => (
        <button
          key={btn.id}
          className={`${styles.Button} ${styles.filterBtn} ${btn.status}`}
          onClick={btn.filterFunction}
          disabled={btn.disable}>
          {btn.title === 'success' && 'Successful'}
          {btn.title === 'fail' && 'Failed'}
          {btn.title === 'upcoming' && 'Upcoming'}
          {btn.title === 'remove' && '❌ Remove filters'}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons
