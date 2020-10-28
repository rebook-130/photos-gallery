/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import PhotoGallery from './PhotoGallery.jsx';
import ModalImages from './ModalImages.jsx';
import styles from '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoaded: false,
      clickedPhotoIndex: -1,
      showModalImages: false,
    };
    this.getPhotoGallery = this.getPhotoGallery.bind(this);
    this.renderView = this.renderView.bind(this);
    this.openModalImages = this.openModalImages.bind(this);
    this.closeModalHandler = this.closeModalHandler.bind(this);
    this.updateSaveName = this.updateSaveName.bind(this);
  }

  componentDidMount() {
    const roomId = window.location.pathname.split('/')[2];
    this.getPhotoGallery(roomId);
  }

  getPhotoGallery(roomId) {
    axios.get(`/api/rooms/${roomId}/photos`)
      .then(({ data }) => {
        const imgUrlList = [];
        const descriptionList = [];
        for (let i = 0; i < data.length; i += 1) {
          imgUrlList.push(data[i].image_url);
          descriptionList.push(data[i].description);
        }
        const oneListing = {
          room_id: roomId,
          title: data[0].title,
          ratings: data[0].rating,
          number_of_reviews: data[0].reviews_num,
          isSuperhost: data[0].is_superhost,
          address: data[0].address,
          isSaved: data[0].is_saved,
          savedName: data[0].list_name,
          imageList: imgUrlList,
          imgDescriptionList: descriptionList,
        };

        this.setState({
          isLoaded: true,
          data: oneListing,
        });
      })
      .catch((err) => {
        console.log('err on axios get:', err);
      });
  }

  openModalImages(idx) {
    this.setState({
      clickedPhotoIndex: idx,
      showModalImages: true,
    });
  }

  updateSaveName(room_id, name, boolean) {
    axios.patch(`/api/photogallery/${room_id}`, {
      name,
      isSaved: boolean,
    })
      .then(() => {
        const roomId = window.location.pathname.split('/')[2];
        this.getPhotoGallery(roomId);
      })
      .catch((err) => {
        console.log('err on axios update:', err);
      });
  }

  closeModalHandler() {
    this.setState({
      showModalImages: false,
    });
  }

  renderView() {
    const { isLoaded } = this.state;
    const { clickedPhotoIndex } = this.state;
    const { showModalImages } = this.state;
    const { imageList, imgDescriptionListimgDescriptionList, isSaved } = this.state.data;

    if (!isLoaded) {
      return (
        <div className={styles.spinner}>
          <div className={styles.bounce1} />
          <div className={styles.bounce2} />
          <div className={styles.bounce3} />
        </div>
      );
    }

    if (showModalImages) {
      return (
        <ModalImages
          data={this.state.data}
          clickedPhotoIndex={this.state.clickedPhotoIndex}
          closeModalHandler={this.closeModalHandler}
          updateSaveName={this.updateSaveName}
        />
      );
    }

    if (imageList.length >= 5) {
      return (
        <div className={styles.bodyContainer}>
          <Header
            data={this.state.data}
            createNewSaveName={this.updateSaveName}
            updateSaveName={this.updateSaveName}
          />
          <PhotoGallery
            data={this.state.data}
            openModalImages={this.openModalImages}
          />
        </div>
      );
    }
  }

  render() {
    return this.renderView();
  }
}

export default App;
