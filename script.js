function createFlexDiv(rowsxcolumns){
    container.style.display = 'flex';
    container.style.flexDirection = 'column'
    container.style.height = '60vh'
    container.style.width = '60vh'

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
            div.style.border = '1px solid red'  
            div.style.flex = '1';
        }
    }
}

const container = document.querySelector('#general-container');

createFlexDiv(16);