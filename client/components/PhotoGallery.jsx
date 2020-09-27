import React from 'react';
import PhotoGalleryItem from './PhotoGalleryItem.jsx';
import styles from '../styles/PhotoGallery.css';

function PhotoGallery(props) {
  return (
    <div className={styles.gridContainer}>
      {/* {console.log('props in photogallery', props.items)} */}
      {props.items.map(item => <PhotoGalleryItem item={item}/>)}
      {/* <div>{props.items[0].room_photos}</div> */}
      {/* <div>{props.items[0].room_photos[0]}</div>
      <div>{props.items[0].room_photos[1]}</div>
      <div>{props.items[0].room_photos[2]}</div>
      <div>{props.items[0].room_photos[3]}</div> */}
    </div>
  )
}

export default PhotoGallery;
