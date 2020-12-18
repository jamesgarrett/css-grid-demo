import React from 'react'

class Swimlane extends React.Component{
  render(){
      return(

        <>

        <section className="list swimlane-container p-y p-lg">
          <h3 className="label-primary-2 p-l p-md m-b m-sm">Continue watching</h3>
          <ul className="swimlane p-l p-md">
            <li className="card img-wide img-lg"></li>
            <li className="card img-wide img-lg"></li>
            <li className="card img-wide img-lg"></li>
            <li className="card img-wide img-lg"></li>
            <li className="card img-wide img-lg"></li>
            <li className="card img-wide img-lg"></li>
          </ul>
        </section>

        <section className="list swimlane-container p-y p-lg">
          <h3 className="label-primary-2 p-l p-md m-b m-sm">Featured Series</h3>
          <ul className="feature p-x p-md">
            <li className="card img-wide img-fluid"></li>
          </ul>
        </section>

        <section className="list swimlane-container p-y p-lg">
          <h3 className="label-primary-2 p-l p-md m-b m-sm">Epic Worlds</h3>
          <ul className="swimlane p-l p-md">
            <li className="text-poster display-primary-3 as-c ta-l img-sm img-shield">Escape to uncharted galaxies and secret hideaways.</li>
            <li className="card img-poster img-sm img-shield"></li>
            <li className="card img-poster img-sm img-shield"></li>
            <li className="card img-poster img-sm img-shield"></li>
            <li className="card img-poster img-sm img-shield"></li>
            <li className="card img-poster img-sm img-shield"></li>
          </ul>
        </section>

        <section className="list swimlane-container p-y p-lg">
          <h3 className="label-primary-2 p-l p-md m-b m-sm">Movies for you</h3>
          <ul className="swimlane p-l p-md">
            <li className="card img-wide img-xl"></li>
            <li className="card img-wide img-xl"></li>
          </ul>
        </section>

        <section className="list swimlane-container p-y p-lg">
          <h3 className="label-primary-2 p-l p-md m-b m-sm">Collections for you</h3>
          <ul className="swimlane p-l p-md">
            <li className="card img-square img-md"></li>
            <li className="card img-square img-md"></li>
            <li className="card img-square img-md"></li>
            <li className="card img-square img-md"></li>
            <li className="card img-square img-md"></li>
            <li className="card img-square img-md"></li>
          </ul>
        </section>

        <section className="list swimlane-container p-y p-lg">
          <h3 className="label-primary-2 p-l p-md m-b m-sm">Featured Genres</h3>
          <ul className="swimlane p-l p-md">
            <li className="card img-wide img-sm"></li>
            <li className="card img-wide img-sm"></li>
            <li className="card img-wide img-sm"></li>
            <li className="card img-wide img-sm"></li>
            <li className="card img-wide img-sm"></li>
            <li className="card img-wide img-sm"></li>
          </ul>
        </section>

        <section className="list swimlane-container p-y p-lg">
          <h3 className="label-primary-2 p-l p-md m-b m-sm">Explore by Channel</h3>
          <ul className="swimlane p-l p-md">
            <li className="card img-round img-xs"></li>
            <li className="card img-round img-xs"></li>
            <li className="card img-round img-xs"></li>
            <li className="card img-round img-xs"></li>
            <li className="card img-round img-xs"></li>
            <li className="card img-round img-xs"></li>
          </ul>
        </section>


        </>

      )
    }
  }

export default Swimlane
