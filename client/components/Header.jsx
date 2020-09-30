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
      showPopup: false,
      isSaved: this.props.data.isSaved,

    };
    this.clickSaveHandler = this.clickSaveHandler.bind(this);
    this.isSuperhost = this.isSuperhost.bind(this);
  }

  clickSaveHandler() {
    {console.log('clickSave in Header')}
    {console.log('this.state.showPopup', this.state.showPopup)}

    this.setState({
      isSaved: !this.state.isSaved
    })
  }

  isSuperhost() {
    if (this.props.data.isSuperhost) {
      return (
        <div>
          <span> · <img className={ styles.superhostImg } src={ superHostSvg } /> </span>
          <span className={ styles.superhost }> Superhost · </span>
        </div>
      )
    }
    return (' . ')
  }

  render() {
    return (
      <div className={styles.headerContainer}>
         {console.log('props in Header', this.props)}

        <span className={styles.title}>{ this.props.data.title }</span><br />

        <div className={styles.headerRest}>
          <div className={styles.headerRestLeft}>
            <img className={ styles.starImg } src={ starImg } />
            <span className={ styles.spanRating }> { this.props.data.ratings }</span>
            <span className={ styles.spanReviewNumber }> ({ this.props.data.number_of_reviews }) </span>
            {this.isSuperhost()}
            <span className={ styles.address }> { this.props.data.address }</span>
          </div>

          {/* SAVE  */}
          <button className={ styles.saveHeartBtn} onClick={this.clickSaveHandler}>
          {this.state.isSaved ? <img className={styles.saveIcon} src={savedHeartSvg}/> :
          <img className={styles.saveIcon} src={saveHeartSvg} /> } {this.state.isSaved ? 'Saved' : 'Save'}
          </button>
        </div>
      </div>
    )
  }
}

export default Header;