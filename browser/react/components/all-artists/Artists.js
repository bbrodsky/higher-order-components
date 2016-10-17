'use strict';

import React from 'react';
import { Link } from 'react-router';
import Filter from '../filter/Filter' // not working



export default function (props) {
  let artists = props.artists;
  const inputValue = props.inputValue;

  artists = artists.filter( (artist) => {
    console.log(artist)
    return artist.name.toLowerCase().match(inputValue);
  });

  return (
    <div>
      <h3>Artists</h3>
      <Filter />
      <div className="list-group">
        {
          artists.map(artist => (
            <div className="list-group-item" key={ artist.id }>
              <Link to={`/artists/${artist.id}`}>
                { artist.name }
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
