const faker = require('faker');
const db = require('./index.js');
const Gallery = require('./Gallery.js');

const title = [
  'Secluded Getaway Staycation+SunsetPool@megananda',
  'Civic Center Studio With Parking',
  'Staying in Jeju Ocean, "TIME BUYER PLACE, 301"',
];
const getRandomTitle = () => {
  const max = title.length - 1;
  const min = 0;
  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  return title[randomIndex];
};

const address = [
  'Payangan, Bali, Indonesia',
  'San Francisco, California, United States',
  'Aewol-eup, Jeju-si, Jeju Province, South Korea'
];

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
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_000_Big.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_001.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_002.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_003.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_004.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_005.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_006.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_007.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_008.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_009.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_010.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_011.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_012.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_013.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_014.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_015.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_016.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_017.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_018.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_019.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_020.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_021.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_022.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_023.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_024.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_025.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_026.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_027.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_028.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_029.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_030.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_031.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_031_big.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_032.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_033.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_034.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_035.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_036_sf.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_037_sf.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_038_sf.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_039_sf.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_040_sf.jpg'

];

const getRandomImgUrlnDescription = () => {
  const max = photos.length - 1;
  const min = 0;
  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  const numberOfWords = Math.floor(Math.random() * (6 - 0) + 0);
  return { imageUrl: photos[randomIndex], description: faker.lorem.words(numberOfWords) };
};

const getRandomImgUrlnDescriptionList = () => {
  const imageUrlList = [];
  const max = 10;
  const min = 5;
  const numberOfPhotos = Math.floor(Math.random() * (max - min + 1) + min);

  for (let i = 0; i < numberOfPhotos; i++) {
    const randomImgUrlnDescription = getRandomImgUrlnDescription();
    imageUrlList.push(randomImgUrlnDescription);
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

  for (let i = 0; i < numOfPhotoGallerys; i++) {
    const photogallery = {
      user_id: i + 1,
      room_id: i + 1,
      title: getRandomTitle(),
      ratings: (Math.random() * (5 - 1) + 1).toFixed(1),
      number_of_reviews: getNumberOfReviews(),
      // isSuperhost: faker.random.boolean,
      address: getRandomAddress(),
      save_status: getSavednName(),
      room_photos: getRandomImgUrlnDescriptionList(),
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
