import { findShows } from "./fetchData.js";
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "./localStorage.js";
import { clearShows, renderShows } from "./renderList.js";

const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const {searchResult, searchQuery} = getFromLocalStorage();
if (searchResult) {
  const input = document.querySelector("#search-input");
  renderShows(searchResult);
  input.value = searchQuery;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchQuery = input.value;
  if (searchQuery.length > 0) {
    clearShows();
    try {
      const searchResult = await findShows(searchQuery);
      saveToLocalStorage(searchResult, searchQuery);
      renderShows(searchResult);
      console.log(searchResult);
    } catch (e) {
      console.log(e.message);
    }
  }
});
