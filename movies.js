//input data into array filled with objects in a array
//listed the movie names, rating, and if had seen before or waiting to see it
var movies = [
    {
        name: "Pacific Rims",
        rating: 5,
        hasWatched: true
    },
    {
        name: "Life with Kai",
        rating: 4,
        hasWatched: false
    },
    {
        name: "Pokemon",
        rating: 5,
        hasWatched: false
    }
]

//loop over every object in the array
movies.forEach(function(movie) {
//Setting up the console output
    var result = "You have ";
//if person had seen the movie, output is watched is display
    if(movie.hasWatched) {
        result += "watched ";
    } else {
//if person did not seen the movie, output is display 
        result += "not seen ";
    }
//putting the movie in quote marks and rating for the movie
    result += "\"" + movie.name + "\" -"; 
    result += movie.rating + " stars"
//output
    console.log(result);
});
