import React from 'react';
import Header from '../Header.jsx';
import axios from 'axios';
import { Grid, jssPreset } from '@material-ui/core';
import { createShallow, createMount, createRender } from '@material-ui/core/test-utils';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ExpansionPanelActions } from '@material-ui/core';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import { TestScheduler } from 'jest';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';

configure({ adapter: new Adapter() });

describe('Testing for Component Rendering', () => {
  let wrapper;
  let shallow;
  let render;
  let mount;

  beforeAll(() => {
    shallow = createShallow();
    render = createRender();
    mount = createMount();
  });

    beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  test('Contains a logo', () => {
    expect(wrapper.find('#logo').text()).toBe('Logo');
  })

  test('Contains a Search bar', () => {
    expect(wrapper.contains(<SearchIcon />)).toBe(true);
  })

})