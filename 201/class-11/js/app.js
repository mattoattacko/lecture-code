'use strict';

var numImages = 5;
var maxVotes = 25;
var voteTotal = 0;
var lastSet = {};
var thisSet = {};

var imageContainer = document.getElementById('pictures');

// Picture Contructor
var Picture = function(filePath, name) {
    this.filePath = filePath;
    this.name = name;
    this.views = 0;
    this.clicks = 0;
    Picture.allPictures.push(this);
};

Picture.allPictures = [];

function setupPictures() {
    new Picture('assets/bag.jpg', 'Bag');
    new Picture('assets/banana.jpg', 'Banana');
    new Picture('assets/bathroom.jpg', 'Bathroom');
    new Picture('assets/boots.jpg', 'Boots');
    new Picture('assets/breakfast.jpg', 'Breakfast');
    new Picture('assets/bubblegum.jpg', 'Bubblegum');
    new Picture('assets/chair.jpg', 'Chair');
    new Picture('assets/cthulhu.jpg', 'Cthulhu');
    new Picture('assets/dog-duck.jpg', 'Dog-Duck');
    new Picture('assets/dragon.jpg', 'Dragon');
    new Picture('assets/pen.jpg', 'Pen');
    new Picture('assets/pet-sweep.jpg', 'Pet Sweep');
    new Picture('assets/scissors.jpg', 'Scissors');
    new Picture('assets/shark.jpg', 'Shark');
    new Picture('assets/sweep.png', 'Sweep');
    new Picture('assets/tauntaun.jpg', 'Taun-Taun');
    new Picture('assets/unicorn.jpg', 'Unicorn');
    new Picture('assets/usb.gif', 'USB');
    new Picture('assets/water-can.jpg', 'Water Can');
    new Picture('assets/wine-glass.jpg', 'Wine Glass');
}

function renderImageTags() {

    for( var i=1; i <= numImages; i++ ) {
        var card = document.createElement('div');
            card.classList.add('card');
        var figure = document.createElement('figure');
        var figcaption = document.createElement('figcaption');
        var image = document.createElement('img');
            image.id = 'picture' + i;

        figure.appendChild(image);
        figure.appendChild(figcaption);
        card.appendChild(figure);
        imageContainer.appendChild(card);

    }
}

function showRandomPictures(n) {

    // Reset the current grouping log
    thisSet = {};

    for( var i = 1; i <= n; i++ ) {
        var imageId = "picture" + i;
        var imageElement = document.getElementById(imageId);
        var caption = imageElement.nextElementSibling;
        if ( imageElement ) { 
            insertRandomImage(imageElement, caption);
        }
    }

    // Save this current set for later, so that we don't repeat between reloads
    lastSet = thisSet;

}

function insertRandomImage(image,caption) {

    var shown = false;

    while( ! shown ) { 
        var n = Math.floor(Math.random() * Picture.allPictures.length);
        if ( ! thisSet[n] && ! lastSet[n] ) {
            Picture.allPictures[n].views++;
            image.src = Picture.allPictures[n].filePath;
            image.alt = Picture.allPictures[n].name;
            caption.textContent = Picture.allPictures[n].name;
            thisSet[n] = true;
            shown = true;
        }
    }
}

function handleImageClick(event) {

    var imageName = event.target.alt;

    updateVoteCount(imageName);

    if( voteTotal >= maxVotes ) { 
        finish(); 
    }
    else {
        showRandomPictures(3);
    }
}

function updateVoteCount(imageName) {

    for( var i = 0; i<Picture.allPictures.length; i++ ) { 
        if ( Picture.allPictures[i].name === imageName ) { 
            Picture.allPictures[i].clicks++;
        }
    }

    voteTotal++;
}

function toggleEventListener() {

    if ( voteTotal >= maxVotes ) { 
        imageContainer.removeEventListener('click', handleImageClick);
    } else {
        imageContainer.addEventListener('click', handleImageClick);
    }
}

function showTotals() {

    var totalsList = document.getElementById("totals");

    // Sort by CTR
    var reportData = Picture.allPictures;
    reportData.sort( 
        function(a,b ) { 
            return (b.clicks/b.views) - (a.clicks/a.views); 
        } 
    );

    // For each picture, create a new LI and append it to the UL 
    // ** if it has at least 1 view (otherwise, it's irrelevant)
    for( var i = 0; i < reportData.length; i++ ) { 
        if ( reportData[i].views ) {
            var pct = Math.round( (reportData[i].clicks / reportData[i].views) * 100 );
            var li = document.createElement("li");
                li.textContent = "CTR: " + pct + "% (" + reportData[i].views + "views" +
                                 " / " + reportData[i].clicks + " clicks): " +
                                 reportData[i].name;
            totalsList.appendChild(li);
        }
    }

    document.getElementById("pictures").classList.add("hidden");
    document.getElementById("totals").classList.remove("hidden");
}

function finish() {
    toggleEventListener();
    showTotals();
}

// Create the picture list
setupPictures();

// Create image elements
renderImageTags();

// Turn on the event listener
toggleEventListener();

// Do the first randomization
showRandomPictures(numImages);