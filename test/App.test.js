import React from 'react';
import {shallow} from 'enzyme';
import App from '../client/components/App.jsx';
// import PhotoGallery from '../client/components/PhotoGallery.jsx';


describe('Tests for App component', () => {
  it('should render without error', done => {
    expect(shallow(<App />).exists()).toBe(true);
    done();
  });

});