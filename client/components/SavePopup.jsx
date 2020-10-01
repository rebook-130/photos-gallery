/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import styles from '../styles/SavePopup.css';

class SavePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/prop-types
      openSaveInnerModal: false,
      name: '',
    };
    this.closeSaveModal = this.closeSaveModal.bind(this);
    this.openInnerSaveModalHandler = this.openInnerSaveModalHandler.bind(this);
    this.closeInnerSaveModal = this.closeInnerSaveModal.bind(this);
    this.saveNameHandler = this.saveNameHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeSaveModal() {
    this.props.closeSaveModal();
  }

  openInnerSaveModalHandler(e) {
    e.preventDefault();
    console.log('openInnerSaveModalHandler clicked');

    // this.props.closeSaveModal();
    this.setState({
      openSaveInnerModal: true,
    });

  }

  closeInnerSaveModal() {
    this.setState({
      openSaveInnerModal: false,
    });
  }

  saveNameHandler(e) {
    console.log('e.target.value', e.target.value);
    const savedName = e.target.value;
    this.setState({
      name: savedName
    });
  }

  handleSubmit() {
    this.props.sendSaveName(this.props.roomId, this.props.saveId, this.state.name);
    this.setState({
      openSaveInnerModal: false,
    });
    this.props.closeSaveModal();
  }

  render() {
    // saveModal (conditional rendering)
    if (!this.props.openSaveModal) {
      return null;
    }

    // saveInnerModal
    let saveInnerModal;

    if (this.state.openSaveInnerModal) {
      saveInnerModal = (
        <form onSubmit={this.handleSubmit} className={styles.innerModalMain}>
          <div className={styles.header}>
            <button onClick={this.closeInnerSaveModal} className={styles.closeBtn}>X</button>
            <div className={styles.modalTitle}>Name this list</div>
          </div>
          <input type="text" value={this.state.name} onChange={this.saveNameHandler} placeholder="Name" className={styles.saveNameInput}/>

          <input type="submit" value="Create" className={styles.createAListBtn}/>
        </form>
      );
    } else {
      saveInnerModal = null;
    }

    return (
      // saveModal
      <div className={styles.saveModalBackground}>
        <div className={styles.modalMain} onSubmit={this.handleSubmit}>
          {console.log('SavePopup render-this.props', this.props)}
          <div className={styles.header}>
            <button onClick={this.closeSaveModal} className={styles.closeBtn}>X</button>
            <div className={styles.modalTitle}> Save to a list </div>

          </div>
          <hr />
          <div className={styles.modalSavedArea} />
          <hr />
          <button className={styles.createAListBtn} onClick={this.openInnerSaveModalHandler}>Create a list</button>
          {saveInnerModal}
        </div>
      </div>
    );
  }
}

export default SavePopup;
