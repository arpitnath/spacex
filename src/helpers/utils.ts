import axios from 'axios'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import { apiData, launchDataRes } from './types'

//api end-points
export const launchApi = process.env.REACT_APP_SPACEX_BASE_API + 'launches'

export const fetchData = async (url: string) => {
  try {
    const { data } = await axios.get(url)
    return { data }
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

export const parseLaunchData = (_res: never[], arr: launchDataRes[]) => {
  _res?.map((data: apiData) => {
    arr.push({
      id: uuidv4(),
      serial_number: data.flight_number,
      date: parseDate(`${data.launch_date_utc}`),
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

const parseDate = (utc: string) => {
  return moment(utc).format('DD-MM-YYYY HH:mm')
}
