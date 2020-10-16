# Project Name

> Vacation Home Rental Web Application

## Related Projects

  - https://github.com/Bookable-130/calendar-service
  - https://github.com/Bookable-130/review-service
  - https://github.com/Bookable-130/more-places-service

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

>
To render the page: http://localhost:3001/rooms/:roomId
example: for roomId 1 => http://localhost:3001/rooms/1

API End points

1. Get room info
GET: '/api/photogallery/:roomId'
Path parameters: roomId
Success Status Code: 200
Returns: JSON:
{
  "id": 1,
  "user_id": "3",
  "title": "Civic Center Studio With Parking",
  "rating": 4.2,
  "reviews_num": 169,
  “is_superhost”: true,
  "address": "San Francisco, California, United States",
  "is_saved": false,
  "list_name": “”,
  "room_photos": [
      {
          "id": "5",
          "image_url": "https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_031.jpg",
          "description": "voluptate"
      },...
}

2. Add photo
POST: '/api/photogallery/:roomId'
Path parameters: roomId
Request body:
{
  "user_id": "3",
  "imageUrl": "https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_039.jpg",
  "description": "living room"
}
Success Status Code: 201

3. Update room info
PATCH: '/api/photogallery/:roomId'
Path parameters: roomId
Success Status Code: 204
Request Body: Expects JSON with the following keys (include only keys to be updated)
{
  is_saved: true,
  list_name: ‘Bali’
}

4. Delete photo
DELETE: '/api/photogallery/:roomId'
Path parameters: roomId
Request body: {
  "image_id": "8",
  "user_id": "3"
}
Success Status Code: 204



## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 12.18.4

## Development

From within the root directory:

To run webpack
```sh
npm run build:prod
```

To run server
```sh
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
npm install
```

