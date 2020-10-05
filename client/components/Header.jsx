/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from '../styles/Header.css';
import starImg from '../icons/star.png';
import superHostSvg from '../icons/superhost.svg';
import saveHeartSvg from '../icons/saveHeart.svg';
import savedHeartSvg from '../icons/savedHeart.svg';
import SaveModal from './SaveModal.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSaveOuterModal: false,
      isSaved: this.props.data.isSaved,

    };
    this.openSaveModalHandler = this.openSaveModalHandler.bind(this);
    this.closeSaveModal = this.closeSaveModal.bind(this);
    // this.openSaveModalFn = this.openSaveModalFn.bind(this);
    this.isSuperhost = this.isSuperhost.bind(this);
  }

  openSaveModalHandler() {
    if (this.state.isSaved) {
      this.setState({
        isSaved: !this.state.isSaved,
      });
      this.props.updateSaveName(this.props.data.room_id, '', false);
    } else {
      this.setState({
        openSaveOuterModal: true,
      });
    }
  }

  closeSaveModal() {
    this.setState({
      openSaveOuterModal: false,
    });
  }

  // openSaveModalFn() {
  //   this.setState({
  //     openSaveOuterModal: true,
  //   });
  // }

  isSuperhost() {
    if (this.props.data.isSuperhost) {
      return (
        <div>
          <span>
            {' '}
            ·
            <img
              className={styles.superhostImg}
              src={superHostSvg}
            />
          </span>
          <span className={styles.superhost}> Superhost · </span>
        </div>
      );
    }
    return (' . ');
  }

  render() {
    return (
      <div className={styles.headerContainer}>
        {console.log('props in Header', this.props)}

        <span className={styles.title}>{ this.props.data.title }</span>
        <br />

        <div className={styles.headerRest}>
          <div className={styles.headerRestLeft}>
            <img className={styles.starImg} src={starImg} />
            <span className={styles.spanRating}>
              {' '}
              { this.props.data.ratings }
            </span>
            <span className={styles.spanReviewNumber}>
              {' '}
              (
              { this.props.data.number_of_reviews }
              )
              {' '}
            </span>
            {this.isSuperhost()}
            <span className={styles.address}>
              {' '}
              { this.props.data.address }
            </span>
          </div>

          {/* SAVE  */}
          <button
            className={styles.saveHeartBtn}
            onClick={() => {
              this.openSaveModalHandler();
            }}
          >
            {this.props.data.isSaved ? <img className={styles.saveIcon} src={savedHeartSvg} />
              : <img className={styles.saveIcon} src={saveHeartSvg} /> }
            {/* {' '} */}
            {this.props.data.isSaved ? 'Saved' : 'Save'}
          </button>
          <SaveModal
            openSaveModalHandler={this.state.openSaveModalHandler}
            closeSaveModal={this.closeSaveModal}
            openSaveOuterModal={this.state.openSaveOuterModal}
            roomId={this.props.data.room_id}
            isSaved={this.props.data.isSaved}
            updateSaveName={this.props.updateSaveName}
            data={this.props.data}
          />
        </div>
      </div>
    );
  }
}

export default Header;
