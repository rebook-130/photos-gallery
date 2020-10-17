/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable quotes */
const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv;

const lines = argv.lines || 1000000;
const filename = argv.output || 'users.csv';
const stream = fs.createWriteStream(filename);

const createUsers = () => {
  const userName = `${faker.name.firstName()} ${faker.name.lastName()}`;
  return `${userName}\n`;
};

const startWriting = (writeStream, encoding, done) => {
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
      if (i === lines) {
        writeStream.write(user, encoding, done);
        console.timeEnd(`${i}-entries`);
      } else {
        writeStream.write(user, encoding);
      }
    } while (i < lines && canWrite);
    if (i < lines && !canWrite) {
      writeStream.once('drain', writing);
    }
  };
  writing();
};

stream.write(`name\n`, 'utf-8');
startWriting(stream, 'utf-8', () => {
  stream.end();
});
