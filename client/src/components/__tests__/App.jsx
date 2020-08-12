import React from 'react';
import App from '../App.jsx';
import axios from 'axios';
import { Grid, jssPreset } from '@material-ui/core';
import { createShallow, createMount, createRender } from '@material-ui/core/test-utils';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ExpansionPanelActions } from '@material-ui/core';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
jest.mock('axios');

configure({ adapter: new Adapter() });

const mockProducts = [
  {
    "id": 1,
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140"
  },
  {
    "id": 2,
    "name": "Bright Future Sunglasses",
    "slogan": "You've got to wear shades",
    "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    "category": "Accessories",
    "default_price": "69"
  },
  {
    "id": 3,
    "name": "Morning Joggers",
    "slogan": "Make yourself a morning person",
    "description": "Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.",
    "category": "Pants",
    "default_price": "40"
  }
];

const mockReviews = {
  "product_id": "1",
  "ratings": {
    2: 1,
    3: 1,
    4: 2,
  }
};

const mockStyles = {
  "product_id": "1",
  "results": [
    {
      "style_id": 1,
      "name": "Forest Green & Black",
      "original_price": "140",
      "sale_price": "0",
      "default?": 1,
      "photos": [
        {
          "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
          "url": "urlplaceholder/style_1_photo_number.jpg"
        },
        {
          "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
          "url": "urlplaceholder/style_1_photo_number.jpg"
        }
      ],
      "skus": {
        "XS": 8,
        "S": 16,
        "M": 17,
        "L": 10,
        "XL": 15
      }
    },
    {
      "style_id": 2,
      "name": "Desert Brown & Tan",
      "original_price": "140",
      "sale_price": "0",
      "default?": 0,
      "photos": [
        {
          "thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
          "url": "urlplaceholder/style_2_photo_number.jpg"
        }
      ],
      "skus": {
        "S": 16,
        "XS": 8,
        "M": 17,
        "L": 10,
        "XL": 15,
        "XXL": 6
      }
    }
  ]
};

jest.mock('axios', () => ({
  __esModule: true,
  get: jest.fn((url) => {
    if (url.url === 'http://52.26.193.201:3000/products/list') {
      return Promise.resolve({ data: mockProducts })
    }
    if (url.url === `http://52.26.193.201:3000/products/1/styles`) {
      return Promise.resolve({ data: mockStyles })
    }
    if (url.url === `http://52.26.193.201:3000/reviews/1/meta`) {
      return Promise.resolve({ data: mockReviews })
    }
  }),
  default: jest.fn((url) => {
    if (url.url === 'http://52.26.193.201:3000/products/list') {
      // console.log('GET PRODUCTS URL', url.url)
      return Promise.resolve({ data: mockProducts })
    }
    if (url.url === `http://52.26.193.201:3000/products/1/styles`) {
      // console.log('GET STYLES URL', url.url)
      return Promise.resolve({ data: mockProducts })
    }
    if (url.url === `http://52.26.193.201:3000/reviews/1/meta`) {
      // console.log('GET REVIEWS URL', url.url)
      return Promise.resolve({ data: mockProducts })
    }
  })
}));

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

  beforeEach(async () => {
    wrapper = await shallow(<App />);
  });

  test('Header loading properly', () => {
    expect(wrapper.find('#header')).toHaveLength(1);
  });

  test('Announcements loading properly', () => {
    expect(wrapper.find('#announcements')).toHaveLength(1);
  });

  test('Content loading properly', () => {
    expect(wrapper.find('#content')).toHaveLength(1);
  });

});

describe('Testing for API Calls', () => {
  let wrapper;
  let shallow;
  let render;
  let mount;

  beforeAll(() => {
    shallow = createShallow();
    render = createRender();
    mount = createMount();
  });

  test('It should receive the products list', async () => {
    let wrapper = await mount(<App />);
    expect(wrapper.state('products')).toEqual(mockProducts);
  })

});



