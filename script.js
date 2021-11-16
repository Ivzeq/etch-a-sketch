function createFlexDiv(rowsxcolumns, side){
    const flexContainer = document.createElement('div');
    flexContainer.setAttribute('id', 'flexContainer');
    container.appendChild(flexContainer)

    flexContainer.style.display = 'flex';
    flexContainer.style.flex = '1'; 
    flexContainer.style.justifyContent = 'center';

    for (let rowCounter = 0; rowCounter < rowsxcolumns; rowCounter++) {
        const row = document.createElement('div');
        row.classList.add('row');
        flexContainer.appendChild(row)
        
        for (let columnCounter = 0; columnCounter < rowsxcolumns; columnCounter++) {
            const div = document.createElement('div');
            div.classList.add('square-div');
            row.appendChild(div);
            div.style.width = side +'px';
            div.style.height = side +'px';
            div.style.border = '1px solid red'
        }

    }
}


function createGridDiv(rowsxcolumns, side){
    const gridContainer = document.createElement('div');
    gridContainer.setAttribute('id', 'gridContainer');
    container.appendChild(gridContainer);
    gridContainer.style.display = 'grid';

    for (let columnCounter = 0; columnCounter < rowsxcolumns; columnCounter++) {
        const div = document.createElement('div');
        div.classList.add('square-div');
        gridContainer.appendChild(div);
        gridContainer.style.gridGap = '0px';


        div.style.width = side +'px';
        div.style.height = side +'px';
        div.style.border = '1px solid red'
    }
}   

const body = document.querySelector('body');
const container = document.querySelector('#general-container');

body.style.minWidth = '100vh';
body.style.minHeight = '100vh';
body.style.display = 'flex';
body.style.alignItems = 'center'

container.style.display = 'flex';
container.style.flex = '1';
container.style.justifyContent = 'center';

createFlexDiv(16,10);