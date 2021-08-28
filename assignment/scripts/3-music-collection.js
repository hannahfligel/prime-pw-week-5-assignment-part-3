// Create a variable `collection` that starts as an empty array.
let collection = [];
// Add a function named `addToCollection`. This function should: 
// Take in the album's `title`, `artist`, `yearPublished` as input parameters
function addToCollection(title, artist, yearPublished){
    // Create a new object having the above properties
    let album = { 
        // TODO - add properties here
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    //  Add the new object to the end of the `collection` array
    collection.push(album);
    //  Return the newly created object
    return album;
}// fucntion end 

// Test the `addToCollection` function:
// Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//  Console.log each album as added using the returned value.
console.log(addToCollection('Happier Than Ever', 'Billie Eilish', 2021));
console.log(addToCollection('When We All Fall Asleep, Where Do We Go?', 'Billie Eilish', 2019));
console.log(addToCollection('Apricot Princess', 'Rex Orange County', 2017));
console.log(addToCollection('Abbey Road', 'The Beatles', 1969));
console.log(addToCollection('Back to Black', 'Amy Winehouse', 2006));
console.log(addToCollection('OK Computer', 'Radiohead', 1997));
//  After all are added, console.log the `collection` array.
console.log(collection);

// Add a function named `showCollection`. This function should:
// Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
function showCollection(array){
//  Console.log the number of items in the array.
    console.log("Number of albums:", array.length); 
    //Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
    for(let i=0; i<array.length; i++){
    console.log(array[i].title,"by", array[i].artist, "published in", array[i].yearPublished);
    }
}
// Test the `showCollection` function.
showCollection(collection);

//Add a function named `findByArtist`. This function should:
//Take in `artist` (a string) parameter
function findByArtist(artist){
// Create an array to hold any results, empty to start
    let matches=[]; 
    // Loop through the `collection` and add any objects with a matching artist to the array.
    for (let i=0; i<collection.length; i++){
        if( artist === collection[i].artist ){
            matches.push( collection[i] );
        } // end match
    // Return the array with the matching results. If no results are found, return an empty array.
    }//end function
    return matches;
}

console.log(findByArtist('The Beatles'));
console.log(findByArtist('Billie Eilish'));
console.log(findByArtist('Simon and Garfunkel'));
console.log(findByArtist('Lizzo'));






// Create a function called `search` and the argument of 'input'. 
function search(input){
    // if input equals "undefined" (no value is assigned to input), or if an empty object was passed (yay for the internet!), return all albums in the collection.
    if(input === undefined || Object.keys(input).length === 0 ){
    return console.log(collection);
    }//end if 

//create an empty array and call it 'matches' in order to store all the user entered matches.
    let matches = [];
    //create a for loop to loop through the collection and push each match into the new array 
    for (let i=0; i<collection.length; i++){
        if( input.artist === collection[i].artist && input.year === collection[i].yearPublished ){
            matches.push( collection[i] );
        }
    }
    //return matches
    return console.log("Matches in Collection:", matches);
}//end function

search();
search({ artist: 'Billie Eilish', year: 2021 });
search({ artist: 'Finneas', year: 2020 });
search({});




// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```

