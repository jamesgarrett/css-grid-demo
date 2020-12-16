import React from 'react'

class Swimlane extends React.Component{
  render(){
      return(

        <section className="list swimlane-container p-y p-lg">
          <h3 className="label-primary-2 p-l p-md m-b m-sm">Continue watching</h3>
          <ul className="swimlane p-l p-md">
            <li className="card">card</li>
            <li className="card">card</li>
            <li className="card">card</li>
            <li className="card">card</li>
            <li className="card">card</li>
            <li className="card">card</li>
          </ul>
        </section>

      )
    }
  }

export default Swimlane
