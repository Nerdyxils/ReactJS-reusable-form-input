import React from 'react'

import "./Input.css"


const Input = ({styleClass, icon, img }) => {
    return (
        <input type="input" className={`f_input ${styleClass}`} placeholder="Placeholder" > 
           
        </input>
    )
}

export default Input
