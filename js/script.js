"use strict";

const numberOfFilms = +prompt("How many films have U watched?", '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};
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



//let a = prompt("What film have U watched?", '');
//let b = prompt("How have U rated it?", '');
//personalMovieDB.movies[a] = b;

// let i = 0;
// while (i < 2) {
//    let a = prompt("What film have U watched?", ''),
//       b = prompt("How have U rated it?", '');

//    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//    } else {
//       console.log('error');
//       i--;
//    }
//    i++;
// }

// for (let i = 0; i < 2; i++) {
//    let a = prompt("What film have U watched?", ''),
//       b = prompt("How have U rated it?", '');

//    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//    } else {
//       console.log('error');
//       i--;
//    }
// }

let i = 0;

do {
   let a = prompt("What film have U watched?", ''),
      b = prompt("How have U rated it?", '');

   if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');

   } else {
      console.log('error');
      i--;
   }
   i++;
} while (i < 2);

console.log(personalMovieDB);