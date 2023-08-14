const range = document.querySelector('.range');
const gridSizeText = document.querySelector('.gridSize');

let gridSize;

range.value = 10;

range.addEventListener('input', (event) => {
    gridSizeText.textContent = `Grid size: ${event.target.value} x ${event.target.value}`;
    removeGrid();
    createGrid(event.target.value, event.target.value);
    paintElements();
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
    gridElement.style.border = 'none';
    gridElement.style.borderRadius = 0;
    gridElement.classList.add('gridElement');
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

paintElements();

function paintElements() {
    const gridElements = document.querySelectorAll('.gridElement');
    const colorSelector = document.querySelector('.color');
    

    for (element of gridElements) {
        // let isHeld = false;

        // element.addEventListener('click', (event) => {
        //     event.target.style.backgroundColor = colorSelector.value;
        // });
        element.addEventListener('mousedown', (event) => {
                event.target.style.backgroundColor = colorSelector.value;
        });
        
    }
}

//programming tools

//tool selection

const colorFill = document.querySelector('.fill');
const eraser = document.querySelector('.erase');
const clear = document.querySelector('.clear');
const rainbowMode = document.querySelector('.rainbow');

const grid = document.querySelector('.grid');
const colorSelector = document.querySelector('.color');
let toolsSelected = 0;
let toolList = [];

grid.addEventListener('mouseover', (event) => {
    document.body.style.cursor = 'url(./images/art-and-design.png), auto';
});

function selectTools(tool) {
    let isNotSelected = true;
    toolList.push(tool);

    tool.addEventListener('click', (event) => {
        isNotSelected = true;
        if (isNotSelected) {
            tool.classList.add('selected');
            toolsSelected += 1;
            isNotSelected = false;
            // if (tool ===)
        }
        else {
            tool.classList.remove('selected');
            toolsSelected -= 1;
            isNotSelected = true;
        }
        if (toolsSelected > 1) {
            for (item of toolList) {
                if (item.classList.contains('selected') && item != tool) {
                    item.classList.remove('selected');
                    toolsSelected -= 1;
                    isNotSelected = true;
                }
            }
        }
        console.log(toolsSelected);
    });
}

selectTools(colorFill);
selectTools(eraser);
selectTools(clear);
selectTools(rainbowMode);



