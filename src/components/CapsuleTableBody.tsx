import React from 'react'
import { capsuleDataRes } from '../helpers/types'
import { parseDate } from '../helpers/utils'

interface IProps {
  data: capsuleDataRes[]
}

const CapsuleTableBody: React.FC<IProps> = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <tr key={item.capsule_serial}>
          <td>{item.capsule_serial}</td>
          <td>{parseDate(item.original_launch)}</td>
          <td>{item.status}</td>
          <td>{item.landings}</td>
          <td>{item.details ? item.details : 'N/A'}</td>
        </tr>
      ))}
    </>
  )
}

export default CapsuleTableBody
