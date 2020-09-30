import React from 'react';
import styles from '../styles/SavePopup.css';

class SavePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    // conditional rendering
    if (!this.props.show) {
      return null;
    }

    return (
      <div className={styles.backdrop}>
        <form className={styles.modalMain} onSubmit={this.handleSubmit}>
        {/* {console.log('SavePopup render-this.props', this.props)} */}
          <div> Save to a list </div>
          <hr />
          <input type="text" placeholder="name" />
          <hr />
          <input type="submit" value="Create a list" />
        </form>
      </div>
    );
  }
}

export default SavePopup;
