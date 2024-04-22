import React, { useState } from 'react'
import Light from './Light'
import Dimmer from './Dimmer'

export default function DimmedLight() {
    const [dimPercentge, setDimPercentage] = useState(100);

  return (
    <div>
        <Light dimPercentge={dimPercentge} />
        <Dimmer dimPercentge={dimPercentge} setDimPercentage={setDimPercentage} />
    </div>
  );
}