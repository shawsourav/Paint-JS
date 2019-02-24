import BrushIcon from './brush.jpg';
import { eventBus } from "../listener";
export default class Brush{
    constructor(){
        this.isSelected = false;
    }

    initBrush(){
        console.log('-evntBus', eventBus);
        this.brushEl = document.createElement("div");
        this.brushEl.classList.add("paint_tool");

        let img = document.createElement("img");
        img.setAttribute("src", BrushIcon);
        this.brushEl.appendChild(img);
        this.listenToBrushSelect();
        return this.brushEl;
    }

    listenToBrushSelect(){
        this.brushEl.addEventListener('click', this.toggleSelected);
    }

    toggleSelected(){
        eventBus.publish('tool_selected', 'brush', 'source-over');
        this.isSelected = !this.isSelected;
        console.log(this.isSelected);
        this.isSelected ? this.classList.add("selected") : this.classList.remove("selected");
    }
};