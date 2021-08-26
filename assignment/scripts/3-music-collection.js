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
    console.log(array.length);
    //   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
    for(let i=0; i<array.length; i++){
    console.log(collection[i].title,"title by", collection[i].artist, "published in", collection[i].year);
    }
}
// - Test the `showCollection` function.
showCollection(collection);
// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
function findByArtist(artist){
//   - Create an array to hold any results, empty to start
results=[];
//   - Loop through the `collection` and add any objects with a matching artist to the array.
for( let i=0; i<collection.length; i++ ){
    collection++
    }//end for loop
//   - Return the array with the matching results. If no results are found, return an empty array.
    return 
}//end function 
// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found