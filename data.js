// The following line is just an example how you can add a string (aka text) value to a variable.
let exampleVariable = "This is string added to the variable names exampleVariable";

/*
Explanation:

[keyword] [variable name] [equal sign] [value];

[keyword]: `let`
You have to use a keyword when you define a variable.
You may already know that there are two other keywords for this purpose: `const` and `var`.
There are slight differences between them, we will talk about this later.
The most important for now is that you shouldn't use `var` - if you see an example on the internet where `var` is used,
    you should replace it to the `let` keyword.

[variable name]: `exampleVariable`
You can add almost any name for a variable, but be careful with two things:
1. Don't use special characters in it.
2. Use the "camelCase" form where the words are written right after each other without spaces,
   and the first letters are in uppercase, except for the very first one (e.g. thisIsACamelCaseText).
Finally, it is recommended to use the English language all around in your code, especially (but not exclusively) for the variable names.

[equal sign]: `=`
Don't forget, the equal sign between the variable name and the value is essential.
This is a so-called operator, the "assignment operator" which assigns the value to the variable.

[value]: `"This is string added to the variable names exampleVariable"`
The value is the piece of data you want to assign (save) to the variable so you can use it later.

And don't forget the semicolon at the end of the line.
*/

// The following line is just an example how you can use the log text to the console using `console.log()`.
// You have to write a value or a variable name between the parentheses.
console.log(exampleVariable);

// WRITE YOUR CODE BELOW THIS LINE
let title = "Harry Potter"
console.log(title);

let author = "J.K. Rowling"
console.log(author);

let year = "1965"
console.log(year)

let isNewerThan2000 = false
console.log(isNewerThan2000)    

let age = 19
console.log(age)    

let characters = [
    "Harry Potter",
    "The Dark Knight"
]   
console.log(characters) 

let favoriteBook = "Harry Potter and the Chamber of Secrets"    
console.log(favoriteBook)

let favoriteBooks = [
    "Harry Potter and the Chamber of Secrets",
    "Harry Potter and the Prisoner of Azkaban"
]
console.log(favoriteBooks)  

console.log(characters[0]) 
console.log(characters[1]) 

let favouriteBooks = [
    {
        title: "Breakfast of Champions",
        author: "Kurt Vonnegut",
        year: 1973,
        isNewerThan2000: false,
        characters: ["Dwayne Hoover", "Kilgore Trout", "Harry LeSabre", "Celia Hoover", "Francine Pefko"]
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        year: 1965,
        isNewerThan2000: false,
        characters: ["Paul Atreides", "Chani", "Duncan Idaho"]
    }
]

console.log(favouriteBooks[0].title)  

console.log(favouriteBooks[1].title) 

console.log(favouriteBooks[0].author)  

console.log(favouriteBooks[1].year - favouriteBooks[0].year)

let favouriteMovies = [
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

let averageSale = (bestSellingAlbums[0].sale + bestSellingAlbums[1].sale + bestSellingAlbums[2].sale + bestSellingAlbums[3].sale + bestSellingAlbums[4].sale + bestSellingAlbums[5].sale +bestSellingAlbums[6].sale +bestSellingAlbums[7].sale) / 8;
console.log ("The avarage sale is:" +averageSale);

let currentYear = 2023;
let averageAge = (2023 - bestSellingAlbums[0].year + 2023 - bestSellingAlbums[1].year  + 2023 - bestSellingAlbums[2].year  + 2023 - bestSellingAlbums[3].year  + 2023 - bestSellingAlbums[4].year  + 2023 - bestSellingAlbums[5].year  +2023 - bestSellingAlbums[6].year  +2023 - bestSellingAlbums[7].year ) / 8;
console.log ("The avarage age is:" +averageAge);

let newestAlbum = (bestSellingAlbums[6].year);
console.log (newestAlbum);
let oldestAlbum = (bestSellingAlbums[3].year);
console.log (oldestAlbum);

let albumsOfEagles = {
sales : bestSellingAlbums[5].sale + bestSellingAlbums[6].sale,
isBothSoftRock : bestSellingAlbums[5].genres === bestSellingAlbums[6].genres,
}
console.log (albumsOfEagles.sales);
console.log (albumsOfEagles.isBothSoftRock);

bestSellingAlbums[8] = {
    artist: "Shania Twain",
        title: "Come On Over",
        year: 1997,
        genres: ["country", "pop"],
        sale: 40000000,
} 

//console.log (bestSellingAlbums);

bestSellingAlbums[0].iLikeIt = {
        iLikeIt: "true"
    }

console.log (bestSellingAlbums);



// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
    toExport = [
        {name: "title", content: title, type: "string"},
        {name: "author", content: author, type: "string"},
        {name: "year", content: year, type: "number"},
        {name: "isNewerThan2000", content: isNewerThan2000, type: "boolean"},
        {name: "age", content: age, type: "number"},
        {name: "characters", content: characters, type: "array"},
        {name: "favoriteBook", content: favoriteBook, type: "object"},
        {name: "favoriteBooks", content: favoriteBooks, type: "array"}
    ]
} catch (error) {
    toExport = {error: error.message}
}

export {toExport};
