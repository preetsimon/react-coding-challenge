import React from 'react'
import "./Bulb.css"

const Bulb = ({ lightclass, toggleBulb }) => {

    const handleClick = () => {
        lightclass === "on" ? toggleBulb("off") : toggleBulb("on")
    }
    return (
        <div onClick={handleClick} className={"light-bulb " + (lightclass || "")}>
        </div>
    )
}

export default Bulb