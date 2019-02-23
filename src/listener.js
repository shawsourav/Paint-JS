export function initCanvas(){
    console.log("--init canvas");
    let canvas = document.querySelector("#canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let context = canvas.getContext("2d");
    listenToMouseEvents(canvas, context);
}

function listenToMouseEvents(canvas){
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
}

