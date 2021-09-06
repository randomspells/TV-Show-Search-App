export const ratingReducer = (rating) => {
  let solidStarHTML = '<i class="fas fa-star"></i>';
  let regularStarHTML = '<i class="far fa-star"></i>';
  let solidStarsCount = 0;
  if (rating >= 9) {
    solidStarsCount++;
  }
  if (rating >= 7.5) {
    solidStarsCount++;
  }
  if (rating >= 5) {
    solidStarsCount++;
  }
  if (rating >= 2.5) {
    solidStarsCount++;
  }
  if (rating > 0) {
    solidStarsCount++;
  } else {
    return null;
  }
  const regularStarsCount = 5 - solidStarsCount;
  const stars =
    solidStarHTML.repeat(solidStarsCount) +
    regularStarHTML.repeat(regularStarsCount);

  return stars;
};
