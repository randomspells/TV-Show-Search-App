import { getFromLocalStorage } from "./localStorage.js";
import { scoreReducer } from "./helpers.js";

const { showDetails } = getFromLocalStorage();

const renderDetails = () => {
  if (showDetails) {
    const name = document.querySelector("#show-name");
    name.innerHTML = showDetails.name;

    const rating = document.querySelector("#show-rating");
    rating.innerHTML = scoreReducer(showDetails.rating.average);

    const cover = document.querySelector("#show-cover");
    const templateImgUrl = "./img/template-movie.jpg";
    const imageUrl = showDetails.image
      ? showDetails.image.medium
      : templateImgUrl;
    cover.style.background = `url(${imageUrl})`;

    const info = document.querySelector("#show-info");
    const { genres, language, premiered, status } = showDetails;
    info.children[0].innerHTML = `<b>Genres:</b> ${
      genres.length > 0 ? genres.join(", ") : "tbc"
    }`;
    info.children[1].innerHTML = `<b>Language:</b> ${language ?? "tbc"}`;
    info.children[2].innerHTML = `<b>Premiered at:</b> ${premiered ?? "tbc"}`;
    info.children[3].innerHTML = `<b>Status:</b> ${status ?? "tbc"}`;
    console.dir(info.children[0].innerHTML);

    const description = document.querySelector("#show-description");
    description.innerHTML = showDetails.summary ?? "Description is not found.";
  }

  if (!showDetails) {
    const cover = document.querySelector("#show-cover");
    cover.style.display = "none";
    const name = document.querySelector("#show-name");
    name.innerHTML = `Show is not found... <a href="/index.html">Search again</a>`;
  }
};

renderDetails();
