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
GET: ‘/api/photogallery/:roomId’
Path parameters: roomId
Success Status Code: 200
Returns: JSON:
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
    "listName": “”,
    "room_photos": [
        {
            "_id": "5f6e2d5342753d11d03945e8",
            "imageUrl": "https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_031.jpg",
            "description": "voluptate"
        },...
}

2. Add photo
POST: ‘/api/photogallery/:roomId’
Request body:
{
  "imageUrl": "https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_039.jpg",
  "description": "living room"
}
Success Status Code: 201

3. Update room info
PATCH: ‘/api/photogallery/:roomId’
Path parameters: roomId
Success Status Code: 204
Request Body: Expects JSON with the following keys (include only keys to be updated)
{
  isSaved: true,
  listName: ‘Bali’
}

4. Delete photo
DELETE: ‘/api/photogallery/:roomId’
Path parameters: roomId
Request body: {"_id": "5f6e2d535775hs6945e8"}
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

