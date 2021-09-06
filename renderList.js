import { saveToLocalStorage } from "./localStorage.js";
import { scoreReducer } from "./helpers.js";

export const clearShows = () => {
  const wrapper = document.querySelector("#results-list");
  wrapper.innerHTML = "";
};

export const renderShows = (data) => {
  const resultsCount = document.querySelector("#results-count");
  resultsCount.innerHTML = `${data.length} results`;
  const wrapper = document.querySelector("#results-list");

  data.map(({show}) => {
    const card = document.createElement("a");
    card.href = "./details.html";
    card.addEventListener("click", function (e) {
      saveToLocalStorage(card.id);
    });
    card.className = "card card-small diagonal";
    card.id = show.id;
    wrapper.appendChild(card);

    const cover = document.createElement("div");
    const templateImgUrl = "./img/template-movie.jpg";
    const imageUrl = show.image ? show.image.medium : templateImgUrl;
    cover.id = "show-cover";
    cover.className = "cover"
    cover.style.backgroundImage = `url(${imageUrl})`;
    card.appendChild(cover);

    const name = document.createElement("h3");
    const ending = show.name.split(' ').length > 5 ? '...' : '';
    name.innerHTML = show.name.split(' ').slice(0,5).join(' ').concat(ending);
    name.href = "./details.html";
    name.addEventListener("click", function (e) {
      saveToLocalStorage(card.id);
    });
    card.appendChild(name);

    const rating = document.createElement("span");
    rating.innerHTML = scoreReducer(show.rating.average);
    card.appendChild(rating);
  });
};
