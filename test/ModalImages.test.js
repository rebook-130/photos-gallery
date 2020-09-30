import React from 'react';
import Enzyme from 'enzyme';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/components/App.jsx';
import ModalImages from '../client/components/ModalImages.jsx';
import styles from '../client/styles/ModalImages.css';



Enzyme.configure({ adapter: new Adapter()});

describe('Tests for ModalImages', () => {
  it('should render without an error', done => {
    expect(mount(<ModalImages />).exists()).toBe(true);
    done();
  });
})