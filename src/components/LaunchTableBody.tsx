import React from 'react'
import { launchDataRes } from '../helpers/types'
import Status from './Status'

interface IProps {
  data: launchDataRes[]
  openModal: (itemData: launchDataRes) => void
}

const LaunchTableBody: React.FC<IProps> = ({ data, openModal }) => {
  return (
    <>
      {data.map((item) => (
        <tr key={item.id} onClick={() => openModal(item)}>
          <td>{item.serial_number}</td>
          <td>{item.date}</td>
          <td>{item.location}</td>
          <td>{item.mission}</td>
          <td>{item.orbit}</td>
          <td>
            <Status status={item.status} from='table' />
          </td>
          <td>{item.rocket}</td>
        </tr>
      ))}
    </>
  )
}

export default LaunchTableBody
