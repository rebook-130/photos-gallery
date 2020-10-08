/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import styles from '../styles/SaveModal.css';

class SaveModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/prop-types
      isSaved: this.props.isSaved,
      openSaveInnerModal: false,
    };

    this.openInnerSaveModalHandler = this.openInnerSaveModalHandler.bind(this);
    this.closeXSaveModal = this.closeXSaveModal.bind(this);
    this.closeXinnerSaveModal = this.closeXinnerSaveModal.bind(this);
    this.saveNameHandler = this.saveNameHandler.bind(this);
    this.saveHandleSubmit = this.saveHandleSubmit.bind(this);
    this.cancelSaveHandler = this.cancelSaveHandler.bind(this);
  }

  openInnerSaveModalHandler() {
    this.setState({
      openSaveInnerModal: true,
    });
  }

  closeXSaveModal() {
    this.props.closeSaveModal();
  }

  closeXinnerSaveModal() {
    this.setState({
      openSaveInnerModal: false,
    });
    this.props.openSaveModalHandler()
  }

  saveNameHandler(e) {
    console.log('e.target.value', e.target.value);
    const savedName = e.target.value;
    this.setState({
      name: savedName,
    });
  }

  saveHandleSubmit() {
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
    // saveOuterModal (conditional rendering)
    if (!this.props.openSaveOuterModal) {
      return null;
    }

    // saveInnerModal
    let saveInnerModal;

    if (this.state.openSaveInnerModal) {
      saveInnerModal = (
        <div className={styles.saveInnerModalBackground}>
          <form onSubmit={this.saveHandleSubmit} className={styles.innerModalMain}>
            <div className={styles.header}>
              <button onClick={this.closeXinnerSaveModal} className={styles.closeBtn}>X</button>
              <div className={styles.modalTitle}>Name this list</div>
            </div>
            <input
              type="text"
              value={this.state.name}
              onChange={this.saveNameHandler}
              placeholder="Name"
              className={styles.saveNameInput}
            />
            <div className={styles.letterLimit}>50 characters maximum</div>

            <input type="submit" value="Create" className={styles.innerModalCreateBtn} />
          </form>
        </div>
      );
    } else {
      saveInnerModal = null;
    }

    return (
      // saveOuterModal
      <div>
        <div className={styles.saveModalBackground}>
          <div className={styles.modalMain} onSubmit={this.handleSubmit}>
            <div className={styles.header}>
              <button onClick={this.closeXSaveModal} className={styles.closeBtn}>X</button>
              <div className={styles.modalTitle}> Save to a list </div>

            </div>
            <hr className={styles.horizontalLine} />
            {this.state.isSaved
              ? (
                <div className={styles.modalSavedContentsArea}>
                  <img className={styles.savedMainPhoto} src={this.props.data.imageList[0]} />
                  <div className={styles.savedInfoContainer}>
                    <span className={styles.anytime}>Any time</span>
                    <br />
                    <span className={styles.saveName}>{this.props.data.savedName}</span>
                  </div>
                </div>
              )
              : null}
            <hr className={styles.horizontalLine} />
            <button
              className={styles.createSaveBtn}
              onClick={this.openInnerSaveModalHandler}
            >
              Create/Change a list
            </button>

            {this.state.isSaved
              ? (
                <button
                  className={styles.unsaveBtn}
                  onClick={this.cancelSaveHandler}
                >
                  Unsave
                </button>
              )
              : null}
          </div>
        </div>
        {saveInnerModal}
      </div>
    );
  }
}

export default SaveModal;
