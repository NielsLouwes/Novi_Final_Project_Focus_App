import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import {getRemainingTimeUntilMsTimeStamp} from '../utils/CountdownTimerUtils'

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 15px;
  width: 90%;
  margin: auto;

  div {
    margin-left: 5px;
    margin-right: 5px;
  }
`

const Heading = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 45px;
`

const Container = styled.div`
`

const defaultRemainingTime = {
  minutes: '30',
  seconds: '00',
}

const CountdownTimer = ({countdownTimestampMs}) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

  useEffect(() => {
    const intervalId = setInterval(() => {
        updateRemainingTime(countdownTimestampMs)
    }, 1000)
    return () => clearTimeout(intervalId)
  }, [countdownTimestampMs])

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimeStamp(countdown))
  }

  return (
    <StyledWrapper>
      <Heading>Pomodoro Timer</Heading>
      <Container>
       <div>25:00</div>
      </Container>
    </StyledWrapper>
  )
  }
export default CountdownTimer;
