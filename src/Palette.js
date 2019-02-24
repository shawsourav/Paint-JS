import Brush from "./PaintTools/Brush";

class Palette{
    constructor(){
      this.selectedTool = null;
      this.initPalette();
    }

    initPalette(){
        this.createPalette();
        let brush = new Brush();
        let brushElement = brush.initBrush();
        this.palette.appendChild(brushElement);
        document.body.appendChild(this.palette);
    }

    createPalette(){
        this.palette = document.createElement("div");
        this.palette.classList.add("palette");

    }

}

export default Palette;