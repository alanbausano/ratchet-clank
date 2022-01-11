import React from 'react'
import { Link } from 'react-router-dom'

export default function ContentMainMobile() {
  return (
    <div className='content-main-m'>
      <h2>Ratchet & Clank 5 comming up September 8th</h2>
      <p>Don't miss the chance to play as Ratchet this winter as the game makes its way through the top 5 games of the year, guaranteed!</p>
      <p>Register now and get a 30% discount on all platforms.</p>
      <Link to='registro'><button className='nav-item registro'>Sign up</button></Link>
    </div>
  )
}
