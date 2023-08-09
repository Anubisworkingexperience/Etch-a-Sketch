const range = document.querySelector('.range');
const gridSizeText = document.querySelector('.gridSize');

let gridSize;

range.value = 10;

range.addEventListener('input', (event) => {
    gridSizeText.textContent = `Grid size: ${event.target.value} x ${event.target.value}`;
    removeGrid();
    createGrid(event.target.value, event.target.value);
});


function createGrid(rows, columns) {
    const grid = document.querySelector('.grid');
    const tools = document.querySelector('.tools');

    grid.style.display = 'flex';
    grid.style.flexDirection = 'column';
    grid.style.border = '4px solid red';
    grid.style.height = '600px';
    grid.style.width = '600px';

    function createElement(){
    const gridElement = document.createElement('span');
    gridElement.style.padding = 0;
    gridElement.style.width = `${600 / columns}px`;
    gridElement.style.height = `${600 /rows}px`;
    gridElement.style.backgroundColor = 'white';
    gridElement.style.border = '2px solid black';
    gridElement.style.borderRadius = 0;
    return gridElement;
    }

   for (i = 0; i < rows; i++) {
    const elementRow = document.createElement('div');
    elementRow.classList.add('row');
    elementRow.style.display = 'flex';;
    for (j = 0; j < columns; j++) {
        const gridElement = createElement();
        elementRow.appendChild(gridElement);
    }
    grid.appendChild(elementRow);
   }
   
}

function removeGrid () {
    const grid = document.querySelector('.grid');
    const rows = document.querySelectorAll('.row');
    for (child of rows) {
        grid.removeChild(child);
    }
    
}

createGrid(10, 10);

