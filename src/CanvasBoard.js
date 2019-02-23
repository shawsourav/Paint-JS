import Palette from "./Palette";

class CanvasBoard {
    constructor(canvas) {
        this.canvas = canvas;
        this.palette = new Palette();
    }
}
export default CanvasBoard;