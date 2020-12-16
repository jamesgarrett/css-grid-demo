import React from 'react'
import BbcaLogo from '../img/logos/bbca.svg'

class Details extends React.Component{
  render(){
    	return(
        <>
          <span className="meta">
            <div className="logo"><img src={BbcaLogo} className='logo svg' alt='website logo' /></div>
            <div className="label-secondary-2">S1 E6</div>
            <div className="label-secondary-2">38 Minutes Left</div>
          </span>
          <span className="body-1">Intel from Berlin points to the existence of a mole, prompting Eve to undertake her first surveillance operation. Meanwhile, Villanelle is sent to England...
          </span>
        </>
      )
    }
  }

export default Details
