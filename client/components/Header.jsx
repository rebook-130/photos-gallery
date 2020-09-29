import React from 'react';
import styles from '../styles/Header.css';
import starImg from '../icons/star.png';
import superHostSVG from '../icons/superhost.svg';

function Header(props) {
  const isSuperhost = () => {
    if (props.data.isSuperhost) {
      return (
        <div>
          <span> · <img className={ styles.superhostImg } src={ superHostSVG } /> </span>
          <span className={ styles.superhost }> Superhost · </span>
        </div>
      )
    }
    return (' . ')
  }

  return (
    <div className={styles.headerContainer}>
      {/* {console.log('props in Header', props.data)} */}

      <span className={styles.title}>{ props.data.title }</span><br />
      <div className={styles.headerRest}>
        <img className={ styles.starImg } src={ starImg } />
        <span className={ styles.spanRating }> { props.data.ratings }</span>
        <span className={ styles.spanReviewNumber }> ({ props.data.number_of_reviews }) </span>
        {isSuperhost()}
        <span className={ styles.address }> { props.data.address }</span>
        {/* save function */}
        {/* <span className={styles.save}><img className={styles.saveIcon} src={} />Save</span> */}
      </div>
    </div>
  )
}

export default Header;