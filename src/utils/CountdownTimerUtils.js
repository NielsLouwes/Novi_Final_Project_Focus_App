import dayjs from 'dayjs'

export function getRemainingTimeUntilMsTimeStamp(timestampMs) {
  const timestampDayjs = dayjs(timestampMs);
  const nowDayjs = dayjs();

    return {
      minutes: "30",
      seconds: "00"
    }
}

function getRemainingMinutes(nowDayjs, timestampDayjs ) {

}
function getRemainingSeconds(nowDayjs, timestampDayjs ) {
  
}