let rows = 100;
let cols = 26;

const addressColCont = document.querySelector(".address-col-cont");

for (let i = 0; i < rows; i++) {
  let addressCol = document.createElement("div");
  addressCol.setAttribute("class", "address-col");
  addressCol.innerText = i + 1;
  addressColCont.appendChild(addressCol);
}

const addressRowCont = document.querySelector(".address-row-cont");

for (let i = 0; i < cols; i++) {
  let addressRow = document.createElement("div");
  addressRow.setAttribute("class", "address-row");
  addressRow.innerText = String.fromCharCode(i + 65);
  addressRowCont.appendChild(addressRow);
}

const addressCellsCont = document.querySelector(".cells-cont");

for (let i = 0; i < rows; i++) {
  let addressRow = document.createElement("div");
  addressRow.setAttribute("class", "address-row-cells");
  for (let j = 0; j < cols; j++) {
    let addressCell = document.createElement("div");
    addressCell.setAttribute("class", "cell");
    addressCell.setAttribute("contenteditable", "true");
    addressCell.setAttribute("spellcheck", false);
    addressCell.setAttribute("rid",i);
    addressCell.setAttribute("cid",j);
    addressRow.appendChild(addressCell);
    if (i === 0 && j == 0) {
      addressCell.setAttribute("id", "selectable");
    }
    addEventListenerForAddressBarCont(addressCell, i, j);
  }
  addressCellsCont.appendChild(addressRow);
}

function addEventListenerForAddressBarCont(cell, i, j) {
  const addressBarCont = document.querySelector(".address-bar");
  if (i === 0 && j == 0) {
    addressBarCont.value = "1A";
  }
  cell.addEventListener("click", () => {
    const address =String.fromCharCode(j + 65) + (i + 1) ;
    addressBarCont.value = address;
  });
}

// For selecting first cell
const el = document.getElementById("selectable");
const selection = window.getSelection();
const range = document.createRange();
selection.removeAllRanges();
range.selectNodeContents(el);
range.collapse(false);
selection.addRange(range);
el.focus();
