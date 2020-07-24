"use strict";

// function start() {
//    personalMovieDB.count = +prompt("How many films have U watched?", '');

//    while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
//       personalMovieDB.count = +prompt("How many films have U watched?", '');
//    }
// }

// function detectPersonalLevel() {
//    if (personalMovieDB.count == 0) {
//       alert('ты пидор');
//    } else if (personalMovieDB.count < 10) {
//       alert('маловато!');
//    } else if (personalMovieDB.count <= 30) {
//       alert('Вы классический зритель..');
//    } else if (personalMovieDB.count > 30) {
//       alert('Да вы киноман!');
//    } else {
//       alert('ERROR!!!');
//    }
// }

// function rememberMyFilms() {
//    for (let i = 0; i < 2; i++) {
//       let a = prompt("What film have U watched?", ''),
//          b = prompt("How have U rated it?", '');

//       if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//          personalMovieDB.movies[a] = b;
//          console.log('done');
//       } else {
//          console.log('error');
//          i--;
//       }
//    }

// }

// function showMyDB() {
//    if (!personalMovieDB.privat) {
//       console.log(personalMovieDB);
//    }
// }

// function writeYourGenres() {
//    for (let i = 0; i < 3; i++) {
//       personalMovieDB.genres[i] = prompt('Your favorite genre # ' + (i + 1));
//    }

// }

//start();

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,

   start() {
      personalMovieDB.count = +prompt("How many films have U watched?", '');
      if (personalMovieDB.count == null || personalMovieDB.count == 0 || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
         personalMovieDB.start();
      }
   },

   detectPersonalLevel() {
      if (personalMovieDB.count < 5) {
         alert('very few...');
      } else if (personalMovieDB.count < 15) {
         alert('U r calssic user..');
      } else if (personalMovieDB.count >= 15) {
         alert('Wow!! U r fan of movies!');
      } else {
         alert('ERROR!!!');
      }
   },

   rememberMyFilms() {
      for (let i = 0; i < 2; i++) {
         let a = prompt('What film have u watched?', ''),
            b = prompt('How do u rate it?');

         if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done!');
         } else {
            i--;
            console.log('error!');
         }
      }
   },

   showMyDB() {
      if (!personalMovieDB.privat) {
         console.log(personalMovieDB);
      }
   },

   writeYourGenres() {
      for (let i = 0; i < 3; i++) {
         let a = prompt(`Ur favorit genre # ${i+1}`);
         if (a !== null && a !== '') {
            personalMovieDB.genres[i] = a;
            console.log(`got # ${i+1}`);
         } else {
            console.log('error!');
            i--;
         }
      }
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Ur favorite genre # ${i+1} is ${item}`);
      });
   },

   toggleVisibleMyDB() {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   }
};

//personalMovieDB.start();

//personalMovieDB.detectPersonalLevel();

//personalMovieDB.rememberMyFilms();

//personalMovieDB.writeYourGenres();

//personalMovieDB.showMyDB();

//personalMovieDB.toggleVisibleMyDB();

// detectPersonalLevel();

// rememberMyFilms();

// writeYourGenres();

// showMyDB();