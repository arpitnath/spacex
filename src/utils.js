export const getLaunchData = (_res, arr) => {
  _res?.map(data => {
    arr.push({
      serial_number: data.flight_number,
      date: getDate(data.launch_date_utc),
      location: data.launch_site.site_name,
      full_location: data.launch_site.site_name_long,
      mission: data.mission_name,
      rocket: data.rocket.rocket_name,
      rocket_type: data.rocket.rocket_type,
      orbit: data.rocket.second_stage.payloads[0].orbit,
      status: data.launch_success,
      article_link: data.links.article_link,
      wikipedia_link: data.links.wikipedia,
      video_link: data.links.video_link,
      description: data.details,
      img: data.links.mission_patch_small,
      manufacturer: data.rocket.second_stage.payloads[0].manufacturer,
      payload: data.rocket.second_stage.payloads[0].payload_id,
      payload_type: data.rocket.second_stage.payloads[0].payload_type,
      failed_details:
        data.launch_success === false
          ? data.launch_failure_details.reason
          : null
    })
    return data
  })
  // console.log(arr)
  return arr
}

export const getCapsuleData = (_res, arr) => {
  _res?.map(data => {
    arr.push({
      serial_number: data.capsule_serial,
      capsule_id: data.capsule_id,
      date: data.original_launch ? getDate(data.original_launch) : 'N/A',
      mission: data.missions,
      status: data.status,
      landings: data.landings,
      type: data.type,
      description: data.details,
      reuse: data.reuse_count
    })
    return data
  })
  return arr
}

export const getEventsData = (_res, arr) => {
  _res?.map(data => {
    arr.push({
      id: data.id,
      title: data.title,
      date: data.event_date_utc ? getDate(data.event_date_utc) : 'N/A',
      flight_no: data.flight_number,
      description: data.details,
      article_link: data.links.article,
      wikipedia_link: data.links.wikipedia,
      reddit_link: data.links.reddit
    })
    return data
  })
  return arr
}

export const getShipData = (_res, arr) => {
  _res?.map(data => {
    arr.push({
      ship_id: data.ship_id,
      ship_name: data.ship_name,
      ship_type: data.ship_type,
      roles: data.roles,
      built: data.year_built ? data.year_built : 'N/A',
      home_port: data.home_port,
      weight: data.weight_kg ? data.weight_kg : 'N/A',
      weight_lbs: data.weight_lbs ? data.weight_lbs : 'N/A',
      missions: data.missions,
      landings: data.landings,
      url: data.url,
      image: data.image
    })
    return data
  })
  // console.log(arr)
  return arr
}

export const getDate = utc => {
  var date = utc?.split('T')[0]
  var time = utc?.split('T')[1]

  var final_date = date?.split('-')

  return `${final_date?.reverse().join('-')} at ${time?.slice(0, 5)}`
}
