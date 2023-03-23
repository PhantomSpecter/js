let favMovies = [
    {
        title: "Deadpool",
        year: 2016,
        rating: 8.9,
        description: "Deadpool is a 2016 American superhero film based on the Marvel Comics character of the same name."
    },
    {
        title: "Deadpool 2",
        year: 2018,
        rating: 8.8,
        description: "At the end of September 2018, Fox announced that it would release an untitled Deadpool film in theaters on December 21 in place of Alita: Battle Angel, which was moved to February 2019."
    },
    {
        title: "Venom",
        year: 2018,
        rating: 9.6,
        description: "A Venom 2018-as amerikai szuperhősfilm, melyet Ruben Fleischer rendezett, valamint Scott Rosenberg, Jeff Pinkner, Kelly Marcel és Will Beall írt."
    },
    {
        title: "Venom 2",
        year: 2021,
        rating: 9.7,
        description: "1996-ban a fiatal Cletus Kasady tehetetlenül nézi, ahogy szerelmét Frances Barrisont a Ravencroft nevű intézménybe szállítják."
    }
]
console.log(favMovies[0].title);
console.log(favMovies[1].year);
console.log(favMovies[2].rating);
console.log(favMovies[3].description);

console.log("The first movie's title is: " + favMovies[0].title);
console.log("The second movie's release year is: "+ favMovies[1].year);
console.log("The third movie's IMDB rating is: "+ favMovies[2].rating);
console.log("The fourth movie's short description is: "+ favMovies[3].description);

let favMovies = [
    {
        title: "Deadpool",
        year: 2016,
        rating: 8.9,
        description: "Deadpool is a 2016 American superhero film based on the Marvel Comics character of the same name.", 
        directors: ["Andy Serkis"], 
        writers: ["Avi Arad, Matt Tolmach"],
        stars:["Tom Hardy"],
        genres: ["Sci-Fi"],
        actors: ["Andy Serkis, Avi Arad, Matt Tolmach, Tom Hardy"],
    },
    {
        title: "Deadpool 2",
        year: 2018,
        rating: 8.8,
        description: "At the end of September 2018, Fox announced that it would release an untitled Deadpool film in theaters on December 21 in place of Alita: Battle Angel, which was moved to February 2019.",
        directors: ["Stephen Frears"],
        writers: ["Christopher Hampton", "Choderlos de Laclos"],
        stars: ["Glenn Close", "John Malkovich", "Michelle Pfeiffer"],
        genres: ["Drama", "Romance"]
    },
    {
        title: "Venom",
        year: 2018,
        rating: 9.6,
        description: "A Venom 2018-as amerikai szuperhősfilm, melyet Ruben Fleischer rendezett, valamint Scott Rosenberg, Jeff Pinkner, Kelly Marcel és Will Beall írt.",
        directors: ["Jim Jarmusch"],
        writers: ["Jim Jarmusch"],
        stars: ["Masatoshi Nagase", "Yûki Kudô", "Screamin' Jay Hawkins"],
        genres: ["Comedy", "Crime", "Drama"]
    },
    {
        title: "Venom 2",
        year: 2021,
        rating: 9.7,
        description: "1996-ban a fiatal Cletus Kasady tehetetlenül nézi, ahogy szerelmét Frances Barrisont a Ravencroft nevű intézménybe szállítják.",
        directors: ["Jim Jarmusch"],
        writers: ["Jim Jarmusch"],
        stars: ["Johnny Depp", "Gary Farmer", "Crispin Glover"],
        genres: ["Adventure", "Drama", "Fantasy"]
    }
]
console.log("The first movie's lead director is: " + favMovies[0].directors[0]);
console.log("The second movie's lead writer is: "+ favMovies[1].writers[0]);
console.log("The third movie's lead star is: "+ favMovies[2].stars[0]);
console.log("The fourth movie's main genre is: "+ favMovies[3].genres[0]);

let averageRating = (favMovies[0].rating + favMovies[1].rating + favMovies[2].rating + favMovies[3].rating) / 4;
console.log("The average rating is: " + averageRating);

let averageAge = (2022 - favMovies[0].year + 2022 - favMovies[1].year + 2022 - favMovies[2].year + 2022 - favMovies[3].year) / 4;
console.log("The average age is: " + averageAge);