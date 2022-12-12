import React from 'react'
import background from "../Assets/Background.mp4"
import "./Home.css"
const Home = () => {
  return (
    <>
      <video src={background} autoPlay loop muted className='background-video'></video>


      <div class="sp-container">
        <div class="sp-content">
          <div class="sp-globe"></div>
          <h2 class="frame-1">HUSTLERS</h2>
          <h2 class="frame-2">Only Store In Pakistan</h2>
          <h2 class="frame-3">Provides Best Quality Embossed</h2>
          <h2 class="frame-4">Hoodies SweatShirts And TShirts</h2>
          <h2 class="frame-5">
            <span>Coming Soon, </span>
            <span>Stay Tunned</span>
          </h2>
          {/* <a class="sp-circle-link" href="https://nick.mkrtchyan.ga">by Nick</a> */}
        </div>
      </div>
    </>
  )
}

export default Home