export const findShows = async (query) => {
  const baseUrl = "https://api.tvmaze.com/search/shows?q=";
  const { data } = await axios.get(baseUrl + query);
  return data;
};