//                              Linking elements to variables.
const container = document.querySelector('.container');
const changeGridSizeButton = document.querySelector('.change-grid-size-button');
const clearGridButton = document.querySelector('.clear-grid-button');
const gridCubesArray = document.getElementsByClassName('grid-cube');
const rgbColorButton = document.querySelector('.rgb-color-button');
const blackColorButton = document.querySelector('.black-color-button');


//                              Adding event listeners to elements.
// Prompts the user for the grid size.
changeGridSizeButton.addEventListener('click', ()=> {
    sizeOfTheGrid = askForGridSize();
    container.innerHTML = '';
    createGrid(sizeOfTheGrid);
});

clearGridButton.addEventListener('click', clearGrid );


//                                      Global variables
// Default grid size
let sizeOfTheGrid = 16;


//                                      Creating functions.
// Function that creates the grid.

function createGrid(sizeOfTheGrid) {
    for(let i = 0; i < sizeOfTheGrid; i++){
        let row = document.createElement('div');
        row.classList.add('grid-row');
        
        for(let j = 0; j < sizeOfTheGrid; j++){
            let widthAndHeight = 650 / sizeOfTheGrid;
            let gridCube = document.createElement('div');
            gridCube.classList.add('grid-cube');
            gridCube.style.width = `${widthAndHeight}px`;
            gridCube.style.height = `${widthAndHeight}px`;
            // Functions that changes the color of the cube when hover over.
            const paintCubesBlack = () => {
                gridCube.style.backgroundColor = 'black';
            }
            const paintCubesRGB = () => {
                let randomNumber1 = Math.floor(Math.random() * 255);
                let randomNumber2 = Math.floor(Math.random() * 255);
                let randomNumber3 = Math.floor(Math.random() * 255);
                gridCube.style.backgroundColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
            }
            gridCube.addEventListener('mouseenter', paintCubesBlack)
            rgbColorButton.addEventListener('click', () => {
                gridCube.addEventListener('mouseenter', paintCubesRGB);
            })
            blackColorButton.addEventListener('click', () => {
                gridCube.addEventListener('mouseenter', paintCubesBlack);
                gridCube.removeEventListener('mouseenter', paintCubesRGB);
            })
            row.appendChild(gridCube);
        }
        container.appendChild(row);
    }
} createGrid(sizeOfTheGrid);

// Function that asks for the grid size when the buttons is pressed.
function askForGridSize() {
    let userAnswer = prompt('How big would you like the grid to be?');
    let emptyString = '';
    if (userAnswer > 100 || userAnswer === 0 || userAnswer < 0) {
        alert('The number can\'t be greater than 100 or equal or lower than 0.');
        return userAnswer = 16;
    } else if (isNaN(userAnswer)) {
        alert('Not a valid value, use only numbers.');
        return userAnswer = 16;
    } else if (userAnswer === null) {
        return userAnswer = 16;
    } else if (userAnswer === emptyString) {
        return userAnswer = 16;
    } else { 
        return userAnswer;
    }
}
// Function that clears the grid resetting the background color back to white.
function clearGrid() {
    Array.from(gridCubesArray).forEach(cube => {
        cube.style.backgroundColor = 'white';
    })
}

