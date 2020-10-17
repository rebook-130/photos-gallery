/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable quotes */
const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv;

const lines = argv.lines || 1000000;
const filenameUsers = argv.output || 'users.csv';
const filenameRooms = argv.output || 'rooms.csv';
const streamUsers = fs.createWriteStream(filenameUsers);

// ==========================DATA GENERATION ========================
const createUsers = () => {
  const userName = `${faker.name.firstName()} ${faker.name.lastName()}`;
  return `${userName}\n`;
};

const createRooms = () => {

};

// ========================= STREAM WRITING =========================
const startWritingUsers = (writeStream, encoding, done) => {
  let i = 0;
  const writing = () => {
    const canWrite = true;

    do {
      i += 1;
      console.time(`${i}-entries`);
      if (i === 100000 || i === 500000 || i === 900000) {
        console.log(`created ${i}-entries`);
      }
      const user = createUsers();
      // check if i === lines so we would write and call done
      if (i === lines) {
        // we are done so fire callback
        writeStream.write(user, encoding, done);
        console.timeEnd(`${i}-entries`);
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
// streamUsers.write(`name\n`, 'utf-8');
// invoke startWritingUsers and pass callback
// startWritingUsers(streamUsers, 'utf-8', () => {
//   streamUsers.end();
// });
