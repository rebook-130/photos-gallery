import React from 'react';
import PhotoGallery from './PhotoGallery.jsx';
import Header from './Header.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerItem: {},
      photoGallery: [],
    };
    this.getPhotoGallery = this.getPhotoGallery.bind(this);
  }

  componentDidMount() {
    this.getPhotoGallery();
  }

  getPhotoGallery() {
    axios.get('/api/photogallery/1')
    .then(({ data }) => {
      // handle success
      this.setState({
        photoGallery: data[0].room_photos,
        headerItem: data[0]
      })
    })
    .catch((err) => {
      // handle error
      console.log('err on axios get:', err);
    })
  }

  render() {
    return (
      <div>
        <Header headerItem={this.state.headerItem}/>
        <PhotoGallery items={this.state.photoGallery}/>
      </div>
    );
  }
}

export default App;
