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
import SavePopup from './SavePopup.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSaveModal: false,
      isSaved: this.props.data.isSaved,

    };
    this.clickSaveHandler = this.clickSaveHandler.bind(this);
    this.closeSaveModal = this.closeSaveModal.bind(this);
    this.isSuperhost = this.isSuperhost.bind(this);
  }

  clickSaveHandler(room_id) {
    { console.log('clickSave in Header-room_id', room_id); }

    if (!this.state.isSaved) {
      this.setState({
        openSaveModal: true,
        // isSaved: !this.state.isSaved,
      });
    } else {
      this.setState({
        isSaved: !this.state.isSaved,
      });
      // update isSaved - case_1: already saved and cancel the save
    }
  }

  closeSaveModal() {
    this.setState({
      openSaveModal: false,
    });
  }

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
              this.clickSaveHandler(this.props.data.room_id);
            }}
          >
            {this.state.isSaved ? <img className={styles.saveIcon} src={savedHeartSvg} />
              : <img className={styles.saveIcon} src={saveHeartSvg} /> }
            {' '}
            {this.state.isSaved ? 'Saved' : 'Save'}
          </button>
          <SavePopup
            openSaveModal={this.state.openSaveModal}
            closeSaveModal={this.closeSaveModal}
            roomId={this.props.data.room_id}
            isSaved={this.props.data.isSaved}
            saveId={this.props.data.saveId}
            sendSaveName={this.props.sendSaveName}
            data={this.props.data}
            />
        </div>
      </div>
    );
  }
}

export default Header;
