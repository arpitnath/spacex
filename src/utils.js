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

export const getDate = utc => {
  var date = utc?.split('T')[0]
  var time = utc?.split('T')[1]

  var final_date = date?.split('-')

  return `${final_date?.reverse().join('-')} at ${time?.slice(0, 5)}`
}
