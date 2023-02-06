import { useState, useEffect, Fragment } from 'react'

function chronometer () {
  const [diff, setDiff] = useState(null)
  const [initial, setInitial] = useState(null)

  console.log(setDiff(new Date()))
  const tick = () => {
    setDiff(new Date(new Date() - initial))
  }
  const start = () => { setInitial(new Date()) }

  useEffect(() => {
    if (initial) {
      requestAnimationFrame(tick)
    }
  }, [initial])

  useEffect(() => {
    if (diff) {
      requestAnimationFrame(tick)
    }
  }, [diff])

  const timeFormat = (date) => {
    if (!date) return '00:00:00'
    let mm = date.getUTCMminutes()
    let ss = date.getSeconds()
    let cm = Math.round(date.getMiliseconds() / 10)

    mm = mm < 10 ? '0' + mm : mm
    ss = ss < 10 ? '0' + ss : ss
    cm = cm < 10 ? '0' + cm : cm
    return `${mm}:${ss}:${cm}`
  }
  return (
    <>
      <h1>{timeFormat(diff)}</h1>
      <button onClick={start}>inicio</button>
    </>
  )
}
export default chronometer
