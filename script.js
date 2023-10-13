let rows =100;
let cols = 26;

const addressColCont = document.querySelector('.address-col-cont');

for(let i=0;i<rows;i++){
    let addressCol = document.createElement("div");
    addressCol.setAttribute("class", "address-col");
    addressCol.innerText = i+1;
    addressColCont.appendChild(addressCol);
}

const addressRowCont = document.querySelector('.address-row-cont');

for(let i=0;i<cols;i++){
    let addressRow = document.createElement("div");
    addressRow.setAttribute("class", "address-row");
    addressRow.innerText = String.fromCharCode(i+65) ;
    addressRowCont.appendChild(addressRow);
}

const addressCellsCont = document.querySelector('.cells-cont');


for(let i=0;i<rows;i++){
    let addressRow = document.createElement("div");
    addressRow.setAttribute("class", "address-row-cells");
    for(let j=0;j<cols;j++){
        let addressCell = document.createElement("div");
        addressCell.setAttribute("class", "cell");
        addressCell.setAttribute("contenteditable","true");
        addressRow.appendChild(addressCell);

        console.log("here");
    }

    addressCellsCont.appendChild(addressRow);
}