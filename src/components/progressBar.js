import React from 'react'

class ProgressBar extends React.Component{
  render(){
      return(

        <span class="progress-bar">
          <span class="total-time"></span>
          <span class="time-elapsed"></span>
        </span>

      )
    }
  }

export default ProgressBar
