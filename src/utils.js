export const getDate = utc => {
  var date = utc.split('T')[0]
  var time = utc.split('T')[1]

  var final_date = date.split('-')

  return `${final_date.reverse().join('-')} at ${time.slice(0, 5)}`
}
