
import { useEffect, useState } from 'react'
import './App.css'
import Bulb from './components/Bulb'


function App() {
  const [lightclass1, setLight1] = useState({ class: "on", id: 0 })
  const [lightclass2, setLight2] = useState({ class: "on", id: 1 })
  const [lightclass3, setLight3] = useState({ class: "on", id: 2 })
  const [lightclass4, setLight4] = useState({ class: "on", id: 3 })
  const [lightclass5, setLight5] = useState({ class: "on", id: 4 })
  const [lightclass6, setLight6] = useState({ class: "on", id: 5 })
  const [lightclass7, setLight7] = useState({ class: "on", id: 6 })


  const [queue, setQueue] = useState([])


  // Adds a new item to the front of the queue.
  function enqueueFront(value) {
    setQueue([value, ...queue]);
  }
  // Adds a new item to the back of the queue.// dont add duplicates
  function enqueueBack(value) {

    if (!queue.includes(value)) {
      setQueue([...queue, value]);
    }
  }
  // Removes an item from the front of the queue.
  function dequeueFront() {
    if (queue.length === 0) {
      return undefined;
    }
    const front = queue[0];
    setQueue(queue.slice(1));
    return front;
  }


  // Removes an item from the back of the queue.
  function dequeueBack() {
    if (queue.length === 0) {
      return undefined;
    }
    const back = queue[queue.length - 1];
    setQueue(queue.slice(0, -1));
    return back;
  }

  // remove bulb fromm queue
  // const removeMe = (index) => {
  // const temp = [...queue]
  // temp.splice(index, 1)
  // setQueue(temp)
  //   console.log(`removing ${index}`)
  // }
  const removeMe = (index) => {
    setQueue(
      queue.filter(el => el !== index)
    )
    console.log(`removing ${index}`)
  }


  useEffect(() => {
    function forEachWithDelay(array, callback, delay) {
      let i = 0;
      let interval = setInterval(() => {
        callback(array[i], i, array);
        if (++i === array.length) clearInterval(interval);
      }, delay);
      setQueue([])
    };
    if (queue.length >= 7) {
      forEachWithDelay(queue, (queueItem, i) => {
        console.log("Queue is full")
        console.log(`turning ${queueItem} on`)

        if (queueItem === 0) {
          setLight1({ class: "on", id: 0 })
        } else if (queueItem === 1) {
          setLight2({ class: "on", id: 1 })
        } else if (queueItem === 2) {
          setLight3({ class: "on", id: 2 })
        } else if (queueItem === 3) {
          setLight4({ class: "on", id: 3 })
        } else if (queueItem === 4) {
          setLight5({ class: "on", id: 4 })
        } else if (queueItem === 5) {
          setLight6({ class: "on", id: 5 })
        } else if (queueItem === 6) {
          setLight7({ class: "on", id: 6 })
        }
      }, 1000);

    }
    console.log(queue)
  }, [queue])



  return (
    <>
      <div className='container' style={{ position: "absolute" }}>


      </div>
      <h1 style={{ top: "2%", position: 'absolute', left: "30%" }}>Turn Off the lights!</h1>
      <div style={{ position: "absolute", top: "150px", right: "250px", left: "0px", padding: "10px" }} className="wrapper">

        <Bulb toggleBulb={setLight1} lightclass={lightclass1.class} addToQueue={enqueueBack} bulbId={lightclass1.id} remove={removeMe}></Bulb>

        <Bulb toggleBulb={setLight2} lightclass={lightclass2.class} addToQueue={enqueueBack} bulbId={lightclass2.id} remove={removeMe}></Bulb>

        <Bulb toggleBulb={setLight3} lightclass={lightclass3.class} addToQueue={enqueueBack} bulbId={lightclass3.id} remove={removeMe}></Bulb>

        <Bulb toggleBulb={setLight4} lightclass={lightclass4.class} addToQueue={enqueueBack} bulbId={lightclass4.id} remove={removeMe}></Bulb>

        <Bulb toggleBulb={setLight5} lightclass={lightclass5.class} addToQueue={enqueueBack} bulbId={lightclass5.id} remove={removeMe}></Bulb>

        <Bulb toggleBulb={setLight6} lightclass={lightclass6.class} addToQueue={enqueueBack} bulbId={lightclass6.id} remove={removeMe}></Bulb>

        <Bulb toggleBulb={setLight7} lightclass={lightclass7.class} addToQueue={enqueueBack} bulbId={lightclass7.id} remove={removeMe}></Bulb>
      </div >
    </>


  )
}


export default App
