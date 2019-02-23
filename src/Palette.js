import Brush from "./PaintTools/Brush";

class Palette{
    constructor(){
      this.selectedTool = null;
      this.initPalette();
    }

    initPalette(){
        
        let brush = new Brush();
        let brushElement = brush.initBrush();

        document.body.appendChild(brushElement);
    }

}

export default Palette;