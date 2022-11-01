console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished){
    return title + (' - ') + artist + (' - ') + yearPublished
} // end addToCollection function


console.log('Add this album to my Collection ' ,addToCollection('Nevermind', 'Nirvana', 1991));




console.log(collection.push(addToCollection));