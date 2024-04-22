import React, { useState } from 'react'

export default function Switch() {
    const [color, setColor] = useState(document.body.style.backgroundColor = "red");
    const changeBackgroundColor = () => {
        setColor(!color);
    };
  return (
    <div>
        <button onClick={changeBackgroundColor}>Change background</button>
        { color }
    </div>
  )
}