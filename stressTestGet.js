/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable func-names */
import http from 'k6/http';

import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 50 },
    { duration: '1m', target: 100 },
    { duration: '30s', target: 150 },
    { duration: '90s', target: 200 },
    { duration: '30s', target: 0 },
  ],
  ext: {
    loadimpact: {
      distribution: {
        'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 },
      },
    },
  },
};
export default function main() {
  const roomId = Math.floor(Math.random() * (10000001 - 1) + 1);
  let response;
  response = http.get(`http://localhost:3001/api/rooms/${roomId}/photos`);
  // Automatically added sleep
  sleep(0.1);
}
