// Linking DOM elements.
const titleScreenContainer = document.querySelector('.title-screen-container');
const title = document.querySelector('.welcome-title');
let appContainer = document.querySelector('.app-container');
let sketchScreen = document.querySelector('.sketch-screen');
let singlePixel = document.getElementsByClassName('pixel');



// Functions
// Function that replaces screen of the beginning.
function replaceTitleScreen() {
    titleScreenContainer.replaceWith(appContainer);
    titleScreenContainer.style.visibility = 'visible';
    appContainer.style.display = 'flex';
}
setTimeout(replaceTitleScreen, 3200);

// Functioning of the app
// Function that creates the grid of 16*16.
function createGridOfPixels16() {
    let pixelsToAdd16 = '';
    let numberOfPixels = 256;

    for(let i = 0; i < numberOfPixels; i++) {
        pixelsToAdd16 += '<div class="pixel"></div>';
    }   
    sketchScreen.innerHTML = pixelsToAdd16;
} createGridOfPixels16();

// Function that creates the grid of 32*32.
function createGridOfPixels32() {
    let pixelsToAdd32 = ''; 
    let numberOfPixels = 1055
    for(let i = 0; i < numberOfPixels; i++) {
        pixelsToAdd32 += "<div class='pixel32'></div>";
    }
    sketchScreen.innerHTML = '';
    sketchScreen.innerHTML = pixelsToAdd32;
} 


/*create a loop that creates certain amount of divs to fill
the screen "container"

256 div blocks to represent pixels, each of 37 pixels.


Create an animation coming from the top of the top of the screen
with the app that has written "draw something cool" in the screen
that vanishes when the mouse enters the "sketchScreen".

*/
