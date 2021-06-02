import React, { useCallback } from 'react'
import { launchDataRes } from '../helpers/types'
import History from '../helpers/History'
import LaunchTableBody from './LaunchTableBody'
import NoData from './Nodata'

interface IProps {
  data: launchDataRes[]
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
        return <LaunchTableBody data={data} openModal={openModal} />
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
