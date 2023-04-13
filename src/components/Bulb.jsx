import React from 'react'
import "./Bulb.css"


const Bulb = ({ lightclass, toggleBulb, addToQueue, bulbId, remove }) => {


    const handleClick = () => {
        if (lightclass === "on") {
            toggleBulb(lightclass => ({
                ...lightclass, ...{ class: "off" }
            }))
            addToQueue(bulbId)
        } else {
            toggleBulb(lightclass => ({
                ...lightclass, ...{ class: "on" }

            }))
            remove(bulbId)
        }
    }
    return (
        <div onClick={handleClick} className={"light-bulb " + (lightclass || "")}>
        </div>
    )
}


export default Bulb
