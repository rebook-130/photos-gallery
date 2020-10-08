import React from 'react';
import styles from '../styles/PhotoGallery.css';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.photo0Clicked = this.photo0Clicked.bind(this);
    this.photo1Clicked = this.photo1Clicked.bind(this);
    this.photo2Clicked = this.photo2Clicked.bind(this);
    this.photo3Clicked = this.photo3Clicked.bind(this);
    this.photo4Clicked = this.photo4Clicked.bind(this);
  }

  photo0Clicked() {
    this.props.openModalImages(0);
  }

  photo1Clicked() {
    this.props.openModalImages(1);
  }

  photo2Clicked() {
    this.props.openModalImages(2);
  }

  photo3Clicked() {
    this.props.openModalImages(3);
  }

  photo4Clicked() {
    this.props.openModalImages(4);
  }

  render() {
    return (
      <div className={styles.Wrapper}>
        <div className={styles.Image1Container}>
          <div className={styles.imageContainer}>
            <img
              className={styles.Image0}
              src={this.props.data.imageList[0]}
              onClick={this.photo0Clicked}
            />
          </div>
        </div>
        <div className={styles.Image23Container}>
          <div className={styles.imageContainer}>
            <img
              className={styles.Image1}
              src={this.props.data.imageList[1]}
              onClick={this.photo1Clicked}
            />
          </div>
          <div className={styles.imageContainer}>
            <img
              className={styles.Image2}
              src={this.props.data.imageList[2]}
              onClick={this.photo2Clicked}
            />
          </div>
        </div>
        <div className={styles.Image45Container}>
          <div className={styles.imageContainer}>
            <img
              className={styles.Image3}
              src={this.props.data.imageList[3]}
              onClick={this.photo3Clicked}
            />
          </div>
          <div className={styles.imageContainer}>
            <img
              className={styles.Image4}
              src={this.props.data.imageList[4]}
              onClick={this.photo4Clicked}
            />
          </div>
          <button
            className={styles.morePicButton}
            onClick={this.photo0Clicked}
          >
            Show all photos
          </button>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;
