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
