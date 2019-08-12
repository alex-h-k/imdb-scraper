const fetch = require("node-fetch");
const cheerio = require("cheerio");

const searchUrl = "https://www.imdb.com/find?ref_=nv_sr_fn&q=";
const movieUrl = "https://www.imdb.com/title/";
function searchMovies(searchTerm) {
  return fetch(`${searchUrl}${searchTerm}`)
    .then(response => response.text())
    .then(body => {
      const movies = [];
      const $ = cheerio.load(body);
      $(".findResult").each((i, element) => {
        const $element = $(element);
        const $image = $element.find("table.findList td a img");
        const $title = $element.find("table.findList td.result_text a");
        const imdbID = ($title.attr("href").match(/title\/(.*)\//) || [
          "",
          "none"
        ])[1];
        console.log($title.text());
        const movie = {
          image: $image.attr("src"),
          title: $title.text(),
          imdbID
        };
        movies.push(movie);
      });

      return movies;
    });
}

function getMovie(imdbID) {
  return fetch(`${movieUrl}${imdbID}`)
    .then(res => {
      res.text();
    })
    .then(body => {
      console.log(body);
      return body;
    });
}

module.exports = {
  searchMovies,
  getMovie
};
