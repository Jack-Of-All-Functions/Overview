import React from 'react';
import App from '../client/src/components/App.jsx';

import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ExpansionPanelActions } from '@material-ui/core';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
configure({ adapter: new Adapter() });


describe('Testing for database communication', () => {
  let wrapper;

  beforeEach(() => {
    wrapper.shallow(<App />);
  });

  test('Pulling product list from database', () => {

  })

})

