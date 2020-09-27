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
  return title[0];
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
  return address[0];
};

const getNumberOfReviews = () => {
  const max = 2000;
  const min = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_000_Big.jpg',
// 'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_031_big.jpg',
// 'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_036_sf.jpg',

const photos = [

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
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_013.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_018.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_022.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_031.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_032.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_033.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_034.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_035.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_037_sf.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_038_sf.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_039_sf.jpg',
  'https://bookable-rooms-images.s3.us-east-2.amazonaws.com/image_bali_040_sf.jpg'

];

// const getImgUrlnDescription = () => {
//   // const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
//   const numberOfWords = Math.floor(Math.random() * (6 - 0) + 0);
//   for (let i = 0; i < photos.length; i++) {
//     return { imageUrl: photos[i], description: faker.lorem.words(numberOfWords) };
//   }
// };

// const getImgUrlnDescriptionList = () => {
//   const imageUrlList = [];
//   const numberOfPhotos = 5;

//   for (let i = 0; i < numberOfPhotos; i++) {
//     const randomImgUrlnDescription = getImgUrlnDescription();
//     imageUrlList.push(randomImgUrlnDescription);
//   }
//   return imageUrlList;
// };

const getImgUrlnDescriptionList = () => {
  const imageUrlList = [];
  const numberOfPhotos = 5;
  const numberOfWords = Math.floor(Math.random() * (6 - 0) + 0);

  for (let i = 0; i < numberOfPhotos; i++) {
    imageUrlList.push({ imageUrl: photos[i], description: faker.lorem.words(numberOfWords) });
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
      ratings: (Math.random() * (5 - 3) + 3).toFixed(1),
      number_of_reviews: getNumberOfReviews(),
      // isSuperhost: faker.random.boolean,
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
