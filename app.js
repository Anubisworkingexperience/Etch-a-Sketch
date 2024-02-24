const range = document.querySelector('.range');
const gridSizeText = document.querySelector('.gridSize');

let gridSize;

range.value = 10;

range.addEventListener('input', (event) => {
    gridSizeText.textContent = `Grid size: ${event.target.value} x ${event.target.value}`;
    removeGrid();
    createGrid(event.target.value, event.target.value);
    paintElements();
    Fill();
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
    const grid = document.querySelector('.grid');

    gridElements.forEach(gridElement => {
        gridElement.addEventListener("mousedown", () => {
        grid.classList.add('hold');
        paintElement(gridElement);
      });
    
    gridElement.addEventListener('mouseover', (event) => {
        if (grid.classList.contains('hold')) {
            paintElement(gridElement);
        }
    });

    grid.addEventListener('mouseup', () => {
        grid.classList.remove('hold');
    });

    document.addEventListener("mouseup", () => {
        grid.classList.remove("hold");
    });

    function paintElement(element) {
        element.style.backgroundColor = colorSelector.value;
    }
});
}

//tool selection

const colorFill = document.querySelector('.fill');
const eraser = document.querySelector('.erase');
const clear = document.querySelector('.clear');
const rainbowMode = document.querySelector('.rainbow');

const grid = document.querySelector('.grid');
const colorSelector = document.querySelector('.color');
let toolList = [];

function selectTools(tool) {
    tool.addEventListener("click", (e) => {
        let currentlySelected = toolsSelected();
        console.log(currentlySelected);
        if (tool.classList.contains('selected')) {
            tool.classList.remove('selected');
            tool.style.border = '2px solid salmon';
        }
        else {
            if (!(tool.classList.contains('selected')) && currentlySelected < 1) {
                tool.classList.add('selected');
                tool.style.border = '3px solid blue';
            }
        }
    });
}

function toolsSelected() {
    const selectedTools = document.querySelectorAll('.tool');
    let selected = 0;
    selectedTools.forEach(tool => {
        if (tool.classList.contains('selected')) {
            selected += 1;
        }
    });
    return selected;
}

selectTools(colorFill);
selectTools(eraser);
selectTools(clear);
selectTools(rainbowMode);

const body = document.querySelector('body');
const choose = document.querySelector('.choose');
const selectedTools = document.querySelectorAll('.tool');

//remove selection after clicking "Choose color" button
selectedTools.forEach(tool => {
    choose.addEventListener('click', () => {
        if (tool.classList.contains('selected')) {
            tool.classList.remove('selected');
            tool.style.border = '2px solid salmon';
        }
    });
})

//programming actual tools

function Fill() {
    const color = document.querySelector('.color');
    const colorFill = document.querySelector('.fill');
    const grid = document.querySelector('.grid');
    const gridElements = document.querySelectorAll('.gridElement');
    const choose = document.querySelector('.choose');
    const eraser = document.querySelector('.erase');
    const clear = document.querySelector('.clear');
    const rainbow = document.querySelector('.rainbow');

    function fillGrid() {
        for (const element of gridElements) {
            element.style.backgroundColor = color.value;
        }
    };

    function erase() {
        for (const element of gridElements) {
            element.addEventListener('click', () => {
                element.style.backgroundColor = 'white';
            });
        }
    };

    colorFill.addEventListener('click', () => {
        if (colorFill.classList.contains('selected')) {
            console.log('color fill selected')
            grid.addEventListener('click', fillGrid);
        }
        else {
            console.log('color fill not selected')
            grid.removeEventListener('click', fillGrid);
        }
    });

    eraser.addEventListener('click', () => {
        if (eraser.classList.contains('selected')) {
            console.log('eraser selected')
            grid.addEventListener('click', erase);
        }
        else {
            console.log('eraser not selected')
            grid.removeEventListener('click', erase);
        }
    });

    
}

Fill();



