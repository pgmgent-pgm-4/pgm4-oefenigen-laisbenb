import React, { useState } from 'react'

export default function Switch() {
    const [color, setColor] = useState(true);
    const changeBackgroundColor = () => {
      setColor(!color);
      document.body.style.backgroundColor = color ? 'black' : 'white';
    };
  return (
    <div>
        <button onClick={changeBackgroundColor}>Change background color</button>
    </div>
  )
}