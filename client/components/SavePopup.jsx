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
      isSaved: this.props.isSaved,
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
      name: savedName,
    });
  }

  handleSubmit() {
    //  update isSaved - case_2: never saved yet, trying to create new save list
    //  update isSaved - case_3: already save in the list, when clicked, => 1 stay
    this.props.sendSaveName(this.props.roomId, this.props.saveId, this.state.name);
    this.setState({
      openSaveInnerModal: false,
      isSaved: true,
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
          <input type="text" value={this.state.name} onChange={this.saveNameHandler} placeholder="Name" className={styles.saveNameInput} />

          <input type="submit" value="Create" className={styles.createAListBtn} />
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
            {this.state.isSaved
            ?
              <div className={styles.modalSavedContentsArea}>
                <img className={styles.savedMainPhoto} src={this.props.data.imageList[0]}/>
                <div className={styles.savedInfoContainer}>
                  <span className={styles.anytime}>Any time</span><br />
                  <span className={styles.saveName}>Name: {this.props.data.savedName}</span>
                  <span className={styles.saveExtraInfo}>{this.state.isSaved ?'1 stay' : 'Nothing saved yet'}</span>
                </div>
              </div>
            : null}
          <hr />
          <button className={styles.createAListBtn} onClick={this.openInnerSaveModalHandler}>Create a list</button>
          {saveInnerModal}
        </div>
      </div>
    );
  }
}

export default SavePopup;
