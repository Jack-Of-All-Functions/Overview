import React from 'react';
import App from '../client/src/components/App.jsx';
import ImageCard from './ImageGallery.jsx';

import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ExpansionPanelActions } from '@material-ui/core';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
configure({ adapter: new Adapter() });

describe('Testing for Prodcut Description Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ImageCard />);
  });

  test('Prodcut Card should have a slogan element', () => {
    expect(wrapper.find('#slogan').text()).toBe('Blend in to your crowd');
  });

  test('Product Card should have a description element', () => {
    expect(wrapper.find('#description').text()).toBe('The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.')
  });

})