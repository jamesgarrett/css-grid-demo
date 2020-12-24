import React from 'react';
import KeyArt from '../img/elements/x-files.jpeg';
import Details from './Details';

const Swimlane = () => (
  <>
    <section className="list swimlane-container p-y p-lg">
      <h3 className="label-primary-2 p-l p-md m-b m-sm">Continue watching</h3>
      <ul className="swimlane p-l p-md">
        <li className="card img-wide img-lg">
          <img src="https://dimages.amcnetworks.com/1280x720/filters:quality(60):format(jpg)/images.amcnetworks.com/amc.com/wp-content/uploads/2010/12/MM_1200x780.jpg" alt="show name" width="820" height="369" />
        </li>
        <li className="card img-wide img-lg">
          <img src="https://dimages.amcnetworks.com/1280x720/filters:quality(60):format(jpg)/images.amcnetworks.com/amc.com/wp-content/uploads/2019/11/10B_TWDWorldBeyond_OTTThumbnail_1280x720.jpg" alt="show name" width="820" height="369" />
        </li>
        <li className="card img-wide img-lg">
          <img src="https://dimages.amcnetworks.com/1280x720/filters:quality(60):format(jpg)/images.amcnetworks.com/amc.com/wp-content/uploads/2019/07/the-walking-dead-season-10b-daryl-reedus-1280x720_OTT_Thumbnail_FINALE.jpg" alt="show name" width="820" height="369" />
        </li>
        <li className="card img-wide img-lg">
          <img src="https://dimages.amcnetworks.com/1280x720/filters:quality(75):format(jpg)/images.amcnetworks.com/amc.com/wp-content/uploads/2020/06/MST3K-1280x720.jpg" alt="show name" width="820" height="369" />
        </li>
        <li className="card img-wide img-lg">
          <img src="https://dimages.amcnetworks.com/1280x720/filters:quality(60):format(jpg)/images.amcnetworks.com/amc.com/wp-content/uploads/2020/05/nos4a2-season-2-S2-key-art-1280x720_OTT_Thumbnail.jpg" alt="show name" width="820" height="369" />
        </li>
      </ul>
    </section>

    <section className="list swimlane-container p-y p-lg">
      <h3 className="label-primary-2 p-l p-md m-b m-sm">Featured Series</h3>
      <ul className="feature p-x p-md">
        <li className="card img-wide img-fluid img-shield">
          <img src={KeyArt} alt="X Files" />
          <span className="hero">
            <span className="flag label-primary-1">Fan Favorites</span>
            <span className="title">
              <h1 className="display-primary-7 m-y m-xs">The Post-Modern Prometheus</h1>
            </span>
            <span className="sidebar p-y p-xs">
              <span className="button-1 button-primary button-round button m-r m-xs">play</span>
              <span className="button-1 button-secondary button-round button">info</span>
            </span>
            <span className="details hidden-sm">
              <Details />
            </span>
          </span>
        </li>
      </ul>
    </section>

    <section className="list swimlane-container p-y p-lg">
      <h3 className="label-primary-2 p-l p-md m-b m-sm">Epic Worlds</h3>
      <ul className="swimlane p-l p-md">
        <li className="card text-poster display-primary-3 as-c ta-l img-sm img-shield">Escape to uncharted galaxies and secret hideaways.</li>
        <li className="card img-poster img-sm img-shield">
          <img src="https://dimages.amcnetworks.com/fit-in/400x600/filters:quality(75):format(jpg)/images.amcnetworks.com/amc.com/wp-content/uploads/2020/09/gangs-of-london-S1-key-art-400x600_ShowPoster_withLogo.jpg" alt="show name" />
        </li>
        <li className="card img-poster img-sm img-shield">
          <img src="https://dimages.amcnetworks.com/fit-in/400x600/filters:quality(75):format(jpg)/images.amcnetworks.com/amc.com/wp-content/uploads/2020/03/killing-eve-S3-season-3-key-art-400x600.jpg" alt="show name" />
        </li>
        <li className="card img-poster img-sm img-shield">
          <img src="https://dimages.amcnetworks.com/fit-in/400x600/filters:quality(75):format(jpg)/images.amcnetworks.com/amc.com/wp-content/uploads/2020/05/bottomless-brunch-at-colmans-400x600.jpg" alt="show name" />
        </li>
        <li className="card img-poster img-sm img-shield">
          <img src="https://dimages.amcnetworks.com/fit-in/400x600/filters:quality(75):format(jpg)/images.amcnetworks.com/amc.com/wp-content/uploads/2020/09/eli-roth-history-of-horror-s2-season-2-key-art-400x600-logo.jpg" alt="show name" />
        </li>
        <li className="card img-poster img-sm img-shield">
          <img src="https://dimages.amcnetworks.com/fit-in/400x600/filters:quality(75):format(jpg)/images.amcnetworks.com/amc.com/wp-content/uploads/2014/06/04_BCS-S5_400x600_ShowPoster_withLogo.jpg" alt="show name" />
        </li>
      </ul>
    </section>

    <section className="list swimlane-container p-y p-lg">
      <h3 className="label-primary-2 p-l p-md m-b m-sm">Movies for you</h3>
      <ul className="swimlane p-l p-md">
        <li className="card img-wide img-xl" />
        <li className="card img-wide img-xl" />
      </ul>
    </section>

    <section className="list swimlane-container p-y p-lg">
      <h3 className="label-primary-2 p-l p-md m-b m-sm">Collections for you</h3>
      <ul className="swimlane p-l p-md">
        <li className="card img-square img-md" />
        <li className="card img-square img-md" />
        <li className="card img-square img-md" />
        <li className="card img-square img-md" />
        <li className="card img-square img-md" />
        <li className="card img-square img-md" />
      </ul>
    </section>

    <section className="list swimlane-container p-y p-md">
      <h3 className="label-primary-2 p-l p-md m-b m-sm">Featured Genres</h3>
      <ul className="swimlane p-l p-md">
        <li className="card img-wide img-sm" />
        <li className="card img-wide img-sm" />
        <li className="card img-wide img-sm" />
        <li className="card img-wide img-sm" />
        <li className="card img-wide img-sm" />
        <li className="card img-wide img-sm" />
      </ul>
    </section>

    <section className="list swimlane-container p-y p-lg">
      <h3 className="label-primary-2 p-l p-md m-b m-sm">Explore by Channel</h3>
      <ul className="grid p-l p-md">
        <li className="card img-round img-xs" />
        <li className="card img-round img-xs" />
        <li className="card img-round img-xs" />
        <li className="card img-round img-xs" />
        <li className="card img-round img-xs" />
        <li className="card img-round img-xs" />
        <li className="card img-round img-xs" />
      </ul>
    </section>
  </>
);

export default Swimlane;
