export const clearLocalStorage = () => {
  const searchResult = localStorage.getItem("searchResult");
  const searchQuery = localStorage.getItem("searchQuery");

  if (searchResult && searchQuery) {
    localStorage.removeItem("searchResult");
    localStorage.removeItem("searchQuery");
  }
};

export function saveToLocalStorage() {
  if (arguments.length === 1) {
    const searchResult = JSON.parse(localStorage.getItem("searchResult"));
    const [{show}] = searchResult.filter(
      (show) => show.show.id == arguments[0]
    );
    localStorage.setItem("showDetails", JSON.stringify(show));
  }

  if (arguments.length === 2) {
    localStorage.setItem("searchResult", JSON.stringify(arguments[0]));
    localStorage.setItem("searchQuery", arguments[1]);
  }
}

export const getFromLocalStorage = () => {
  const searchResult = JSON.parse(localStorage.getItem("searchResult"));
  const searchQuery = localStorage.getItem("searchQuery");
  const showDetails = JSON.parse(localStorage.getItem("showDetails"));

  if (searchResult) {
    const localStorageData = { searchResult, searchQuery, showDetails };
    return localStorageData;
  } else return {};
};
