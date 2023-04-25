const mainContainer = document.querySelector(".main");

function changeSize(size) {
    document.querySelectorAll('.row').forEach(e => e.remove());


    for (let i = 0; i<size; i++) {
        newRow = document.createElement('div');
        newRow.classList.add('row');
    
        for (let j = 0; j<size; j++) {
            newGrid = document.createElement('div');
            newGrid.classList.add("grid");
            newRow.appendChild(newGrid);
        }
        
        mainContainer.appendChild(newRow);
    }

    allGrids = document.querySelectorAll('.grid');
    allGrids.forEach( (grid) => {
    grid.addEventListener("mouseover", () => {
        grid.classList.add('black');
    });
});

}

changeSize(16);


button = document.querySelector('button');
button.addEventListener("click", ()=> {
    size = parseInt(prompt("Enter a new size"));
    changeSize(size);
})