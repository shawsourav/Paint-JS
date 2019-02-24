import Palette from "./Palette";
import { eventBus } from "./listener";

class CanvasBoard {
    constructor(canvas) {
        //Initial set up for canvas
        this.canvas = canvas;
        console.log(canvas);
        this.ctx = this.canvas.getContext('2d');
        this.ctx.strokeStyle = '#BADA55';
        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.ctx.lineWidth = 10;
        this.selectedTool = null;
        this.isDrawing = false;
        this.lastX = 0;
        this.lastY = 0;

        this.listenerForCanvas = this.listenerForCanvas.bind(this);
        this.drawIntoCanvas = this.drawIntoCanvas.bind(this);
        this.toggleToolSelected = this.toggleToolSelected.bind(this);

        this.palette = new Palette();

        eventBus.subscribe('tool_selected', this.toggleToolSelected);
        this.listenerForCanvas(); // listen to canvas events
    }

    toggleToolSelected(tool){
        console.log(tool);
        this.selectedTool = tool;
    }

    listenerForCanvas(){
        this.canvas.addEventListener('mousemove', this.drawIntoCanvas); 
        this.canvas.addEventListener('mouseup', () => this.isDrawing = false);
        this.canvas.addEventListener('mouseout', () => this.isDrawing = false);
        this.canvas.addEventListener('mousedown', (e) => {
            this.isDrawing = true;
            [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
            console.log('this.isDrawing',this.isDrawing);
          });
    }

    drawIntoCanvas(e){
        if(!this.isDrawing || !this.selectedTool) return;
        console.log(this.lastX, this.lastY);
        this.ctx.beginPath();
        this.ctx.moveTo(this.lastX, this.lastY);
        this.ctx.lineTo(e.offsetX, e.offsetY);
        this.ctx.stroke();
        [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    }
}
export default CanvasBoard;