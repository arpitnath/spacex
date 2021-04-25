import React from 'react'

const FilterBtns = ({ filter, Props, removeFilter }) => {
  return (
    <>
      {Props.find(filter => filter === 'fail') && (
        <>
          <button className='filterBtn applied'>✓ Failed Launches</button>
          <button className='filterBtn' disabled>
            ❌ Successful Launches
          </button>
          <button className='filterBtn remove' onClick={removeFilter}>
            <span
              className='iconify'
              data-icon='ic:baseline-delete-forever'
              data-inline='false'
            ></span>{' '}
            Remove filters
          </button>
        </>
      )}

      {Props.find(filter => filter === 'success') && (
        <>
          <button className='filterBtn' disabled>
            ❌ FilterFail
          </button>
          <button className='filterBtn applied'>✓ FilterSuccess</button>
          <button className='filterBtn remove' onClick={removeFilter}>
            <span
              className='iconify'
              data-icon='ic:baseline-delete-forever'
              data-inline='false'
            ></span>{' '}
            Remove filters
          </button>
        </>
      )}

      {Props.length === 0 && (
        <>
          <button className='filterBtn' onClick={() => filter('fail')}>
            FilterFail
          </button>
          <button className='filterBtn' onClick={() => filter('success')}>
            FilterSuccess
          </button>
        </>
      )}
    </>
  )
}

export default FilterBtns
