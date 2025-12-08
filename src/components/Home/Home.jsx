import React, { useState } from 'react'
import "./Home.css"
import { Typewriter } from 'react-simple-typewriter'

function Home() {
  const [coords, setCoords] = useState({ x: "50%", y: "50%" })
  const [isLoaded, setIsLoaded] = useState(false)
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    setCoords({
      x: `${clientX}px`,
      y: `${clientY}px`
    })
  }
  
  return (
    <div
      id="home"
      style={{
        "--x": coords.x,
        "--y": coords.y
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="leftHome">
        <div className="homedetails">
          <div className="line1">I'm </div>
          <div className="line2">Aarti Singh</div>
          <div className="line3">
            <Typewriter
              words={["Web Developer", "Software Developer", "Competitive Programmer", "UI/UX Designer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <button className='btn'>Hire Me</button>
        </div>
      </div>
      
      <div className="rightHome">
        {!isLoaded && (
          <div className="spline-loader">
            <div className="loader-spinner"></div>
            <p>Loading 3D Scene...</p>
          </div>
        )}
        <iframe 
          src='https://my.spline.design/untitled-ePOvj8nOta7ezze4ZW0UIJ2d/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          title="3D Spline Scene"
          loading="eager"
          allow="accelerometer; gyroscope; magnetometer"
          onLoad={() => setIsLoaded(true)}
          className="spline-iframe"
        />
      </div>
    </div>
  )
}

export default Home;