import React from 'react'
import video from "../../Video/videoRatchet.mp4"
import ContentMain from './ContentMain'

export default function Main() {
  return (
    <div className='hero-container'>
      <div className='hero-bg'>
          <ContentMain />
        <video autoPlay loop muted className='video-bg'>
          <source src={video} type='video/mp4' />
        </video>
      </div>
    </div>
  )
}
