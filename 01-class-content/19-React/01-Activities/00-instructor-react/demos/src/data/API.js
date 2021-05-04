const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

export const API = {
  search: (query) => fetch(BASEURL + query + APIKEY)
}