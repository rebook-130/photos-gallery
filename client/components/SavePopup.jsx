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
    this.saveHandleSubmit = this.saveHandleSubmit.bind(this);
    this.cancelSaveHandler = this.cancelSaveHandler.bind(this);
  }

  closeSaveModal() {
    this.props.closeSaveModal();
  }

  openInnerSaveModalHandler(e) {
    e.preventDefault();
    console.log('openInnerSaveModalHandler clicked');

    this.setState({
      openSaveInnerModal: true,
    });
    // this.closeSaveModal();
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

  saveHandleSubmit() {
    //  update isSaved - case_2: never saved yet, trying to create or change save category name
    this.props.updateSaveName(this.props.roomId, this.state.name, true);

    this.setState({
      isSaved: true,
      openSaveInnerModal: false,
    });

    this.props.closeSaveModal();
  }

  cancelSaveHandler() {
    this.props.updateSaveName(this.props.roomId, '', false);

    this.setState({
      isSaved: false,
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
        <form onSubmit={this.saveHandleSubmit} className={styles.innerModalMain}>
          <div className={styles.header}>
            <button onClick={this.closeInnerSaveModal} className={styles.closeBtn}>X</button>
            <div className={styles.modalTitle}>Name this list</div>
          </div>
          <input type="text" value={this.state.name} onChange={this.saveNameHandler}
            placeholder="Name" className={styles.saveNameInput} />
          <div className={styles.letterLimit}>50 characters maximum</div>

          <input type="submit" value="Create" className={styles.innerModalCreateBtn} />
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
          <hr className={styles.horizontalLine}/>
            {this.state.isSaved
            ?
              <div className={styles.modalSavedContentsArea}>
                <img className={styles.savedMainPhoto} src={this.props.data.imageList[0]}/>
                <div className={styles.savedInfoContainer}>
                  <span className={styles.anytime}>Any time</span><br />
                  <span className={styles.saveName}>{this.props.data.savedName}</span>
                </div>
              </div>
            : null}
          <hr className={styles.horizontalLine}/>
          <button className={styles.createSaveBtn}
            onClick={this.openInnerSaveModalHandler}>Create/Change a category</button>

            {this.state.isSaved ?
          <button className={styles.unsaveBtn}
            onClick={this.cancelSaveHandler}>Unsave</button> :
            null}
          {saveInnerModal}
        </div>
      </div>
    );
  }
}

export default SavePopup;
