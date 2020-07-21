"use strict";

const numberOfFilms = +prompt("How many films have U watched?", '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

const a = prompt("One of the last films U watched?", ''),
   b = prompt("How have U rated it?", ''),
   c = prompt("One of the last films U watched?", ''),
   d = prompt("How have U rated it?", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);