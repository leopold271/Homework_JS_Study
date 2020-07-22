"use strict";



let numberOfFilms;



function start() {
   numberOfFilms = +prompt("How many films have U watched?", '');

   while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt("How many films have U watched?", '');
   }
}

function detectPersonalLevel() {
   if (personalMovieDB.count == 0) {
      alert('ты пидор');
   } else if (personalMovieDB.count < 10) {
      alert('маловато!');
   } else if (personalMovieDB.count <= 30) {
      alert('Вы классический зритель..');
   } else if (personalMovieDB.count > 30) {
      alert('Да вы киноман!');
   } else {
      alert('ERROR!!!');
   }
}


function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      let a = prompt("What film have U watched?", ''),
         b = prompt("How have U rated it?", '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('done');
      } else {
         console.log('error');
         i--;
      }
   }

}

function showMyDB() {
   if (!personalMovieDB.privat) {
      console.log(personalMovieDB);
   }
}

function writeYourGenres() {
   for (let i = 0; i < 3; i++) {
      personalMovieDB.genres[i] = prompt('Your favorite genre # ' + (i + 1));
   }

}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

detectPersonalLevel();

rememberMyFilms();

writeYourGenres();

showMyDB();