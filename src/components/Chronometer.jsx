import React, { useState } from 'react'

function Timer (props) {
  return (
    <div className='timer'>
      <span className='digits'>
        {('0' + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span>
      <span className='digits'>
        {('0' + Math.floor((props.time / 1000) % 60)).slice(-2)}.
      </span>
      <span className='digits mili-sec'>
        {('0' + ((props.time / 10) % 100)).slice(-2)}
      </span>
    </div>
  )
}

function ControlButtons (props) {
  const StartButton = (
    <button
      className='btn btn-one btn-start'
      onClick={props.handleStart}
    >
      Iniciar
    </button>
  )
  const ActiveButtons = (
    <div className='btn-grp'>
      <button
        className='btn btn-two'
        onClick={props.handleReset}
      >
        Terminar
      </button>
    </div>
  )

  return (
    <div className='Control-Buttons'>
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  )
}

function StopWatch () {
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const [time, setTime] = useState(0)

  React.useEffect(() => {
    let interval = null

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isActive, isPaused])

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(false)
  }

  const handlePauseResume = () => {
    setIsPaused(!isPaused)
  }

  const handleReset = () => {
    setIsActive(false)
    setTime(0)
  }

  return (
    <div className='stop-watch'>
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </div>
  )
}

export default StopWatch
