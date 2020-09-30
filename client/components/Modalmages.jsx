import React from 'react';
import styles from '../styles/ModalImages.css';
import prevSvg from '../icons/prevBtn.svg';
import nextSvg from '../icons/nextBtn.svg';
import saveHeartSvg from '../icons/saveHeart.svg';
import savedHeartSvg from '../icons/savedHeart.svg';

class ModalImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhotoIdx: this.props.clickedPhotoIndex,
      isSaved: this.props.data.isSaved,
    };
    this.closeModal = this.closeModal.bind(this);
    this.nextBtnHandler = this.nextBtnHandler.bind(this);
    this.prevBtnHandler = this.prevBtnHandler.bind(this);
    this.clickSaveHandler = this.clickSaveHandler.bind(this);
  }

  closeModal() {
    this.props.closeModalHandler(true);
  }

  prevBtnHandler() {
    this.setState({
      currentPhotoIdx: this.state.currentPhotoIdx - 1
    });
  }

  nextBtnHandler() {
    console.log('next button clicked');
    this.setState({
      currentPhotoIdx: this.state.currentPhotoIdx + 1
    });
  }

  clickSaveHandler() {
    this.setState({
      isSaved: !this.state.isSaved
    })
  }

  render() {
    // conditional rendering
    let prevBtn;
    const currentPhotoIdx = this.state.currentPhotoIdx;
    if (currentPhotoIdx > 0) {
    prevBtn = <button className={styles.prevBtn} onClick={this.prevBtnHandler}> <img className={styles.prevNextIcon} src={prevSvg}/> </button>
    } else {
      prevBtn = null;
    }

    let nextBtn;
    if (currentPhotoIdx < this.props.data.imageList.length - 1) {
      nextBtn = <button className={styles.nextBtn} onClick={this.nextBtnHandler}> <img className={styles.prevNextIcon} src={nextSvg}/> </button>
    } else {
      nextBtn = null;
    }

    return (
      <div>
        {console.log('props in ModalImages', this.props)}
        <div className={ styles.headerModal }>
          <button className={styles.closeBtn} onClick={this.closeModal}>X Close</button>
          <div className={styles.photoNum}>{this.state.currentPhotoIdx + 1} / {this.props.data.imageList.length}</div>

        {/* SAVE  */}
          <button className={ styles.saveHeartBtn} onClick={this.clickSaveHandler}>
            {this.state.isSaved ? <img className={styles.saveIcon} src={savedHeartSvg}/> :
            <img className={styles.saveIcon} src={saveHeartSvg} /> }
            </button>
        </div>

        <div className={styles.bodyModal}>
          {prevBtn}
          <div className={styles.containerImgCaption}>
            <img className={styles.photoList} src={this.props.data.imageList[this.state.currentPhotoIdx]} />
            <span className={ styles.caption }> { this.props.data.imgDescriptionList[currentPhotoIdx] }</span>
          </div>
          {nextBtn}

        </div>
      </div>
    )
  }
}

export default ModalImages;