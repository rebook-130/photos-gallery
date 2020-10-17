/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable quotes */
const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv;

const lines = argv.lines || 5000000;
const filenameUsers = argv.output || './CSV/users2.csv';
const filenameRooms = argv.output || './CSV/rooms2.csv';
// const filenamePhotos = argv.output || './CSV/photos.csv';
const streamUsers = fs.createWriteStream(filenameUsers);
const streamRooms = fs.createWriteStream(filenameRooms);
// const streamPhotos = fs.createWriteStream(filenamePhotos);

// ==========================DATA GENERATION ========================
const template = {
  adjective: ['Secluded', 'Civic Center', 'Art Deco', 'New England style', 'Victorian', 'Affordable', 'Beautiful', 'Bright', 'Charming', 'Chic', 'Contemporary', 'Cozy', 'Cute', 'Downtown', 'Exotic', 'Extravagant', 'Furnished', 'Historical', 'Intimate', 'Lakefront', 'Lovely', 'Luxurious', 'Magnificent', 'Majestic', 'Modern', 'Nostalgic', 'One-of-a-kind', 'Panoramic', 'Peaceful', 'Picturesque', 'Prestigious', 'Prime', 'Private', 'Quiet', 'Rare', 'Remarkable', 'Rustic', 'Spacious', 'Sun-filled', 'Unique'],
  noun: ['apartment', 'property', 'bungalow', 'complex', 'condo', 'cottage', 'duplex', 'estate', 'family home', 'house boat', 'location', 'oasis', 'palace', 'paradise', 'property', 'ranch', 'residence', 'home', 'space', 'townhouse', 'warehouse', 'villa'],
  attribute1: ['library', 'garden', 'pool', 'hot tub', 'backyard', 'fireplace', 'fantastic views', 'guest bedroom', 'terrace', 'roof', 'porch', 'patio'],
  attribute2: ['in the woods', 'in the city', 'in vibrant neighborhood'],
};
const random = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

const createUsers = () => {
  const userName = `${faker.name.firstName()} ${faker.name.lastName()}`;
  return `${userName}\n`;
};

const createRooms = () => {
  const owner_id = random(5000001, 2500000);
  const title = `${template.adjective[random(template.adjective.length)]} ${template.noun[random(template.noun.length)]} with ${template.attribute1[random(template.attribute1.length)]} ${template.attribute2[random(template.attribute2.length)]}`;
  const rating = faker.finance.amount(3.5, 5, 1);
  const reviews_num = random(2501);
  const is_superhost = random(2) !== 0;
  const address = `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}`;
  const is_saved = random(2) !== 0;
  const list_name = is_saved ? template.adjective[random(template.adjective.length)] : '';

  return `${owner_id},${title},${rating},${reviews_num},${is_superhost},${address},${is_saved},${list_name}\n`;
};

const createPhotos = (room) => {
  const photos = [];
  const photosCount = random(11, 5);
  for (let i = 0; i <= photosCount; i += 1) {
    const room_id = room;
    const image_url = `https://house-photos-sdc.s3-us-west-1.amazonaws.com/${random(994, 1)}.jpg`;
    const description = faker.lorem.sentence(5, false);
    photos.push(`${room_id},${image_url},${description}`);
  }
  return `${photos.join("\n")}\n`;
};

// ========================= STREAM WRITING =========================
// ******************** USERS ************************
const startWritingUsers = (writeStream, encoding, done) => {
  let i = 2500001;
  const writing = () => {
    const canWrite = true;

    do {
      i += 1;
      console.time(`${i}-users`);
      // if (i === 1000000 || i === 5000000 || i === 9000000) {
      //   console.log(`created ${i}-users`);
      // }
      const user = createUsers();
      // check if i === lines so we would write and call done
      if (i === lines) {
        // we are done so fire callback
        writeStream.write(user, encoding, done);
        console.timeEnd(`${i}-users`);
      } else {
        // not done, keep writing
        writeStream.write(user, encoding);
      }
      // else call write and continue looping
    } while (i < lines && canWrite);
    if (i < lines && !canWrite) {
      // our buffer for streamUsers filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  };
  writing();
};

// write out header line before invoking the loop
streamUsers.write(`name\n`, 'utf-8');
// invoke startWritingUsers and pass callback
startWritingUsers(streamUsers, 'utf-8', () => {
  streamUsers.end();
});

// ******************** ROOMS ************************
const startWritingRooms = (writeStream, encoding, done) => {
  let i = 2500001;
  const writing = () => {
    const canWrite = true;

    do {
      i += 1;
      console.time(`${i}-rooms`);
      // if (i === 1000000 || i === 5000000 || i === 9000000) {
      //   console.log(`created ${i}-rooms`);
      // }
      const room = createRooms();
      // check if i === lines so we would write and call done
      if (i === lines) {
        // we are done so fire callback
        writeStream.write(room, encoding, done);
        console.timeEnd(`${i}-rooms`);
      } else {
        // not done, keep writing
        writeStream.write(room, encoding);
      }
      // else call write and continue looping
    } while (i < lines && canWrite);
    if (i < lines && !canWrite) {
      // our buffer for streamUsers filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  };
  writing();
};

// write out header line before invoking the loop
streamRooms.write(`owner_id,title,rating,reviews_num,is_superhost,address,is_saved,list_name\n`, 'utf-8');
// invoke startWritingUsers and pass callback
startWritingRooms(streamRooms, 'utf-8', () => {
  streamRooms.end();
});

// ******************** PHOTOS ************************
// const startWritingPhotos = (writeStream, encoding, done) => {
//   let i = 0;
//   const writing = () => {
//     const canWrite = true;

//     do {
//       i += 1;
//       console.time(`${i}-photos`);
//       if (i === 1000000 || i === 5000000 || i === 9000000) {
//         console.log(`created ${i}-photos`);
//       }
//       const photo = createPhotos(i);
//       // check if i === lines so we would write and call done
//       if (i === lines) {
//         // we are done so fire callback
//         writeStream.write(photo, encoding, done);
//         console.timeEnd(`${i}-photos`);
//       } else {
//         // not done, keep writing
//         writeStream.write(photo, encoding);
//       }
//       // else call write and continue looping
//     } while (i < lines && canWrite);
//     if (i < lines && !canWrite) {
//       // our buffer for streamUsers filled and need to wait for drain
//       // Write some more once it drains.
//       writeStream.once('drain', writing);
//     }
//   };
//   writing();
// };

// // write out header line before invoking the loop
// streamPhotos.write(`room_id,image_url,description\n`, 'utf-8');
// // invoke startWritingUsers and pass callback
// startWritingPhotos(streamPhotos, 'utf-8', () => {
//   streamPhotos.end();
// });
