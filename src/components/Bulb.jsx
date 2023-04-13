import React from 'react'
import "./Bulb.css"


const Bulb = ({ lightclass, toggleBulb, addToQueue, bulbId }) => {


    const handleClick = () => {
        lightclass === "on" ? toggleBulb(lightclass => ({
            ...lightclass, ...{ class: "off" }
        })) : toggleBulb(lightclass => ({
            ...lightclass, ...{ class: "on" }
        }))

        lightclass == "on" && addToQueue(bulbId)


    }
    return (
        <div onClick={handleClick} className={"light-bulb " + (lightclass || "")}>
        </div>
    )
}


export default Bulb
