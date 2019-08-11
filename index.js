const fetch = require("node-fetch");
const cheerio = require("cheerio");

const url = "https://www.imdb.com/find?ref_=nv_sr_fn&q=";

function searchMovies(searchTerm) {
  return fetch(`${url}${searchTerm}`).then(response => response.text());
}

searchMovies("black mirror").then(body => {
  console.log(body);
});
