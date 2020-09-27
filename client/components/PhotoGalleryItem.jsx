import React from 'react';


function PhotoGalleryItem(props) {
  return (
    <div>
      {/* {console.log('props in photogalleryItem', props)} */}
      <img src={ props.item.imageUrl }></img>
    </div>
  )
}

export default PhotoGalleryItem;