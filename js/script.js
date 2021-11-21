"use strict";

const nubmer0fFilms = +prompt("Skolko filmov vi uje glyanuli?");

console.log(nubmer0fFilms);

const personalMovieDB = {
  count: nubmer0fFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Odin iz poslednih filmov?", ""),
    b = prompt("Na skolko ocenite ego?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("Done!");
  } else {
    console.log("error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Malo filmov");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Classical zritel");
} else if (personalMovieDB.count >= 30) {
  console.log("vi kinoman");
} else {
  console.log("Error!");
}

console.log(personalMovieDB);
