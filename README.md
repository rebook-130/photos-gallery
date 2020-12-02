# Project Description

Vacation Home Rental Web Application.

The goal of this project was to build a scalable RESTful API service for a vacation home rental service and optimize to handle web-scale traffic with more than 80M records in a Postgres database. The service was incrementally optimized through database indexing, connection pooling, improving database memory parameters and horizontal scaling to handle a throughput of 2900/sec with an average response time of 204ms. The service was horizontaly scaled to 6 AWS EC2 microservice instances, one NGINX load balancer and a Postgres database instance.

## Table of Contents

1. [API-routes](#API-routes)
2. [Requirements](#requirements)
3. [Development](#development)

## API-routes

API Endpoints

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

POST: '/api/rooms/photo/:photoId'

Path parameters: photoId

Success Status Code: 201

Request body:
{
  "imageUrl": string,
  "description": string
}

3. Delete photo

DELETE: '/api/rooms/:roomId/photo'

Path parameters: roomId

Success Status Code: 204

Request body: {
  "image_id": integer
}


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

- Node 12.18.4

## Development

From within the root directory:

To run webpack
```sh
npm run build:prod
```

To run server
```sh
npm start
```

To render the page

Open `http://localhost:3001/rooms/:roomId`

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

