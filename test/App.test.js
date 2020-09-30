import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/components/App.jsx';
import Header from '../client/components/Header.jsx';
import PhotoGallery from '../client/components/PhotoGallery.jsx';
import axios from 'axios';

describe('Tests for App component', () => {
  it('should render without error', done => {
    expect(shallow(<App />).exists()).toBe(true);
    done();
  });

  // // CHECK AGAIN
  // it('should render <Header/> component', done => {
  //   const wrapper = mount(<App/>);
  //   expect(wrapper.find(Header).exists()).toEqual(true);
  //   done();
  // });

  // it('should render <PhotoGallery/> component', done => {
  //   const wrapper = mount(<App/>);
  //   expect(wrapper.find(PhotoGallery).exists()).toEqual(true);
  //   done();
  // });

});