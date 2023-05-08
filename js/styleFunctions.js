
"use strict";

let timeout;

export const waitList = (funk, time) => {
    timeout = setTimeout(funk, time);
}

export const flexGrow = (selector) => {
    return selector.style.flex = "2 0 auto";
}
export const flexReturn = (selector) => {
    return selector.style.flex = "1 0 auto";
}

export const moveBoxUnset = (topLeft, bottomLeft, bottomRight, topRight, center) => {
    topLeft.style.width = "40vw";
    topLeft.style.height = "60vh";

    bottomLeft.style.width = "60vw";
    bottomLeft.style.height = "40vh";

    bottomRight.style.width = "40vw";
    bottomRight.style.height = "60vh";

    topRight.style.width = "60vw";
    topRight.style.height = "40vh";

    center.style.transform = "translate3d(0, 0, 0)";
    center.style.width = "20vw";
    center.style.height = "20vh";

}
export const topLeftMoveBox = (topLeft, bottomLeft, bottomRight, topRight, center) => {
    // MOVING MOVING MOVING
    topLeft.style.width = "56vw";
    topLeft.style.height = "72vh";
    // MOVING MOVING MOVING

    bottomLeft.style.width = "76vw";
    bottomLeft.style.height = "28vh";

    bottomRight.style.width = "24vw";
    bottomRight.style.height = "48vh";

    topRight.style.width = "44vw";
    topRight.style.height = "52vh";

    center.style.transform = "translate3d(80%, 60%, 0)";

}
export const topRightmoveBox = (topLeft, bottomLeft, bottomRight, topRight, center) => {
    topLeft.style.width = "30vw";
    topLeft.style.height = "70vh";

    bottomLeft.style.width = "50vw";
    bottomLeft.style.height = "30vh";

    bottomRight.style.width = "50vw";
    bottomRight.style.height = "50vh";

    // MOVING MOVING MOVING
    topRight.style.width = "70vw";
    topRight.style.height = "50vh";
    // MOVING MOVING MOVING

    center.style.transform = "translate3d(-50%, 50%, 0)";
}
export const centermoveBox = (topLeft, bottomLeft, bottomRight, topRight, center) => {
    topLeft.style.width = "72vw";
    topLeft.style.height = "32vh";

    bottomLeft.style.width = "32vw";
    bottomLeft.style.height = "68vh";

    bottomRight.style.width = "68vw";
    bottomRight.style.height = "28vh";

    topRight.style.width = "28vw";
    topRight.style.height = "72vh";

    // MOVING MOVING MOVING
    center.style.transform = "translate3d(-20%, -20%, 0)";
    center.style.width = "40vw";
    center.style.height = "40vh";
    // MOVING MOVING MOVING
}
export const bottomRightmoveBox = (topLeft, bottomLeft, bottomRight, topRight, center) => {
    topLeft.style.width = "25vw";
    topLeft.style.height = "60vh";

    bottomLeft.style.width = "45vw";
    bottomLeft.style.height = "40vh";

    // MOVING MOVING MOVING
    bottomRight.style.width = "55vw";
    bottomRight.style.height = "60vh";
    // MOVING MOVING MOVING

    topRight.style.width = "75vw";
    topRight.style.height = "40vh";

    center.style.transform = "translate3d(-75%, 0%, 0)";
}
export const bottomLeftmoveBox = (topLeft, bottomLeft, bottomRight, topRight, center) => {
    topLeft.style.width = "44vw";
    topLeft.style.height = "44vh";

    // MOVING MOVING MOVING
    bottomLeft.style.width = "64vw";
    bottomLeft.style.height = "56vh";
    // MOVING MOVING MOVING

    bottomRight.style.width = "36vw";
    bottomRight.style.height = "76vh";

    topRight.style.width = "56vw";
    topRight.style.height = "24vh";

    center.style.transform = "translate3d(20%, -80%, 0)";
}