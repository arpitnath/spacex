import React from 'react'

const FilterBtns = ({ filter, Props }) => {
  return (
    <>
      {Props.find(filter => filter === 'fail') && (
        <>
          <button onClick={() => filter('fail')}>FilterFail</button>
          <button onClick={() => filter('success')} disabled>
            FilterSuccess
          </button>
        </>
      )}

      {Props.find(filter => filter === 'success') && (
        <>
          <button onClick={() => filter('fail')} disabled>
            FilterFail
          </button>
          <button onClick={() => filter('success')}>FilterSuccess</button>
        </>
      )}

      {Props.length === 0 && (
        <>
          <button onClick={() => filter('fail')}>FilterFail</button>
          <button onClick={() => filter('success')}>FilterSuccess</button>
        </>
      )}
    </>
  )
}

export default FilterBtns
