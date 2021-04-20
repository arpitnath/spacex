import React from 'react'
import screenStyles from '../styles/screens.module.css'

const Tables = ({ data, loading }) => {
  // const launchData = [
  //   {
  //     id: 0,
  //     launch: '22nd March 2020 at 2.30pm',
  //     Location: 'California, United States',
  //     Misson: 'Apolo II',
  //     Orbit: 'Mars',
  //     launch_status: 'success',
  //     rokcet: 'Falcon 4'
  //   },
  //   {
  //     id: 1,
  //     launch: '22nd March 2020 at 2.30pm',
  //     Location: 'California, United States',
  //     Misson: 'Apolo II',
  //     Orbit: 'Mars',
  //     launch_status: 'success',
  //     rokcet: 'Pikachuu'
  //   },
  //   {
  //     id: 2,
  //     launch: '22nd March 2020 at 2.30pm',
  //     Location: 'California, United States',
  //     Misson: 'Apolo II',
  //     Orbit: 'Mars',
  //     launch_status: 'success',
  //     rokcet: 'Goku'
  //   },
  //   {
  //     id: 3,
  //     launch: '22nd March 2020 at 2.30pm',
  //     Location: 'California, United States',
  //     Misson: 'Apolo II',
  //     Orbit: 'Mars',
  //     launch_status: 'success',
  //     rokcet: 'Falcon 22'
  //   },
  //   {
  //     id: 4,
  //     launch: '2nd October 2021 at 2.30pm',
  //     Location: 'Mumbai, India',
  //     Misson: 'Piku chanachuur',
  //     Orbit: 'Galaxy',
  //     launch_status: 'upcoming',
  //     rokcet: 'Dora'
  //   }
  // ]

  if (!loading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <table className={screenStyles.Table}>
        <thead>
          <tr>
            <th>No:</th>
            <th>Launch (UTC)</th>
            <th>Location</th>
            <th>Mission</th>
            <th>Orbit</th>
            <th>Launch Status</th>
            <th>Rocket</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(launch => (
            <tr key={launch.id} onClick={() => console.log('modal here')}>
              <td>{launch.id}</td>
              <td>{launch.title}</td>
              <td>{launch.body}</td>
              <td>{launch.userId}</td>
              <td>{launch.title}</td>
              <td>{launch.title}</td>
              <td>{launch.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Tables
