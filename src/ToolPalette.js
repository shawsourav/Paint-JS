import Brush from "./PaintTools/Brush";
import Eraser from "./PaintTools/Eraser";
class ToolPalette{
    constructor(){
      this.selectedTool = null;
      this.initPalette();
    }

    initPalette(){
        this.palette = document.createElement("div");
        this.palette.classList.add("palette");
        this.addPalettetools();
    }

    addPalettetools(){
        let brush = new Brush();
        let brushElement = brush.initBrush();
        this.palette.appendChild(brushElement);
        
        let eraser = new Eraser();
        let eraserElement = eraser.initEraser();
        this.palette.appendChild(eraserElement);

        document.body.appendChild(this.palette); 
    }

}

export default ToolPalette;