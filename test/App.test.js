import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App.jsx';

describe('Tests for App component', () => {
  it('should render without error', done => {
    expect(shallow(<App />).exists()).toBe(true);
    done();
  });

});