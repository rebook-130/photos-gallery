import React from 'react';
import styles from '../styles/ModalImages.css';

class ModalImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showModal: false
    };
  }

  render() {
    return (
      <div>
      {console.log('props in ModalImages', this.props)}
      <div className={ styles.headerModal }>
        <button className={styles.closeBtn}>X Close</button>
        <div>{this.props.clickedPhotoIndex} / {this.props.data.imageList.length}</div>
        <button className={styles.saveBtn}>save</button>
      </div>
       <img className={styles.photoList} src={this.props.data.imageList[this.props.clickedPhotoIndex]} />
      </div>
    )
  }
}

export default ModalImages;