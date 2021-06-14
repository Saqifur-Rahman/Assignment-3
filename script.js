let numRows = 0;
let numCols = 0;
let colorSelected; 

//Adds a row
function addR() {

    alert("Clicked Add Row")
    
    // check if columns = 0
    if(numCols == 0)
        numCols++

    // insert row
    var row = grid.insertRow() 
    grid.appendChild(row);

    // insert cells
    for (var i = 0; i < numCols; i++) {
        // Add Cell 
        var newCell = row.insertCell(i); 
        var newText = document.createTextNode('CELL'); 
        newCell.appendChild(newText);
    }
    numRows++;

}

//Adds a column
function addC() {

    alert("Clicked Add Col")

    // check if rows = 0
    if(numRows == 0) {
        return addR()
    }
    
    // insert cells
    // outer loop - columns
    for (var i = numCols++; i < numCols; i++) {
        // inner loop - rows
        for (var j=0; j < numRows; j++) {
            // Add Cell 
            var newCell = grid.rows[j].insertCell(i); 
            var newText = document.createTextNode('CELL'); 
            newCell.appendChild(newText);
        }
    }

}

//Removes a row
function removeR() {

    alert("Clicked Remove Row")

    // if numRows = 0
    if(numRows == 0) {
        return alert("No rows to remove!")
    }

    // delete row
    grid.deleteRow(numRows-1)
    numRows--

}

//Remove a column
function removeC() {

    alert("Clicked Remove Col")

    // if numRows = 0
    if(numCols == 0) {
        return alert("No comlumns to remove!")
    }

    for(var i=0; i < numRows; i++) {
        grid.rows[i].deleteCell(numCols-1)
    }
    numCols--
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}