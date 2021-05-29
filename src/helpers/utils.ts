import axios from 'axios'
import { useEffect, useState } from 'react'
import { apiData, launchDataRes } from './types'

//api end-points
export const launchApi = process.env.REACT_APP_SPACEX_BASE_API + 'launches'
const CancelToken = axios.CancelToken
const source = CancelToken.source()

export interface StateData {
  state: launchDataRes[] | null
  loading: boolean
}

export const useFetch = (url: string) => {
  const [data, setData] = useState<StateData>({ state: null, loading: false })

  useEffect(() => {
    ;(async function () {
      const { data } = await axios.get(url)
      const dataArr: launchDataRes[] = []
      parseLaunchData(data, dataArr)

      setData({ state: dataArr, loading: true })
    })()
    return () => {
      source.token
      //   setData({ state: null, laoding: false })
    }
  }, [url])

  return { data, setData }
}

export const fetchData = async (url: string) => {
  try {
    const { data } = await axios.get(url)

    // return obj({ state: data, laoding: true })
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error)
      //   handleAxiosError(error)
    } else {
      //   handleUnexpectedError(error)
      console.log(error)
    }
  }
}

const parseLaunchData = (_res: never[], arr: launchDataRes[]) => {
  _res?.map((data: apiData) => {
    arr.push({
      //   id: uuidv4(),
      serial_number: data.flight_number,
      //   date: parseDate(`${data.launch_date_utc}`),
      date: data.launch_date_utc,
      location: data.launch_site.site_name,
      full_location: data.launch_site.site_name_long,
      mission: data.mission_name,
      rocket: data.rocket.rocket_name,
      rocket_type: data.rocket.rocket_type,
      orbit: data.rocket.second_stage.payloads[0].orbit,
      status: data.launch_success,
      upcoming: data.upcoming,
      article_link: data.links.article_link,
      wikipedia_link: data.links.wikipedia,
      video_link: data.links.video_link,
      description: data.details,
      img: data.links.mission_patch_small,
      manufacturer: data.rocket.second_stage.payloads[0].manufacturer,
      payload: data.rocket.second_stage.payloads[0].payload_id,
      nationality: data.rocket.second_stage.payloads[0].nationality,
      payload_type: data.rocket.second_stage.payloads[0].payload_type,
      failed_details:
        data.launch_success === false
          ? data.launch_failure_details.reason
          : null
    })
    // return data
  })
  return arr
}
