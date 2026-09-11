function createGrid(sideNumber) {
    const container = document.querySelector(".container");
    let totalSquares = sideNumber ** 2;
    let squaresSize = 960 / sideNumber;

    for(let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.height = `${squaresSize}px`;
        square.style.width = `${squaresSize}px`;
        square.style.border = '1px solid #37F026';
        container.appendChild(square);
    }
}

createGrid(16);