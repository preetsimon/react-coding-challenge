import { useEffect, useState } from 'react'
import './App.css'
import Bulb from './components/Bulb'

function App() {
  const [lightclass1, setLight1] = useState({ class: "on", id: 1 })
  const [lightclass2, setLight2] = useState({ class: "on", id: 2 })
  const [lightclass3, setLight3] = useState({ class: "on", id: 3 })
  const [lightclass4, setLight4] = useState({ class: "on", id: 4 })
  const [lightclass5, setLight5] = useState({ class: "on", id: 5 })
  const [lightclass6, setLight6] = useState({ class: "on", id: 6 })
  const [lightclass7, setLight7] = useState({ class: "on", id: 7 })

  const [bulbLightQueue, setBulbQueue] = useState([])

  // useEffect(() => {
  //   setBulbQueue(
  //     (oldQueue) => [...oldQueue, lightclass1]
  //   )
  // }, [lightclass1])
  // useEffect(() => {
  //   setBulbQueue(
  //     (oldQueue) => [...oldQueue, lightclass2]
  //   )
  // }, [lightclass2])
  // useEffect(() => {
  //   setBulbQueue(
  //     (oldQueue) => [...oldQueue, lightclass3]
  //   )
  // }, [lightclass3])
  // useEffect(() => {
  //   setBulbQueue(
  //     (oldQueue) => [...oldQueue, lightclass4]
  //   )
  // }, [lightclass4])
  // useEffect(() => {
  //   setBulbQueue(
  //     (oldQueue) => [...oldQueue, lightclass5]
  //   )
  // }, [lightclass5])
  // useEffect(() => {
  //   setBulbQueue(
  //     (oldQueue) => [...oldQueue, lightclass6]
  //   )
  // }, [lightclass6])
  useEffect(() => {
    setBulbQueue(
      (oldQueue) => [...oldQueue, lightclass7]
    )
    console.log(bulbLightQueue)
  }, [[lightclass1, lightclass2, lightclass3, lightclass4, lightclass5, lightclass6, lightclass7]])

  return (
    <>
      <div className='container' style={{ position: "absolute" }}>

      </div>
      <h1 style={{ top: "2%", position: 'absolute', left: "30%" }}>Turn Off the lights!</h1>
      <div style={{ position: "absolute", top: "300px", right: "300px", left: "0px", padding: "10px" }} className="wrapper">
        <Bulb toggleBulb={setLight1} lightclass={lightclass1.class}></Bulb>
        <Bulb toggleBulb={setLight2} lightclass={lightclass2.class}></Bulb>
        <Bulb toggleBulb={setLight3} lightclass={lightclass3.class}></Bulb>
        <Bulb toggleBulb={setLight4} lightclass={lightclass4.class}></Bulb>
        <Bulb toggleBulb={setLight5} lightclass={lightclass5.class}></Bulb>
        <Bulb toggleBulb={setLight6} lightclass={lightclass6.class}></Bulb>
        <Bulb toggleBulb={setLight7} lightclass={lightclass7.class}></Bulb>
      </div >
    </>

  )
}

export default App
