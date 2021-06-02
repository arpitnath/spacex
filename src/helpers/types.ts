export type Image = {
  src: string
  alt: string
}

interface Loading {
  loading: boolean
}

export type StateData = Loading & {
  state: launchDataRes[] | null
}

export type InfoData = Loading & {
  state: responseInfo | null
}

export type Error = {
  status: number
  message: string
}

export interface launchDataRes {
  id: string
  serial_number: string
  date: string
  location: string
  full_location: string
  mission: string
  rocket: string
  rocket_type: string
  orbit: string
  status: boolean
  upcoming: boolean
  article_link: string
  wikipedia_link: string
  video_link: string
  description: string
  img: string
  manufacturer: string
  payload: string
  nationality: string
  payload_type: string
  failed_details: string | null
}
export interface apiData {
  flight_number: string
  launch_date_utc: string
  launch_site: { site_name: string; site_name_long: string }
  mission_name: string
  rocket: {
    rocket_name: string
    rocket_type: string
    second_stage: {
      payloads: [
        {
          orbit: string
          manufacturer: string
          payload_id: string
          nationality: string
          payload_type: string
        }
      ]
    }
  }
  launch_success: boolean
  upcoming: boolean
  links: {
    article_link: string
    wikipedia: string
    video_link: string
    mission_patch_small: string
  }
  details: string
  launch_failure_details: { reason: string }
}

export interface responseInfo {
  name: string
  founder: string
  founded: number
  employees: number
  vehicles: number
  launch_sites: number
  test_sites: number
  ceo: string
  cto: string
  coo: string
  cto_propulsion: string
  valuation: number
  headquarters: {
    address: string
    city: string
    state: string
  }
  links: {
    website: string
    flickr: string
    twitter: string
    elon_twitter: string
  }
  summary: string
}
