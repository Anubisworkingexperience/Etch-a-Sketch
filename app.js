const range = document.querySelector('.range');
const gridSizeText = document.querySelector('.gridSize');

let gridSize;

range.addEventListener('input', (event) => {
    gridSizeText.textContent = `${event.target.value} x ${event.target.value}`;
});


function generateGrid() {
    
}

