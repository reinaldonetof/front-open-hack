import React, { useState } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

import './styles.css'

const Welcome = () => {
  const[bSignIn, setBSignIn] = useState(false)
  const[bSignUp, setBSignUp] = useState(false)

  if(bSignIn) {
    return <Redirect to='signin' />
  }

  if(bSignUp) {
    return <Redirect to='signup' />
  }

  return (
    <div className="background-welcome">
      <div className="welcome">
        <button onClick={() => setBSignIn(true)}>
          Sign In
          </button>
        <button onClick={() => setBSignUp(true)}>
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default withRouter(Welcome)