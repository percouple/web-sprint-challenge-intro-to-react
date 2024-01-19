import React, { useState } from 'react'

function Character({ name, homeworld }) { // ❗ Add the props

  // ❗ Create a state to hold whether the homeworld is rendering or not
  let [toggledOn, setToggledOn] = useState('false');

  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleP = () => setToggledOn(!toggledOn)

  return (
    <div className={"character-card"} onClick={toggleP}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className={"character-name"}>{name}</h3>
      {toggledOn ? <p>Planet:
        <span className={"character-planet"} > {homeworld}</span>
      </p> : ''}
    </div>
  )
}

export default Character
