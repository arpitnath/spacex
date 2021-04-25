{Props.find(filter => filter === 'fail') && (
        <>
          <button
            className={`filterBtn ${cls}`}
            onClick={() => {
              filter('fail')
              cls = 'applied'
            }}
          >
            FilterFail
          </button>
          <button
            className='filterBtn'
            onClick={() => filter('success')}
            disabled
          >
            FilterSuccess
          </button>
        </>
      )}

      {Props.find(filter => filter === 'success') && (
        <>
          <button className='filterBtn' onClick={() => filter('fail')} disabled>
            FilterFail
          </button>
          <button className='filterBtn' onClick={() => filter('success')}>
            FilterSuccess
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