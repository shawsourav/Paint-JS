import ToolPalette from "./ToolPalette";
import { eventBus } from "./listener";

class CanvasBoard {
    constructor(canvas) {
        this.canvas = canvas;

        this.listenerForCanvas = this.listenerForCanvas.bind(this);
        this.drawIntoCanvas = this.drawIntoCanvas.bind(this);
        this.toggleToolSelected = this.toggleToolSelected.bind(this);
        this.initialSetUpForCanvas = this.initialSetUpForCanvas.bind(this);

        this.palette = new ToolPalette();

        eventBus.subscribe('tool_selected', this.toggleToolSelected);
        this.initialSetUpForCanvas(); //Initial set up for canvas
        this.listenerForCanvas(); // Listen to canvas events
    }

    initialSetUpForCanvas(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.ctx = this.canvas.getContext('2d');
        this.ctx.strokeStyle = '#BADA55';
        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.ctx.lineWidth = 10;
        this.selectedTool = null;
        this.isDrawing = false;
        this.lastX = 0;
        this.lastY = 0;
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

        let rect = this.canvas.getBoundingClientRect();
        let root = document.documentElement;
        let mouseX = e.clientX - rect.left - root.scrollLeft;
        let mouseY = e.clientY - rect.top - root.scrollTop;
        this.ctx.beginPath();
        this.ctx.globalCompositeOperation = this.selectedTool == 'eraser' ? "destination-out" : "source-over";
        this.ctx.strokeStyle = this.selectedTool == 'eraser' ? "#fff" : "#BADA55";
        this.ctx.moveTo(this.lastX, this.lastY);
        this.ctx.lineTo(mouseX, mouseY);
        this.ctx.stroke();
        [this.lastX, this.lastY] = [mouseX, mouseY];
    }
}
export default CanvasBoard;