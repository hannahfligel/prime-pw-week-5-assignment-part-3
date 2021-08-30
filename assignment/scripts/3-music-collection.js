// Create a variable `collection` that starts as an empty array.
let collection = [];
// Add a function named `addToCollection`. This function should: 
// Take in the album's `title`, `artist`, `yearPublished` as input parameters
function addToCollection(title, artist, yearPublished, tracks){
    // Create a new object having the above properties
    let album = { 
        // TODO - add properties here
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    }
    //  Add the new object to the end of the `collection` array
    collection.push(album);
    //  Return the newly created object
    return album;
}// fucntion end 

// Test the `addToCollection` function:
// Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//  Console.log each album as added using the returned value.
console.log(addToCollection('Happier Than Ever', 'Billie Eilish', 2021, [{name:"Getting Older", duration:"4:04"},{name:"Billie Bossa Nove", duration: "3:17"},{name:"Oxytocin",duration:"3:30"}]));

console.log(addToCollection('When We All Fall Asleep, Where Do We Go?', 'Billie Eilish', 2019, [{name:"My Strange Addiction",duration:"3:00"},{name:"Bad Guy",duration:"3:13"},{name:"Bury a Friend",duration:"3:13"}]));

console.log(addToCollection('Apricot Princess', 'Rex Orange County', 2017, [{name:"Apricot Princess", duration:"3:59"},{name:"Nothing", duration:"4:53"},{name:"Happiness", duration:"4:40"}]));

console.log(addToCollection('Abbey Road', 'The Beatles', 1969, [{name:"Come Together", duration:"4:19"}, {name:"Here Comes the Sun", duration:"3:06"}, {name:"Oh! Darling",duration:"3:27"}]));

console.log(addToCollection('Back to Black', 'Amy Winehouse', 2006, [{name:"Rehab",duration:"3:44"},{name:"You Know I'm no Good",duration:"4:17"},{name:"Me & Mr Jones",duration:"2:49"}]));

console.log(addToCollection('OK Computer', 'Radiohead', 1997, [{name:"Airbag",duration:"4:44"},{name:"Let Down",duration:"4:59"},{name:"Climbing Up the Walls",duration:"4:45"}]));
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
    if(input === undefined){
        return console.log(collection);
    }//end if 


//create an empty array and call it 'matches' in order to store all the user entered matches.
    let matches = [];
    //create a for loop to loop through the collection and push each match into the new array 
    if( typeof input === 'string'){
        for( let i=0; i<collection.length; i++){
            for(let j=0; j<collection[i].tracks.length; j++){
                if(input===collection[i].tracks[j].name){
                    matches.push({
                        artist: collection[i].artist, 
                        title: collection[i].title, 
                        track: collection[i].tracks[j].name
                    });
                }
            }
        }//end for loop

        if(matches.length===0){
            return console.log(matches);
        }
        else {
            for( let i=0; i<matches.length; i++ ){
                console.log(matches[i]);
            }   
        }
    }//end if 

    else {
        if(Object.keys(input).length === 0){
            return console.log (collection);
        }
        else {
            for (let i=0; i<collection.length; i++){
                if(input.artist === collection[i].artist && input.yearPublished === collection[i].yearPublished){
                    matches.push(collection[i]);
                }
            }//end for loop
        }//end else 
        
        if(matches.length===0){
            return console.log(matches);
        }
        else {
            for( let i=0; i<matches.length; i++ ){
                console.log(matches[i]);
            }
        }
    }
}//end function

search();
search({});
search({artist:"Billie Eilish", yearPublished:2021});
search({artist:"Brittney", yearPublished:2020});
search("Come Together");
search("Bla");