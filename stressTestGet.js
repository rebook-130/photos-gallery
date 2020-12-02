/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable func-names */
import http from 'k6/http';

import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 1000 },
    // { duration: '10s', target: 100 },
    // { duration: '30s', target: 500 },
    // { duration: '30s', target: 1000 },
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
  const roomId = Math.floor(Math.random() * (10000001 - 9000000) + 9000000);
  let response;
  response = http.get(`http://54.67.21.33/api/rooms/${roomId}/photos`);
  // Automatically added sleep
  sleep(0.25);
}
console.log(new Date().getTime() - start);