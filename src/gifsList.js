import React from 'react';
import GifItem from './GifItem';

//We use a stateless functional component whenever a component 
// does not need to actively track or modify the application's state

const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={image.id} gif={image} />
  });

  return (
    <div className="gif-list">{gifItems}</div>
  );
};

export default GifList;