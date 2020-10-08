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
    this.isSuperhost = this.isSuperhost.bind(this);
  }

  openSaveModalHandler() {
      this.setState({
        openSaveOuterModal: true,
      });
  }

  closeSaveModal() {
    this.setState({
      openSaveOuterModal: false,
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
            openSaveModalHandler={this.openSaveModalHandler}
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
