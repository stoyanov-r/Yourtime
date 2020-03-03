import React from 'react';

const Anchor = ({anchor}) => {
  return (
    <div id={anchor} style= {{ position: 'absolute', top: '-80px'}}></div>
  );
};

export default Anchor;
