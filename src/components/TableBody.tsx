import React, { useCallback } from 'react'
import { capsuleDataRes, launchDataRes } from '../helpers/types'
import History from '../helpers/History'
import LaunchTableBody from './LaunchTableBody'
import NoData from './Nodata'
import CapsuleTableBody from './CapsuleTableBody'

interface IProps {
  // eslint-disable-next-line
  data: any[]
  openModal: (itemData: launchDataRes) => void
}

enum _paths {
  CAPSULE = 'capsule',
  EVENTS = 'events',
  LAUNCH = 'launch',
  SHIPS = 'ships'
}

const TableBody: React.FC<IProps> = ({ data, openModal }) => {
  const _location = History.location.pathname

  const tableContent = useCallback(
    (loc: string) => {
      if (loc.includes(_paths.LAUNCH)) {
        const info: launchDataRes[] = data
        return <LaunchTableBody data={info} openModal={openModal} />
      }

      if (loc.includes(_paths.CAPSULE)) {
        const info: capsuleDataRes[] = data
        return <CapsuleTableBody data={info} />
      } else {
        return (
          <tr>
            <td>
              <NoData />
            </td>
          </tr>
        )
      }
    },
    [data, openModal]
  )

  return <>{tableContent(_location)}</>
}
export default TableBody
