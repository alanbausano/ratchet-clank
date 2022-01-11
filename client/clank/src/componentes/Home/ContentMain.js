import React from 'react'
import { Link } from 'react-router-dom'
import Parallax from 'react-rellax'

export default function ContentMain() {
  return (
    <div className='content-main'>
    <Parallax speed={ 1 }>
      <h1>Ratchet & Clank 5 comming up September 8th</h1>
      <p>Don't miss the chance to play as Ratchet this winter as the game makes its way through the top 5 games of the year, guaranteed!</p>
      <p>Register now and get a 30% discount on all platforms.</p>
    </Parallax>
    <Parallax speed={-2}>
      <Link to='signup'><button className='nav-item registro'>Sign up</button></Link>
    </Parallax>
    </div>
  )
}
