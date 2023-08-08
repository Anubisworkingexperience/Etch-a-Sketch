const range = document.querySelector('.range');
const gridSizeText = document.querySelector('.gridSize');

let gridSize;

range.addEventListener('input', (event) => {
    gridSizeText.textContent = `Grid size: ${event.target.value} x ${event.target.value}`;
});


function createGrid() {
    const grid = document.querySelector('.grid');
    const rows = 5;
    const columns = 5;

    grid.style.display = 'flex';
    grid.style.flexDirection = 'column';
    grid.style.border = '2px solid black';

    function createElement(){
    const gridElement = document.createElement('span');
    gridElement.style.width = '7px';
    gridElement.style.height = '7px';
    gridElement.style.backgroundColor = 'white';
    gridElement.style.border = '2px solid black';
    gridElement.style.borderRadius = 0;
    return gridElement;
    }

   for (i = 0; i < rows; i++) {
    const elementRow = document.createElement('div');
    elementRow.style.display = 'flex';
    for (j = 0; j < columns; j++) {
        const gridElement = createElement();
        elementRow.appendChild(gridElement);
    }
    grid.appendChild(elementRow);
   }
   
}

createGrid();

