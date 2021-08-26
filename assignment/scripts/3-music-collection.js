// console.log('***** Music Collection *****')
// - Create a variable `collection` that starts as an empty array.
let collection = [];
// - Add a function named `addToCollection`. This function should: 
function addToCollection(title, artist, yearPublished){
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
let album = {
    // TODO - add properties here
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
//   - Add the new object to the end of the `collection` array
collection.push(album);
//   - Return the newly created object
return album;
}// fucntion end 
// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
console.log(addToCollection('Happier Than Ever', 'Billie Eilish', 2021));
console.log(addToCollection('When We All Fall Asleep, Where Do We Go?', 'Billie Eilish', 2019));
console.log(addToCollection('Apricot Princess', 'Rex Orange County', 2017));
console.log(addToCollection('Abbey Road', 'The Beatles', 1969));
console.log(addToCollection('Back to Black', 'Amy Winehouse', 2006));
console.log(addToCollection('OK Computer', 'Radiohead', 1997));
//   - After all are added, console.log the `collection` array.
console.log(collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
function showCollection(array){
//   - Console.log the number of items in the array.
    console.log("Number of albums:", collection.length);
    //   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
    for(let i=0; i<collection.length; i++){
    console.log(collection[i].title,"by", collection[i].artist, "published in", collection[i].yearPublished);
    }
}
// - Test the `showCollection` function.
showCollection();



// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
function findByArtist(artist){
//   - Create an array to hold any results, empty to start
    matches=[];
    //   - Loop through the `collection` and add any objects with a matching artist to the array.
    for (let i=0; i<collection.length; i++){
        if( artist === collection[i].artist ){
            matches.push( collection[i] );
        } // end match
    //   - Return the array with the matching results. If no results are found, return an empty array.
    }//end function
    return matches;
}

console.log(findByArtist('The Beatles'));
console.log(findByArtist('Billie Eilish'));
console.log(findByArtist('Simon and Garfunkel'));
console.log(findByArtist('Lizzo'));




// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

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