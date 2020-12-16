import React from 'react'
import Home from '../img/icons/home.svg'
import Live from '../img/icons/live.svg'
import Search from '../img/icons/search.svg'
import MyList from '../img/icons/mylist.svg'

class Navigation extends React.Component{
  render(){
    	return(
        <div className="nav">
          <span className="icon"><img src={Home} alt='Home Icon' /><span className="nav-text-label button-1 m-x m-xs"> Home</span></span>
          <span className="icon"><img src={Live} alt='Live Icon' /><span className="nav-text-label button-1 m-x m-xs"> Live</span></span>
          <span className="icon"><img src={Search} alt='Search Icon' /><span className="nav-text-label button-1 m-x m-xs"> Search</span></span>
          <span className="icon"><img src={MyList} alt='My List Icon' /><span className="nav-text-label button-1 m-x m-xs"> My List</span></span>
        </div>
    	)
    }
  }

export default Navigation
