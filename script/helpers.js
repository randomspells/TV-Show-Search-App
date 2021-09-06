export const scoreReducer = (rating) => {
  let stars = "";
  if (rating >= 9) {
    stars += "*";
  }
  if (rating >= 7.5) {
    stars += "*";
  }
  if (rating >= 5) {
    stars += "*";
  }
  if (rating >= 2.5) {
    stars += "*";
  }
  if (rating >= 0) {
    stars += "*";
  }
  return stars;
};
