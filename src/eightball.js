import React, { useState } from "react";







const Eightball = (props)=>{
let { responses } = props
let randomNum = Math.floor(Math.random() * responses.length)
const [question, answer] = useState('Think of a Question')
const [oColor, cColor] = useState('black')


console.log(responses[randomNum])

    return(
        <>
        {console.log(responses[randomNum].color)}
        <div className="eightball" style={{background:oColor}}>
        <h2 className="eightball_words">{question}</h2>
        <button onClick={()=>{
             answer(responses[randomNum].msg)
             cColor(responses[randomNum].color)
             }}>Get the Answer</button>
        </div>
        </>
    )
}




export default Eightball