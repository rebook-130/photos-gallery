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
GET: '/api/rooms/:roomId/photos'
Path parameters: roomId
Success Status Code: 200
Returns: JSON:
{
  "id": integer,
  "owner_id": integer,
  "title": string,
  "rating": decimal,
  "reviews_num": integer,
  “is_superhost”: boolean,
  "address": string,
  "is_saved": boolean,
  "list_name": string,
  "room_photos": [
      {
          "id": integer,
          "image_url": string,
          "description": string
      },...
}

2. Add photo
POST: '/api/rooms/:roomId/photo'
Path parameters: roomId
Request body:
{
  "user_id": integer,
  "imageUrl": string,
  "description": string
}
Success Status Code: 201

3. Delete photo
DELETE: '/api/rooms/:roomId/photo'
Path parameters: roomId
Request body: {
  "image_id": integer,
  "user_id": integer
}
Success Status Code: 204

4. Update room saved to list info
PATCH: '/api/rooms/:roomId/list'
Path parameters: roomId
Success Status Code: 204
Request Body: Expects JSON with the following keys (include only keys to be updated)
{
  is_saved: boolean,
  list_name: string
}



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

