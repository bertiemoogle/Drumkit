"use strict";

let drumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < drumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        alert("I got clicked");
    });
}




