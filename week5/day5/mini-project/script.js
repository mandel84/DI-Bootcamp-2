const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FFF333', '#33FFF3', '#FF33A2', '#A2FF33', '#3333FF', '#FF5733', '#57FF33', '#5733FF', '#FF33F3', '#33FFF5', '#FF5733', '#33FF57'];

function createColorPalette() {
    const colorPalette = document.getElementById('colorPalette');
    colors.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color';
        colorDiv.style.backgroundColor = color;
        colorDiv.addEventListener('click', () => {
            currentColor = color;
        });
        colorPalette.appendChild(colorDiv);
    });
}

function createDrawingBoard() {
    const drawingBoard = document.getElementById('drawingBoard');
    for (let i = 0; i < 400; i++) { // 20x20 grid
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.addEventListener('mousedown', () => {
            isDrawing = true;
            cell.style.backgroundColor = currentColor;
        });
        cell.addEventListener('mouseover', () => {
            if (isDrawing) {
                cell.style.backgroundColor = currentColor;
            }
        });
        drawingBoard.appendChild(cell);
    }
}

function clearDrawingBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = '#fff';
    });
}

let currentColor = '#000';
let isDrawing = false;

createColorPalette();
createDrawingBoard();

document.body.addEventListener('mouseup', () => {
    isDrawing = false;
});

document.getElementById('clearBoard').addEventListener('click', clearDrawingBoard);
