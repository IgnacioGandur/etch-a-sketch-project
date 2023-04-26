// Linking elements to variables.
const container = document.querySelector('.container');
const chooseSizeButton = document.querySelector('.choose-size-button');
const shakeScreenButton = document.querySelector('.shake-screen-button');
const gridSquaresArray = document.getElementsByClassName('grid-cube');
// Adding event listeners to elements.

chooseSizeButton.addEventListener('click', ()=> {
    sizeOfTheGrid = askForGridSize();
    container.innerHTML = '';
    createGrid(sizeOfTheGrid);
});

shakeScreenButton.addEventListener('click', () => {
    Array.from(gridSquaresArray).forEach(cube => {
        cube.style.backgroundColor = 'white';
    })
})

// Creating functions.

let sizeOfTheGrid = 16;

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
            // Function that changes the color of the cube when hover over.
            gridCube.addEventListener('mouseenter', () => {
                gridCube.style.backgroundColor = 'black';
            })
            row.appendChild(gridCube);
        }
        container.appendChild(row);
    }
} createGrid(sizeOfTheGrid);

// Function that asks for the grid size when the buttons is pressed.
function askForGridSize() {
    let userAnswer = prompt('How big would you like the grid to be?');
    if (userAnswer > 100) {
        alert('The number can\'t be greater than 100.');
        return userAnswer = 16;
    } else if (isNaN(userAnswer)) {
        alert('Not a valid value, use numbers.');
        return userAnswer = 16;
    }
     else { 
        return userAnswer;
    }
}
