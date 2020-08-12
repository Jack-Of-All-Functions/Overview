import React from 'react';
import ProductInfoCard from '../ProductInfo.jsx';
// import { averageRating } from '../ProductInfo.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { sizing } from '@material-ui/system';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { createShallow, createMount, createRender } from '@material-ui/core/test-utils';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ExpansionPanelActions } from '@material-ui/core';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

configure({ adapter: new Adapter() });

it('Renders the appropriate category, name, and price', () => {
  let wrapper;
  let shallow = createShallow();
  let render = createRender();
  let mount = createMount();

  let props = {
    // isLoading: false,
    productRatings: { 2: 2, 3: 1, 4: 2 },
    currentProduct: {
      category: 'Pants',
      name: 'Test Pants',
      default_price: 100,
    },

  };

  const firstTest = mount(
    <ProductInfoCard state={props} />
  );

  expect(firstTest.find('#productCategory').text()).toBe('Pants');
  expect(firstTest.find('#productName').text()).toBe('Test Pants');
  expect(firstTest.find('#productPrice').text()).toBe('$100');

})

it('Calculates average rating correctly', () => {
  let wrapper;
  let shallow = createShallow();
  let render = createRender();
  let mount = createMount();

  let props = {
    productRatings: { 2: 2, 3: 1, 4: 2 },
    currentProduct: {
      category: 'Pants',
      name: 'Test Pants',
      default_price: 100,
    },
    isLoading: false,
  };

  const firstTest = mount(
    <ProductInfoCard state={props} />
  );

  expect(firstTest.find('#rating').getElements()[0].props.value).toBe(3);

})