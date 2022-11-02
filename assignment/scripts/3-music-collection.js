console.log('***** Music Collection *****')
let collection = [];

    function AddToCollection(title, artist, yearPublished){
        record = {title, artist, yearPublished};
        this.title = collection.title;
        this.artist = collection.artist;
        this.yearPublished = collection.yearPublished;
        collection.push({record});
        return record
    }

    let nirvana = new AddToCollection('Nevermind', 'Nirvana', 1991);
    let tori = new AddToCollection('Under the Pink', 'Tori Amos', 1994);
    let trent = new AddToCollection('Broken', 'Nine Inch Nails', 1992);
    let glassAnimals = new AddToCollection('Dreamland', 'Glass Animals', 2020);
    let metric = new AddToCollection('Fantasies', 'Metric', 2009);
    let taylor = new AddToCollection('Folklore', 'Taylor Swift', 2020);





console.log('My record collection includes: ', collection);

    
//     title = 'Under the Pink',
//     artist = 'Tori Amos',
//     yearPublished = 1994
//     return title + (' - ') + artist + (' - ') + yearPublished
    
// } // end addToCollection function


// console.log('Add this album to my Collection ' ,addToCollection('Nevermind', 'Nirvana', 1991));
// console.log('Add this album to my Collection ' ,addToCollection('', '', 1991));
// console.log('Add this album to my Collection ' ,addToCollection('', '', 1991));
// console.log('Add this album to my Collection ' ,addToCollection('', '', 1991));
// console.log('Add this album to my Collection ' ,addToCollection('', '', 1991));





// console.log(collection.concat(addToCollection('Nevermind', 'Nirvana', 1991), ('God', 'Tori Amos', 1994), ));

