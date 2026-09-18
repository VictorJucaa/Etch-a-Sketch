function createRandomColorChannel() {
    return Math.floor(Math.random() * 256);
}

function createGrid(sideNumber) {
    const container = document.querySelector(".container");
    let totalSquares = sideNumber ** 2;
    let squaresSize = 960 / sideNumber;

    for(let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.height = `${squaresSize}px`;
        square.style.width = `${squaresSize}px`;
        square.dataset.opacity = '0';

        square.addEventListener('mouseenter', (hover) => {
            let opacitySquare = Number(square.dataset.opacity);

            if(opacitySquare >= 1.0) {
                return;
            }
            const createColor = `rgb(${createRandomColorChannel()}, ${createRandomColorChannel()}, ${createRandomColorChannel()})`;
            //square.style.backgroundColor = 'black';
            square.style.backgroundColor = createColor;
            opacitySquare += 0.1;
            square.dataset.opacity = opacitySquare;
            square.style.opacity =opacitySquare;
        })

        container.appendChild(square);
    }
}

createGrid(16);

button.addEventListener('click', () => {
    let input = prompt("Resize the grid: ");
    if(input === null) {
        return;
    }
    
    let newValue = Number(input);

    if(!(Number.isInteger(newValue)) || newValue <= 0 || newValue > 100) {
        alert("Invalid number!");
    } else {
        container.innerHTML = "";
        createGrid(newValue);
    }
});