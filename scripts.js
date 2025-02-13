const container = document.querySelector('.grid-container');

function createGrid(numOfBoxes) {
    for (let i = 0; i < numOfBoxes; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        container.appendChild(gridRow);
        for (let i = 0; i < numOfBoxes; i++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.addEventListener('mouseover', () => {
                gridBox.style.backgroundColor = boxColorChanger();
            });
            gridRow.appendChild(gridBox);
        };
    };
};

createGrid(16);

function getPlayerInput() {
    let numOfBoxes = prompt('How many squares do you want your grid? (The max is 100)');
    numOfBoxes = parseInt(numOfBoxes);
    if (numOfBoxes <= 100 && numOfBoxes > 0) {
        createGrid(numOfBoxes);
    } else {
        alert('Error... try again.');
    };
};

const setGridBtn = document.querySelector('.set-grid-btn');

setGridBtn.addEventListener('click', () => {
   container.innerHTML = '';
   getPlayerInput();
});

function boxColorChanger() {
    let rbgValue = [];
    let newColorValue;

    for (let i = 0; i < 3; i++) {
        let randomColorValue = Math.floor(Math.random() * 256);
        rbgValue.push(randomColorValue);
    };

    newColorValue = rbgValue.join(', ');
 
    return `rgb(${newColorValue})`;
};