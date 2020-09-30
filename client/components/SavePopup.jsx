import React from 'react';
import styles from '../styles/SavePopup.css';

class SavePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  // createSave() {
  //   //sendSaveName
  // }

  render() {
    // conditional rendering

    return (
      <div className={styles.savePopupModal}>
        {console.log('SavePopup render')}
        <form onSubmit={this.handleSubmit}>
        <label>
          Save to a list
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Create a list" />
      </form>
      </div>
    )
  }
}

export default SavePopup;