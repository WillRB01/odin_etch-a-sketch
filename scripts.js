const container = document.querySelector('.grid-container');

function createGrid(numOfBoxes) {
    for (let i = 0; i < numOfBoxes; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        container.appendChild(gridRow);
        for (let i = 0; i < numOfBoxes; i++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridRow.appendChild(gridBox);
        };
    };
 };

 createGrid(16);