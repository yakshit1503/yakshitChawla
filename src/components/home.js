import React from 'react'
import Typed from "react-typed"

const home = () => {
  return (
    <div className="name">
      <Typed
        strings={[
          "Hello World <>",
          "My name is Yakshit Chawla",
          "I am a Front End Developer",
        ]}
        typeSpeed={150}
        backSpeed={100}
        loop
      />
    </div>
  )
}

export default home