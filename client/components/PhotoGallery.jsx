import React from 'react';
import styles from '../styles/PhotoGallery.css';

function PhotoGallery({data}) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Image1Container}>
          <img className={styles.Image1} src={data.imageList[0]} />
      </div>
      <div className={styles.Image23Container}>
          <img className={styles.Image2} src={data.imageList[1]} />
          <img className={styles.Image3} src={data.imageList[2]} />
      </div>
      <div className={styles.Image45Container}>
          <img className={styles.Image4} src={data.imageList[3]} />
          <img className={styles.Image5} src={data.imageList[4]} />
      </div>
    </div>
  )
}

export default PhotoGallery;
