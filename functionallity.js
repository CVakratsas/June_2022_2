'use strict'

let vertical = true;
let horizontal = true;

function change_vertical() {
    let empty = document.getElementById("empty");
    if (vertical===true) {
        empty.style.borderTop = "none";
        empty.style.borderBottom = "none";
        vertical = false;
    } else {
        empty.style.borderTop = "4px solid black";
        empty.style.borderBottom = "4px solid black";
        vertical = true;
    }
}

function change_horizontal() {
    let empty = document.getElementById("empty");
    if (horizontal===true) {
        empty.style.borderRight = "none";
        empty.style.borderLeft = "none";
        horizontal = false;
    } else {
        empty.style.borderRight = "4px solid black";
        empty.style.borderLeft = "4px solid black";
        horizontal = true;
    }
}