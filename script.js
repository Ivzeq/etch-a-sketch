function createFlexDiv(rowsxcolumns){
    for (let rowCounter = 0; rowCounter < rowsxcolumns; rowCounter++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.display = 'flex';
        row.style.flex = '1';
        container.appendChild(row)
        
        for (let columnCounter = 0; columnCounter < rowsxcolumns; columnCounter++) {
            const div = document.createElement('div');
            div.classList.add('square-div');
            row.appendChild(div);
            div.style.border = '1px solid'  
            div.style.flex = '1';
            div.addEventListener('mouseover', function () {
                div.classList.add('hovered');
            })
        }
    }
}

function restartGrid(){
    while (container.firstChild) {
        container.firstChild.remove();
    }
    createFlexDiv(getNumber());
}

function getNumber(){
    let rowxcolumn = prompt('Enter number of squares per side for grid up to 100');
    let whileBuffer = true;

    while (true) {
        if (rowxcolumn*1) {
            if (rowxcolumn<100 && rowxcolumn>0) {
                break
            }
        }
        rowxcolumn = prompt('Invalid Value! Enter number of squares per side for grid up to 100');
    }
    return rowxcolumn
}

const container = document.querySelector('#general-container');
container.style.display = 'flex';
container.style.flexDirection = 'column'
container.style.height = '70vh'
container.style.width = '70vh'
container.style.border = '1px solid' 

const restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', restartGrid);

createFlexDiv(getNumber());