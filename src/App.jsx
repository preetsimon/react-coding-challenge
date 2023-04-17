import { useEffect, useState } from 'react'
import './App.css'
import Bulb from './components/Bulb'

function App() {
  const [lightclass1, setLight1] = useState("on")
  const [lightclass2, setLight2] = useState("on")
  const [lightclass3, setLight3] = useState("on")
  const [lightclass4, setLight4] = useState("on")
  const [lightclass5, setLight5] = useState("on")
  const [lightclass6, setLight6] = useState("on")
  const [lightclass7, setLight7] = useState("on")


  return (
    <>
      <div className='container' style={{ position: "absolute" }}>

      </div>
      <h1 style={{ top: "2%", position: 'absolute', left: "30%" }}>Turn Off the lights!</h1>
      <div style={{ position: "absolute", top: "300px", right: "300px", left: "0px", padding: "10px" }} className="wrapper">
        <Bulb toggleBulb={setLight1} lightclass={lightclass1}></Bulb>
        <Bulb toggleBulb={setLight2} lightclass={lightclass2}></Bulb>
        <Bulb toggleBulb={setLight3} lightclass={lightclass3}></Bulb>
        <Bulb toggleBulb={setLight4} lightclass={lightclass4}></Bulb>
        <Bulb toggleBulb={setLight5} lightclass={lightclass5}></Bulb>
        <Bulb toggleBulb={setLight6} lightclass={lightclass6}></Bulb>
        <Bulb toggleBulb={setLight7} lightclass={lightclass7}></Bulb>
      </div >
    </>

  )
}

export default App
