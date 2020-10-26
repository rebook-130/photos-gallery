/* eslint-disable import/no-unresolved */
/* eslint-disable no-var */
/* eslint-disable func-names */
import http from 'k6/http';

import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 20 },
    { duration: '3m', target: 20 },
    { duration: '1m', target: 0 },
  ],
  ext: {
    loadimpact: {
      distribution: {
        'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 },
      },
    },
  },
};

export default function () {
  const roomId = Math.floor(Math.random() * (10000001 - 1) + 1);
  var url = `http://localhost:3001/api/rooms/${roomId}/photo`;
  var data = JSON.stringify({
    image_url: `https://house-photos-sdc.s3-us-west-1.amazonaws.com/${Math.floor(Math.random() * (994 - 1) + 1)}.jpg`,
    description: 'Hi from k6',
  });
  var params = {
    headers: {
      'Content-Type': 'application/json',
      timeout: 180000,
    },
  };
  check(http.post(url, data, params), {
    'status is 201': (r) => r.status === 201,
  });
  sleep(1);
}
