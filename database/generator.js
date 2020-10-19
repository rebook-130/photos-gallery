/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable quotes */
const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv;

const lines = argv.lines || 10000000;
const filenameUsers = argv.output || './CSV/users.csv';
const streamUsers = fs.createWriteStream(filenameUsers, { autoClose: true });
// const filenameRooms = argv.output || './CSV/rooms4.csv';
// const streamRooms = fs.createWriteStream(filenameRooms, { autoClose: true });
// const filenamePhotos = argv.output || './CSV/photos5.csv';
// const streamPhotos = fs.createWriteStream(filenamePhotos);

// ==========================DATA GENERATION ========================
const template = {
  adjective: ['Secluded', 'Civic Center', 'Art Deco', 'New England style', 'Victorian', 'Affordable', 'Beautiful', 'Bright', 'Charming', 'Chic', 'Contemporary', 'Cozy', 'Cute', 'Downtown', 'Exotic', 'Extravagant', 'Furnished', 'Historical', 'Intimate', 'Lakefront', 'Lovely', 'Luxurious', 'Magnificent', 'Majestic', 'Modern', 'Nostalgic', 'One-of-a-kind', 'Panoramic', 'Peaceful', 'Picturesque', 'Prestigious', 'Prime', 'Private', 'Quiet', 'Rare', 'Remarkable', 'Rustic', 'Spacious', 'Sun-filled', 'Unique'],
  noun: ['apartment', 'property', 'bungalow', 'complex', 'condo', 'cottage', 'duplex', 'estate', 'family home', 'house boat', 'location', 'oasis', 'palace', 'paradise', 'property', 'ranch', 'residence', 'home', 'space', 'townhouse', 'warehouse', 'villa'],
  attribute1: ['library', 'garden', 'pool', 'hot tub', 'backyard', 'fireplace', 'fantastic views', 'guest bedroom', 'terrace', 'roof', 'porch', 'patio'],
  attribute2: ['in the woods', 'in the city', 'in vibrant neighborhood'],
};
const random = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

const createUsers = (start, end) => {
  const records = [];
  for (let u = start; u < end; u += 1) {
    const userName = `${faker.name.firstName()} ${faker.name.lastName()}`;
    records.push(`${u + 1},${userName}`);
  }
  return records.join("\n");
};

const createRooms = (id) => {
  const owner_id = random(10000001, 1);
  const title = `${template.adjective[random(template.adjective.length)]} ${template.noun[random(template.noun.length)]} with ${template.attribute1[random(template.attribute1.length)]} ${template.attribute2[random(template.attribute2.length)]}`;
  const rating = faker.finance.amount(3.5, 5, 1);
  const reviews_num = random(2501);
  const is_superhost = random(2) !== 0;
  const address = `"${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}"`;
  const is_saved = random(2) !== 0;
  const list_name = is_saved ? template.adjective[random(template.adjective.length)] : '';

  return `${id},${owner_id},${title},${rating},${reviews_num},${is_superhost},${address},${is_saved},${list_name}\n`;
};

const createPhotos = (room) => {
  const photos = [];
  const photosCount = random(11, 5);
  for (let i = 0; i <= photosCount; i += 1) {
    const room_id = room;
    const image_url = `https://house-photos-sdc.s3-us-west-1.amazonaws.com/${random(994, 1)}.jpg`;
    const description = faker.lorem.sentence(2, false);
    photos.push(`${room}0${i + 1},${room_id},${image_url},${description}`);
  }
  return `${photos.join("\n")}\n`;
};

// ========================= STREAM WRITING =========================
// ******************** USERS ************************
const startWritingUsers = (writeStream, encoding) => {
  const users = createUsers(0, 10000000);
  writeStream.write(users, encoding);
  console.log('done with users');
};

// write out header line before invoking the loop
streamUsers.write(`id,name\n`, 'utf-8');
startWritingUsers(streamUsers, 'utf-8');

// ******************** ROOMS ************************
// const startWritingRooms = (writeStream, encoding) => {
//   const rooms = createRooms(5000000, 7500000);
//   writeStream.write(rooms, encoding);
// };

// streamRooms.write(`owner_id,title,rating,reviews_num,is_superhost,address,is_saved,list_name\n`, 'utf-8');
// startWritingRooms(streamRooms, 'utf-8');

const startWritingRooms = (writeStream, encoding, done) => {
  let i = 7500000;
  const writing = () => {
    const canWrite = true;

    do {
      i += 1;
      if (i === 8000000 || i === 9000000) {
        console.log(`created ${i}-rooms`);
      }
      const room = createRooms(i);
      // check if i === lines so we would write and call done
      if (i === lines) {
        // we are done so fire callback
        console.log('..done!');
        writeStream.write(room, encoding, done);
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

// // write out header line before invoking the loop
// streamRooms.write(`id,owner_id,title,rating,reviews_num,is_superhost,address,is_saved,list_name\n`, 'utf-8');
// // invoke startWritingUsers and pass callback
// startWritingRooms(streamRooms, 'utf-8', () => {
//   streamRooms.end();
// });

// ******************** PHOTOS ************************
const startWritingPhotos = (writeStream, encoding, done) => {
  let i = 8000000;
  const writing = () => {
    const canWrite = true;

    do {
      i += 1;
      console.time(`${i}-rooms`);
      if (i === 8500000 || i === 9000000 || i === 9500000) {
        console.log(`created photos for ${i} rooms`);
      }
      const photo = createPhotos(i);
      // check if i === lines so we would write and call done
      if (i === lines) {
        // we are done so fire callback
        writeStream.write(photo, encoding, done);
        console.timeEnd(`${i}-rooms`);
      } else {
        // not done, keep writing
        writeStream.write(photo, encoding);
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

// // write out header line before invoking the loop
// streamPhotos.write(`room_id,image_url,description\n`, 'utf-8');
// // invoke startWritingUsers and pass callback
// startWritingPhotos(streamPhotos, 'utf-8', () => {
//   streamPhotos.end();
// });
