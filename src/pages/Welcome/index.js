import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import './styles.css'

class Welcome extends Component {
  render() {
    return (
      <div className="background-welcome">
        <div className="welcome">
          <button onClick={() => { }}>
            <Link to='/signin'>
              <button onClick={() => { }}>
                Sign In
            </button>
            </Link>
          </button>
          <button onClick={() => { }}>
            <Link to='/signup'>
              <button onClick={() => { }}>
                Sign Up
              </button>
            </Link>
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(Welcome)