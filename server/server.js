const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  const movies = [
    {
      Title: 'Interstellar',
  Released: '2014-11-07',
  Runtime: 169,
  Genres: ['Adventure', 'Drama', 'Sci-Fi'],
  Directors: ['Christopher Nolan'],
  Writers: ['Jonathan Nolan', 'Christopher Nolan'],
  Actors: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
  Plot: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
  Poster: '/interstellar.jpg',
  Metascore: 74,
  imdbRating: 8.6
    },
    {
      Title: 'La La Land',
      Released: '2016-12-09',
      Runtime: 128,
      Genres: ['Comedy', 'Drama', 'Music'],
      Directors: ['Damien Chazelle'],
      Writers: ['Damien Chazelle'],
      Actors: ['Ryan Gosling', 'Emma Stone', 'Rosemarie DeWitt'],
      Plot: 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.',
      Poster: '/lalaland.webp',
      Metascore: 94,
      imdbRating: 8.0
    },
    {
      Title: 'Spirited Away',
      Released: '2002-09-20',
      Runtime: 125,
      Genres: ['Animation', 'Adventure', 'Family'],
      Directors: ['Hayao Miyazaki'],
      Writers: ['Hayao Miyazaki'],
      Actors: ['Daveigh Chase', 'Suzanne Pleshette', 'Miyu Irino'],
      Plot: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.',
      Poster: '/spiritedaway.jpg',
      Metascore: 96,
      imdbRating: 8.6
    }
  ]

  // Part 1: Remove the next line and replace with your code
  res.json(movies)
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

