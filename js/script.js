'use strict';

const nubmer0fFilms = +prompt('Skolko filmov vi uje glyanuli?');

console.log(nubmer0fFilms);

const personalMovieDB = {
    count: nubmer0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Odin iz poslednih filmov?', ''),
      b = prompt('Na skolko ocenite ego?', ''),
      c = prompt('Odin iz poslednih filmov?', ''),
      d = prompt('Na skolko ocenite ego?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);