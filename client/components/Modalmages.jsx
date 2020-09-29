import React from 'react';
import styles from '../styles/ModalImages.css';

class ModalImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: this.props.clickedPhotoIndex
    };
    this.closeModal = this.closeModal.bind(this);
    this.nextBtnHandler = this.nextBtnHandler.bind(this);
  }

  closeModal() {
    this.props.closeModalHandler(true)
  }

  nextBtnHandler() {
    console.log('next button clicked')
    this.setState({
      currentPhoto: currentPhoto + 1
    })
  }

  render() {
    return (
      <div>
        {console.log('props in ModalImages', this.props)}
        <div className={ styles.headerModal }>
          <button className={styles.closeBtn} onClick={this.closeModal}>X Close</button>
          <div className={styles.image}>{this.props.clickedPhotoIndex} / {this.props.data.imageList.length}</div>
          <button className={styles.saveBtn}>save</button>
        </div>

        <div className={styles.bodyModal}>
          <button className={styles.prevBtn}> pre </button>
          <img className={styles.photoList} src={this.props.data.imageList[this.state.currentPhoto]} />
          <button className={styles.nextBtn} onClick={this.nextBtnHandler}> > </button>

        </div>
      </div>
    )
  }
}

export default ModalImages;