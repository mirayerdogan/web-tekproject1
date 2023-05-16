const apiKey="ac705fa1f2msh768826e19727a31p106927jsnb7ae3df14f62";
const movieUrl="'https://movies-tv-shows-database.p.rapidapi.com/";
const SportUrl="https://www.thesportsdb.com";

function getMovies(){

    fetch(movieUrl)

    .then(response => response.json())
		
    .then(data => {
        const movieList = document.getElementById('movie-list');
        data.results.slice(0, 6).forEach(movie => {
          const movieItem = document.createElement('div');
          movieItem.classList.add('movie-item');
          movieItem.innerHTML = `
            <h3>${movie.title}</h3>
            <p>${movie.overview}</p>
            <p>Vizyon Tarihi: ${movie.release_date}</p>
            <p>Ortalama Puan: ${movie.vote_average}</p>
          `;
          movieList.appendChild(movieItem);
        });
      })
      .catch(error => {
        console.log('Bir hata oluştu: ', error);
      });
  }
  
  function getSports() {
    fetch(sportUrl)
      .then(response => response.json())
      .then(data => {
        const sportList = document.getElementById('sport-list');
        data.sports.slice(0, 6).forEach(sport => {
          const sportItem = document.createElement('div');
          sportItem.classList.add('sport-item');
          sportItem.innerHTML = `
            <h3>${sport.strSport}</h3>
            <p>${sport.strSportDescription}</p>
          `;
          sportList.appendChild(sportItem);
        });
      })
      .catch(error => {
        console.log('Bir hata oluştu: ', error);
      });
  }
  
  window.onload = function() {
    getMovies();
    getSports();

}