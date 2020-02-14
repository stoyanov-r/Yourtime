import React from 'react';
import classes from './Photogallery.module.scss';



const Photogallery = () => {

  const urls = new Array(1).fill('')
    .map((_, i) => `/img/About__gallery-${i}.jpg`)

  return (
    <div className={classes.Photogallery}>
      {urls.map((url, i) => <img id={`About__gallery-${i}`} src={url} alt={'Фото коворкинга'} key={'img' + i}/>)}
      <ul>
        {urls.map((_, i) => <li ident={`About__gallery-${i}`} key={'buttons' + i}></li>)}
      </ul>
    </div>
  );
}

export default Photogallery;
