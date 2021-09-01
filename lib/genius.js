const GENIUS_API_TOKEN = 'INSERT_YOUR_TOKEN_HERE';
const BASE_URL = 'https://api.genius.com/';

const songForm = document.querySelector('#songForm');
const searchForm = document.querySelector('#searchForm');

songForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('song form submitted');
  console.log(event.currentTarget);
  const input = event.currentTarget.querySelector('#song-id').value;
  console.log(input);

  fetch(`${BASE_URL}songs/${input}?access_token=${GENIUS_API_TOKEN}`)
    .then(response => response.json())
    .then((song) => {
      console.log(song.response.song.title);
      const title = document.querySelector('#title');
      title.innerText = song.response.song.title;

      console.log(song.response.song.primary_artist.name);
      const artist = document.querySelector('#artist');
      artist.innerText = song.response.song.primary_artist.name;

      const album = document.querySelector('#album');
      album.innerText = song.response.song.album.name;

    })
});

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('search form submitted');
  console.log(event.currentTarget);
  const input = event.currentTarget.querySelector('#search').value;
  console.log(input);

  fetch(`${BASE_URL}search?q=${input}&access_token=${GENIUS_API_TOKEN}`)
    .then(response => response.json())
    .then((songList) => {
      console.log(songList);
      console.log(songList.response.hits[0].result.title);
      const title = document.querySelector('#title');
      title.innerText = songList.response.hits[0].result.title;

      const artist = document.querySelector('#artist');
      artist.innerText = songList.response.hits[0].result.primary_artist.name;

    })
});
