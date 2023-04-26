const container = document.querySelector('.container');


const sizeOfTheGrid = 24;

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
}

createGrid(sizeOfTheGrid)