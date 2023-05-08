"use strict";

import * as funk from "./styleFunctions.js";

(() => {


    let loadDiv = document.getElementById("intro");
    let mainCont = document.getElementById("main-content");
    let aboutLi = document.getElementById("about")
    let portfolioLi = document.getElementById("portfolio")
    let projectsLi = document.getElementById("projects")
    let contactLi = document.getElementById("contact")

    // let topLeft = document.getElementById("top-left");
    // let topRight = document.getElementById("top-right");
    // let center = document.getElementById("center");
    // let bottomRight = document.getElementById("bottom-right");
    // let bottomLeft = document.getElementById("bottom-left");

    window.addEventListener("load", (e) => {
        e.preventDefault();
        // let timeout;
        //
        // function myFunction() {
        //     timeout = setTimeout(alertFunc, 6000);
        // }
        //
        // function alertFunc() {
        //     loadDiv.classList.toggle("hide")
        //     mainCont.classList.toggle("hide")
        // }
        //
        // myFunction()
    })

    // topLeft.addEventListener('mouseover', () => {
    //     funk.topLeftMoveBox(topLeft, bottomLeft, bottomRight, topRight, center)
    //     topLeft.addEventListener('mouseout', () => {
    //         funk.moveBoxUnset(topLeft, bottomLeft, bottomRight, topRight, center)
    //     })
    // });
    // topRight.addEventListener('mouseover', () => {
    //     funk.topRightmoveBox(topLeft, bottomLeft, bottomRight, topRight, center)
    //     topRight.addEventListener('mouseout', () => {
    //         funk.moveBoxUnset(topLeft, bottomLeft, bottomRight, topRight, center)
    //     })
    // });
    // center.addEventListener('mouseover', () => {
    //     funk.centermoveBox(topLeft, bottomLeft, bottomRight, topRight, center)
    //     center.addEventListener('mouseout', () => {
    //         funk.moveBoxUnset(topLeft, bottomLeft, bottomRight, topRight, center)
    //     })
    // });
    // bottomRight.addEventListener('mouseover', () => {
    //     funk.bottomRightmoveBox(topLeft, bottomLeft, bottomRight, topRight, center)
    //     bottomRight.addEventListener('mouseout', () => {
    //         funk.moveBoxUnset(topLeft, bottomLeft, bottomRight, topRight, center)
    //     })
    // });
    // bottomLeft.addEventListener('mouseover', () => {
    //     funk.bottomLeftmoveBox(topLeft, bottomLeft, bottomRight, topRight, center)
    //     bottomLeft.addEventListener('mouseout', () => {
    //         funk.moveBoxUnset(topLeft, bottomLeft, bottomRight, topRight, center)
    //     })
    // });

    aboutLi.addEventListener('click')


})();