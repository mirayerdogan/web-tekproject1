const filmListesi = document.getElementById('filmListesi');
const müzikListesi = document.getElementById('müzikListesi');
const sporListesi = document.getElementById('sporListesi');
const doğaListesi = document.getElementById('doğaListesi');

const filmler = [
  'The Parazit',
  'The Dangal',
  'The The Martian',
  'The Bird Box',
  'The Escape Room',
  'The Friends',
  'The Suits',
  'The Tom & Jerry',
  'The Şirinler',
  'The Stranger Things',
  'Biz Kimden Kaçıyoruk Anne',
  'Wednesday',
  'Son Durak',
  'Nefesini Tut',
  'Recep İvedik',
  'Hababam Sınıfı',
  'Awake',
  'Açlık',
  'Derinlerdeki Dehşet',
  'Deliha'
];

const müzikler = [
  'Derinlerde',
  'Tourner Dans Le Vide',
  'Bad Boy',
  'Anlayamazsın',
  'Calm Down',
  'Middle of the Night',
  'Tac Mahal',
  'Shape of you',
  'Astronaut in the Ocean',
  'Yüreğimden Tut',
  'Beyaz ve Sen',
  'Fairytale',
  'In my Eyes',
  'Let Me Down ',
  'Bilmezler Nasıl Sevdik',
  'Sana Çıkıyor Yollar',
  'Alışamadım',
  'Sabır Ver',
  'Love Story',
  'Yalan'
];

const sporlar = [
  'Tenis',
  'Plates',
  'Basketbol',
  'Koşu',
  'Yüzme',
  'Voleybol',
  'Kayak',
  'Bowling',
  'Paraşüt',
  'Paten'
  
];


fetch('https://api.themoviedb.org/3/movie/550?api_key=273d5a63f37d57017dad56e3a2d0ef31', {
  headers: {
    'Authorization': '273d5a63f37d57017dad56e3a2d0ef31'
  }
})
.then(response => response.json())
.then(data => {
  const filmListesi = document.getElementById('filmListesi');

  filmler.forEach(film => {
    const li = document.createElement('li');
    li.textContent = film;
    filmListesi.appendChild(li);
  });
})
.catch(error => console.log(error));



fetch('https://musicapi13.p.rapidapi.com/public/search/introspection', {
  headers: {
    'Authorization': 'ac705fa1f2msh768826e19727a31p106927jsnb7ae3df14f62'
  }
})
.then(response => response.json())
.then(data => {
  const müzikListesi = document.getElementById('müzikListesi');

  müzikler.forEach(müzik => {
    const li = document.createElement('li');
    li.textContent = müzik;
    müzikListesi.appendChild(li);
  });
})
.catch(error => console.log(error));



fetch('https://api-football-v1.p.rapidapi.com/v3/timezone', {
  headers: {
    'Authorization': 'ac705fa1f2msh768826e19727a31p106927jsnb7ae3df14f62'
  }
})
.then(response => response.json())
.then(data => {
  const sporListesi = document.getElementById('sporListesi');

  sporlar.forEach(spor => {
    const li = document.createElement('li');
    li.textContent = spor;
    sporListesi.appendChild(li);
  });
})
<<<<<<< HEAD
.catch(error => console.log(error));
=======
.catch(error => console.log(error));


>>>>>>> eddb2d407511fe63b44bbce22cafb5d19761df9e
