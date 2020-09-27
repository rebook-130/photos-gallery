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
      console.log('Axios get photogallery response: ', data[0].room_photos);
      console.log('Axios get photogallery response:data[0] ', data[0]);
      this.setState({
        photoGallery: data[0].room_photos,
        headerItem: data[0]
      })
    })
    .catch((error) => {
      // handle error
      console.log(error);
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
