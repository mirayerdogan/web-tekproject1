var movies = [
  { title: "The Parazit", director: "Bong Joon-ho", year: 2019 },
  { title: "Dangal", director: "Nitesh Tiwari", year: 2016 },
  { title: "The Martian", director: "Ridley Scott", year: 2015 },
  { title: "Bird Box", director: "Susanne Bier", year: 2018 },
  { title: "Escape Room", director: "Adam Robitel", year: 2019 },
  { title: "Friends", director: " David Crane , Marta Kauffman", year: 1994},
  { title: "Suits", director: "Aaron Korsh", year: 2011}
];

var sports = [
  { name: "Tenis"},
  { name: "Basketbol"},
  { name: "Plates"},
  { name: "Koşu"},
  { name: "Yüzme"},
  { name: "Voleybol"},
  { name: "Kayak"}

];

var music = [
  { title: "Derinlerde", artist: "Cem Adrian"},
  { title: "Bad Boy", artist: "Marwa Loud"},
  { title: "Fırtınadayım", artist: "Mabel Matiz"},
  { title: "Anlayamazsın", artist: "Seksendört"},
  { title: "Calm Down", artist: "Rema, Selena Gomez"},
  { title: "Middle of the Night", artist: "Elley Duhé"},
  { title: "Tac Mahal", artist: "Buray"},
  { title: "Shape of You", artist: "Ed Sheeran "},
  { title: "Astronaut in the Ocean", artist: "Masked Wolf"}
];

function showMovies() {
  var movieListHTML = "";
  for (var i = 0; i < movies.length; i++) {
    movieListHTML += '<div class="movie-item"><h3>' + movies[i].title + '</h3><p>Yönetmen: ' + movies[i].director + '</p><p>Yıl: ' + movies[i].year + '</p></div>';
  }
  document.getElementById("Movie-list").innerHTML = movieListHTML;
}

function showSports() {
  var sportListHTML = "";
  for (var i = 0; i < sports.length; i++) {
    sportListHTML += '<div class="sport-item"><h3>' + sports[i].name + '</h3><p>' + '</p></div>';
  }
  document.getElementById("Sports-list").innerHTML = sportListHTML;
}

function showMusic() {
  var musicListHTML = "";
  for (var i = 0; i < music.length; i++) {
    musicListHTML += '<div class="music-item"><h3>' + music[i].title + '</h3><p>Sanatçı: ' + music[i].artist + '</p></div>';
  }
  document.getElementById("Music-list").innerHTML = musicListHTML;
}

window.onload = function() {
  showMovies();
  showSports();
  showMusic();
};
