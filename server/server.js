const express = require('express')
const path = require('path')
const app = express()
const movies = [
    {
        "Title": "Blade Runner",
        "Runtime": 117,
        "Released": "1982-06-25",
        "Genres": ["Action","Drama","Sci - Fi"],
        "Directors": ["Ridley Scott"],
        "Writers": ["Hampton Fancher","David Webb Peoples","Philip K. Dick"],
        "Actors": ["Harrison Ford","Rutger Hauer","Sean Young"],
        "Plot": "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_SX300.jpg",
        "Metascore": 84,
        "imdbRating": 8.1
    },

    {
        "Title": "Hedwig and the Angry Inch",
        "Runtime": 95,
        "Released": "2001-08-31",
        "Genres": ["Comedy","Drama", "Music"],
        "Directors": ["John Cameron Mitchell"],
        "Writers": ["John Cameron Mitchell","Stephen Trask"],
        "Actors": ["John Cameron Mitchell","Miriam Shor","Stephen Trask"],
        "Plot": "A gender-queer punk-rock singer from East Berlin tours the U.S. with her band as she tells her life story and follows the former lover/band-mate who stole her songs.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2Q4MGJmYTgtNDhiMS00MTcwLTlhZjgtN2U5NWUyYzFiMWRmXkEyXkFqcGc@._V1_SX300.jpg",
        "Metascore": 85,
        "imdbRating": 7.7
    },
    {
        "Title": "Müllers Büro",
        "Runtime": 104,
        "Released": "1986-06-19",
        "Genres": ["Comedy","Crime","Musical"],
        "Directors": ["Niki List","Hans Selikovsky"],
        "Writers": ["Niki List"],
      "Actors": ["Andreas Vitásek","Barbara Rudnik","Christian Schmidt"],
        "Plot": "Private detective Max Müller and his assistent Larry try to solve a crime but find themselves in strange bars and women.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDg3MTIyNDItOGZiMi00NDE0LWI2NjEtNmExOGY0NmU2N2Q4XkEyXkFqcGdeQXVyNjEzMTc5NTQ@._V1_SX300.jpg",
        "Metascore": 100,
        "imdbRating": 6.7
    }
]


// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));
// OMDB key: 21828272
//fetch('http://www.omdbapi.com/?apikey=[yourkey]&')

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  /*/ Part 1:
  1. Title
1. Released
1. Runtime
1. Genre
1. Director
1. Writer
1. Actors
1. Plot
1. Poster
1. Metascore
1. imdbRating
  movie 1: blade runner
  http://www.omdbapi.com/?t=blade+runner
  {"Title":"Blade Runner","Year":"1982","Rated":"R","Released":"25 Jun 1982","Runtime":"117 min","Genre":"Action, Drama, Sci-Fi","Director":"Ridley Scott","Writer":"Hampton Fancher, David Webb Peoples, Philip K. Dick","Actors":"Harrison Ford, Rutger Hauer, Sean Young","Plot":"A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.","Language":"English, German, Cantonese, Japanese, Hungarian, Arabic, Korean","Country":"United States, United Kingdom, Hong Kong","Awards":"Nominated for 2 Oscars. 13 wins & 22 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"89%"},{"Source":"Metacritic","Value":"84/100"}],"Metascore":"84","imdbRating":"8.1","imdbVotes":"876,371","imdbID":"tt0083658","Type":"movie","DVD":"N/A","BoxOffice":"$32,914,489","Production":"N/A","Website":"N/A","Response":"True"}
  movie 2: hedwig
  http://www.omdbapi.com/?t=hedwig
  {"Title":"Hedwig and the Angry Inch","Year":"2001","Rated":"R","Released":"31 Aug 2001","Runtime":"95 min","Genre":"Comedy, Drama, Music","Director":"John Cameron Mitchell","Writer":"John Cameron Mitchell, Stephen Trask","Actors":"John Cameron Mitchell, Miriam Shor, Stephen Trask","Plot":"A gender-queer punk-rock singer from East Berlin tours the U.S. with her band as she tells her life story and follows the former lover/band-mate who stole her songs.","Language":"English, German","Country":"Canada, United States","Awards":"28 wins & 33 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BN2Q4MGJmYTgtNDhiMS00MTcwLTlhZjgtN2U5NWUyYzFiMWRmXkEyXkFqcGc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"85/100"}],"Metascore":"85","imdbRating":"7.7","imdbVotes":"38,305","imdbID":"tt0248845","Type":"movie","DVD":"N/A","BoxOffice":"$3,082,286","Production":"N/A","Website":"N/A","Response":"True"}
  movie 3: Müllers Büro
  request: http://www.omdbapi.com/?t=m%C3%BCllers+b%C3%BCro
  {"Title":"Müllers Büro","Year":"1986","Rated":"N/A","Released":"19 Jun 1986","Runtime":"104 min","Genre":"Comedy, Crime, Musical","Director":"Niki List, Hans Selikovsky","Writer":"Niki List","Actors":"Andreas Vitásek, Barbara Rudnik, Christian Schmidt","Plot":"Private detective Max Müller and his assistent Larry try to solve a crime but find themselves in strange bars and women.","Language":"German","Country":"Austria","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BMDg3MTIyNDItOGZiMi00NDE0LWI2NjEtNmExOGY0NmU2N2Q4XkEyXkFqcGdeQXVyNjEzMTc5NTQ@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.7/10"}],"Metascore":"N/A","imdbRating":"6.7","imdbVotes":"810","imdbID":"tt0091594","Type":"movie","DVD":"10 Apr 2003","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"}


  Implement the server-side endpoint in server/server.js so that 
  /movies returns an array of at least three movie objects in valid JSON, 
  based on OMDb API example data (trimmed and reformatted as specified).
  next time:  fetch('https://api.example.com/data').then(response => response.json()).then(data => { console.log(data); })
  */
    //res.send('!dlrow olleH')
    res.json(movies)
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

