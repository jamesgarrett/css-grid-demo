import React from 'react'
import Home from '../img/icons/home.svg'
import Live from '../img/icons/live.svg'
import Search from '../img/icons/search.svg'
import MyList from '../img/icons/mylist.svg'

class Navigation extends React.Component{
  render(){
    	return(
        <ul className="nav hidden-sm">
          <li className="nav-item">
            <span className="icon">
              <img src={Home} alt='Home Icon' /><span className="nav-text-label button-1 m-x m-xs"> Home</span>
            </span>
          </li>
          <li className="nav-item">
            <span className="icon">
              <img src={Live} alt='Live Icon' /><span className="nav-text-label button-1 m-x m-xs"> Live</span>
            </span>
          </li>
          <li className="nav-item">
            <span className="icon">
              <img src={Search} alt='Search Icon' /><span className="nav-text-label button-1 m-x m-xs"> Search</span>
            </span>
          </li>
          <li className="nav-item">
            <span className="icon">
              <img src={MyList} alt='My List Icon' /><span className="nav-text-label button-1 m-x m-xs"> My List</span>
            </span>
          </li>
        </ul>
    	)
    }
  }

export default Navigation
