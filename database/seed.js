const faker = require('faker');
const db = require('./index.js');
const Gallery = require('./Gallery.js');

const title = [
  'Secluded Getaway Staycation+SunsetPool@megananda',
  'Staying in Jeju Ocean, "TIME BUYER PLACE, 301"',
  'Civic Center Studio With Parking',
];
const getRandomTitle = () => {
  const max = title.length - 1;
  const min = 0;
  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  return title[randomIndex];
};

const address = [
  'Payangan, Bali, Indonesia',
  'Aewol-eup, Jeju-si, Jeju Province, South Korea',
  'San Francisco, California, United States',
];

const getRandomSuperhost = () => {
  const isSuperhost = faker.random.boolean;
  return isSuperhost;
};

const getRandomAddress = () => {
  const max = address.length - 1;
  const min = 0;
  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  return address[randomIndex];
};

const getNumberOfReviews = () => {
  const max = 2000;
  const min = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const photos = [

  ['https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_001.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_002.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_003.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_004.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_005.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_006.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_007.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_008.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_009.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_010.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_013.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_018.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_022.jpg'],

  ['https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_031.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_032.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_033.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_034.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_035.jpg'],

  ['https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_037_sf.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_038_sf.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_039_sf.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_040_sf.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_sf_041.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_sf_042.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_sf_043.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_sf_044.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_sf_045.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_sf_046.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_sf_047.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_sf_048.jpg',
    'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_sf_049.jpg',
  ]
];

// main three sets
const getMainImgUrlnDescriptionList = (i) => {
  const imageUrlList = [];
  const numberOfPhotos = photos[i].length;
  const numberOfWords = Math.floor(Math.random() * (6 - 0) + 0);

  for (let j = 0; j < numberOfPhotos; j += 1) {
    imageUrlList.push({ imageUrl: photos[i][j], description: faker.lorem.words(numberOfWords) });
  }
  return imageUrlList;
};

// random
const getImgUrlnDescriptionList = () => {
  const imageUrlList = [];
  const numberOfPhotos = Math.floor(Math.random() * (15 - 5) + 5);
  const numberOfWords = Math.floor(Math.random() * (6 - 0) + 0);

  for (let i = 0; i < numberOfPhotos; i += 1) {
    imageUrlList.push({ imageUrl: photos[0][i], description: faker.lorem.words(numberOfWords) });
  }
  return imageUrlList;
};

const getSavednName = () => {
  const randomBoolean = faker.random.boolean();
  const savedName = randomBoolean === true ? faker.address.city() : '';
  return { isSaved: randomBoolean, name: savedName };
};

const makePhotoGallerysData = (num) => {
  const numOfPhotoGallerys = num || 1;
  const photoGallerys = [];

  // main three sets
  for (let i = 0; i < 3; i += 1) {
    const photogallery = {
      user_id: i + 1,
      room_id: i + 1,
      title: title[i],
      ratings: (Math.random() * (5 - 4) + 4).toFixed(1),
      number_of_reviews: getNumberOfReviews(),
      isSuperhost: true,
      address: address[i],
      save_status: getSavednName(),
      room_photos: getMainImgUrlnDescriptionList(i),
    };
    photoGallerys.push(photogallery);
  }

  // random set
  for (let i = 3; i < numOfPhotoGallerys; i += 1) {
    const photogallery = {
      user_id: i + 1,
      room_id: i + 1,
      title: getRandomTitle(),
      ratings: (Math.random() * (5 - 1) + 1).toFixed(1),
      number_of_reviews: getNumberOfReviews(),
      isSuperhost: true,
      address: getRandomAddress(),
      save_status: getSavednName(),
      room_photos: getImgUrlnDescriptionList(),
    };
    photoGallerys.push(photogallery);
  }
  return photoGallerys;
};

// create 5 photogallerys
const photogallerys = makePhotoGallerysData(5);

console.log(photogallerys[0]);

const insertSamplePhotoGallerys = () => {
  Gallery.create(photogallerys)
    .then(() => console.log('insert gallery data into db'))
    .then(() => db.close())
    .catch((err) => console.log('Fail to insert gallery data into db', err));
};

insertSamplePhotoGallerys();
