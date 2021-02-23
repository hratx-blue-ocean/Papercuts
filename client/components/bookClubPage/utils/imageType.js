const imageType = (file) => {
  const image = /\.(jpg|jpeg|png)/gi;
  const vector = /\.(svg)/gi;
  let foundImg = image.test(`${file}`);
  let foundSvg = vector.test(`${file}`);

  if (foundImg) {
    // console.log('File Type: Image');
    return 'IMG';
  } else if (foundSvg) {
    // console.log('File Type: SVG');
    return 'SVG';
  } else {
    console.log('File Type Not Found');
  }
};

export default imageType;
