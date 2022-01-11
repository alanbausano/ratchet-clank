import React from 'react'
import TweetEmbed from "react-tweet-embed";

export default function TweetsMobile() {
  return (
    <div className="tweets-container-m">
      <div style={{ width: "250px" }}>
        <TweetEmbed id="1359925227388502017" />
      </div>
      <div style={{ width: "250px" }}>
        <TweetEmbed id="1103777382031376384" />
      </div>
      <div style={{ width: "250px", paddingBottom:'30px' }}>
        <TweetEmbed id="1378429847303639040" />
      </div>
      <div className="custom-shape-divider-bottom-1619446741">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
    </div>
  )
}
