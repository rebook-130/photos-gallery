import React from 'react';
import PhotoGallery from './PhotoGallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>This is Hearder part</h1>
        <h1> This is photo gallery section</h1>
        <PhotoGallery />
      </div>
    );
  }
}

export default App;
