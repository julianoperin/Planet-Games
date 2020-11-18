// Resize the images

export const smallImage = (imagePath, size) => {
  // In case there is no search
  if (!imagePath) return null;
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
  return image;
};
