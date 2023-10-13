let sheetDB = [];

for (let i = 0; i < rows; i++) {
  let sheetRow = [];
  for (let j = 0; j < cols; j++) {
    let cellProp = {
      bold: false,
      italic: false,
      underline: false,
      alignment: "left",
      fontFamily: "monospace",
      fontSize: "14",
      fontColor: "#000000",
      BGcolor: "#000000", //just for indication purpose
    };
    sheetRow.push(cellProp);
  }
  sheetDB.push(sheetRow);
}

// Selectors for cell properties
const bold = document.querySelector(".bold");
const italic = document.querySelector(".italic");
const underline = document.querySelector(".underline");
const fontSize = document.querySelector(".font-size-prop");
const fontFamily = document.querySelector(".font-family-prop");
const fontColor = document.querySelector(".bgcolor-prop");
const alignment = document.querySelectorAll("alignment");
const leftAlign = alignment[0];
const centerAlign = alignment[1];
const rightAlign = alignment[2];

const addressBar = document.querySelector(".address-bar");
let activeColorProp = "#d1d8e0"
let inactiveColorProp = "#ecf0f1"


//Application of two way binding
//Attach property listeners
bold.addEventListener("click", (e) => {
  let address = addressBar.value;
  let [cell, cellProp] =activeCell(address);

  //modificatoin
  cellProp.bold = !cellProp.bold;
  cell.style.fontWeight = cellProp.bold?"bold":"normal";
  bold.style.backgroundColor = cellProp.bold?activeColorProp:inactiveColorProp;
});

function activeCell(address) {
  let [rid, cid] = decodeRidCidfromAddress(address);
  console.log(rid, cid,"rowid ", "colid");
  // Access cell and storage object
  let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`)
  console.log("cell   ", cell);
  let cellProp  = sheetDB[rid][cid];
  return [cell, cellProp];
}

function decodeRidCidfromAddress(address) {
  //address ->A1
  let rid = Number(address.slice(1) - 1);
  let cid = Number(address.charCodeAt(0)) - 65;

  return [rid, cid];
}
