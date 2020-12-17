import React from 'react'

class ProgressBar extends React.Component{
  render(){
      return(

        <span className="progress-bar">
          <span className="total-time"></span>
          <span className="time-elapsed"></span>
        </span>

      )
    }
  }

export default ProgressBar
