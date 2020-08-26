# Front End Capstone - Product Overview

This is the product overview section of the Front End Capstone project. It includes these sections:
- Product Info
- Style Selector
- Add to Cart
- Image Gallery
- Logo/Announcements

## Related Projects

  - https://github.com/AwesomeDreamTeam/related-items
  - https://github.com/AwesomeDreamTeam/reviews


## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
4. [API Routes](#Routes)

## Usage
In two separate terminals:

> Start Server:
```sh
npm run start-server
```
> Start React:
```sh
npm run react-dev
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

## Routes

### List Products

`Get /products/list`
Retrieve the list of products

| Parameter | Type    | Description                                       |
|-----------|---------|---------------------------------------------------|
| page      | integer | Defines number of pages to return. Defaults to 1  |
| count     | integer | Defines number of results per page. Defaults to 5 |

Response
`Status: 200 OK`

```json
[
  {
    "id": 1,
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "Wow! A floating head! Where did your torso go?",
    "category": "Jackets",
    "default_price": 140
  },
  //...
]
```

### Product Information

Returns all product information for a given id

`GET /products/:product_id`

Parameters

| Parameter  | Type    | Description                    |
|------------|---------|--------------------------------|
| product_id | integer | Defines the ID of the product. |

Response

`Status: 200 OK`

```json
{
  "id": 24,
  "name": "Air Minis",
  "slogan": "Full court support",
  "description": "These shoes are great",
  "category": "shoes",
  "default_price": 120,
  "features": [
    {
      "feature": "Sole",
      "value": "rubber"
    },
    //...
  ]
}
```

### Product Styles

Returns all styles available for a given id

`GET /products/:product_id/styles`

Parameters

| Parameter  | Type    | Description                  |
|------------|---------|------------------------------|
| product_id | integer | Defines the ID of a product. |

Response

`Status: 200 OK`

```json
{
  "product_id": 1,
  "results": [
    {
      "style_id": 1,
      "name": "Forest Green",
      "original_price": 140,
      "sale_price": 120,
      "default?": 1,
      "photos": [
        {
          "thumbnail_url": "https://image.url/thumbnail.jpeg",
          "url": "https://image.url/fullsize.jpeg",
        },
        //...
      ],
      "skus": {
        "XS": 1,
        "S": 2,
        //...
      }
    },
    //...
  ]
}
```

### Related Products

Returns product IDs for related products

`GET /products/:product_id/related`

Parameters

| Parameter  | Type    | Description                 |
|------------|---------|-----------------------------|
| product_id | integer | Defines the ID of a product |

Response

`Status: 200 OK`

```json
[
  2,
  3,
  6,
  7,
  12
]
```

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

