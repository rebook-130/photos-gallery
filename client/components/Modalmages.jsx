import React from 'react';
import styles from '../styles/ModalImages.css';

class ModalImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showModal: false
    };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    console.log('close clicked')
    this.props.closeModalHandler(true)
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
          <img className={styles.photoList} src={this.props.data.imageList[this.props.clickedPhotoIndex]} />
          <button className={styles.nextBtn}> > </button>

        </div>
      </div>
    )
  }
}

export default ModalImages;