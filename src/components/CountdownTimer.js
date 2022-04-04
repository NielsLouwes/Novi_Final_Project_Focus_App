import React from 'react'
import { useCountdown } from '../hooks/useCountdown';


function CountdownTimer({targetDate}) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if(days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />
  } else {
    return (
    <div className="pomo-container">
        <button className="pomodoro">Pomodoro</button>
        <div className="pomo-break-timers">
          <button>Short Break</button>
          <button>Long Break</button>
        </div>
        <div className="timer">{minutes}m{seconds}s</div>
        <button className="start-button">Start</button>
      </div>
  )
  }
}

export default CountdownTimer;
