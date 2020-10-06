# Project Name

> Project description

## Related Projects

  - https://github.com/Bookable-130/photo-gallery-service
  - https://github.com/Bookable-130/calendar-service
  - https://github.com/Bookable-130/review-service
  - https://github.com/Bookable-130/more-places-service

## Table of Contents

1. [Usage](#Usage)

API End point - GET: ‘/api/photogallery/:roomId’

Output (Data shape):

{
    "_id": "5f6e2d5342753d11d03945e6",
    "user_id": 1,
    "room_id": 1,
    "title": "Civic Center Studio With Parking",
    "ratings": 4.2,
    "number_of_reviews": 169,
    “isSuperhost”: true,
    "address": "San Francisco, California, United States",
    "isSaved": false,
    "savedName": “”,
    "room_photos": [
        {
            "_id": "5f6e2d5342753d11d03945e8",
            "imageUrl": "https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_031.jpg",
            "description": "voluptate"
        },...
}

2. [Requirements](#requirements)
3. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

From within the root directory:

To run webpack
```sh
npm run build:dev
```

To run server
```sh
npm start
npm run start:dev
```

To seed the database
```sh
npm run seed
```

To run tests
```sh
npm test
```

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

