import React from 'react'
import Dot from '../img/icons/dot.svg'
import TimerDot from '../img/icons/timer-dot.svg'
import LeftArrow from '../img/icons/arrow-left.svg'
import RightArrow from '../img/icons/arrow-right.svg'

class Controls extends React.Component{
  render(){
    	return(
        <>
        <span class="arrow-left"><img src={LeftArrow} alt='Previous Slide' /></span>
        <span class="dot"><img src={Dot} alt='Inactive Slide' /></span>
        <span class="dot active"><img src={TimerDot} alt='Active Slide' /></span>
        <span class="dot"><img src={Dot} alt='Inactive Slide' /></span>
        <span class="dot"><img src={Dot} alt='Inactive Slide' /></span>
        <span class="arrow-right"><img src={RightArrow} alt='Next Slide' /></span>
        </>
      )
    }
  }

export default Controls
