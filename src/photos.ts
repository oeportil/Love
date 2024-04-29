const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashPhotos = [
    { src: "../public/album/30.jpg", width: 800, height: 1000 },
    { src: "../public/album/1.jpg", width: 800, height: 600 },
    { src: "../public/album/2.jpg", width: 800, height: 1000},
    { src: "../public/album/3.jpg", width: 800, height: 1000 },
    { src: "../public/album/4.jpg", width: 800, height: 1000 },
    { src: "../public/album/5.jpg", width: 800, height: 1000 },
    { src: "../public/album/6.jpg", width: 800, height: 1000 },
    { src: "../public/album/7.jpg", width: 800, height: 1000 },
    { src: "../public/album/8.jpg", width: 800, height: 1000 },
    { src: "../public/album/9.jpg", width: 800, height: 1000 },
    { src: "../public/album/10.webp", width: 800, height: 1000 },
    { src: "../public/album/11.jpg", width: 800, height: 1000 },
    { src: "../public/album/12.webp", width: 800, height: 1000 },
    { src: "../public/album/13.webp", width: 800, height: 1000 },
    { src: "../public/album/15.jpg", width: 800, height: 1000 },
    { src: "../public/album/16.webp", width: 800, height: 1000 },
    { src: "../public/album/17.jpg", width: 800, height: 1000 },
    { src: "../public/album/18.jpg", width: 800, height: 1000 },
    { src: "../public/album/19.jpg", width: 800, height: 1000 },
    { src: "../public/album/20.jpg", width: 800, height: 1000 },
    { src: "../public/album/21.jpg", width: 800, height: 1000 },
    { src: "../public/album/22.jpg", width: 800, height: 1000 },
    { src: "../public/album/23.webp", width: 800, height: 1000 },
    { src: "../public/album/24.jpg", width: 800, height: 1000 },
    { src: "../public/album/25.jpg", width: 800, height: 1000 },
    { src: "../public/album/26.jpg", width: 800, height: 1000 },
    { src: "../public/album/27.jpg", width: 800, height: 1000 },
    { src: "../public/album/28.jpg", width: 800, height: 1000 },
    { src: "../public/album/29.jpg", width: 800, height: 1000 }      
];


  const photos = unsplashPhotos.map((photo) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: photo.src,
        width: breakpoint,
        height,
      };
    }),
  }));
  
  export default photos;