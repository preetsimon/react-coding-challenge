import React from 'react'
import "./Bulb.css"

const Bulb = ({ lightclass, toggleBulb }) => {
    // updatedValue = { "item1": "juice" };
    // setShopCart(shopCart => ({
    //     ...shopCart,
    //     ...updatedValue
    // }));

    const handleClick = () => {
        lightclass === "on" ? toggleBulb(lightclass => ({
            ...lightclass, ...{ class: "off" }
        })) : toggleBulb(lightclass => ({
            ...lightclass, ...{ class: "on" }
        }))
    }
    return (
        <div onClick={handleClick} className={"light-bulb " + (lightclass || "")}>
        </div>
    )
}

export default Bulb