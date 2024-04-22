import React, { useState } from 'react'

export default function MessageToggle() {
    const [message, setMessage] = useState(true);
    const toggleMessage = () => {
        setMessage(!message);
    };

  return (
      <div>
        <button onClick={toggleMessage}> Toggle </button>
        { message && <p>THE ONE PIECE IS REAL!</p> }
    </div>
  )
}