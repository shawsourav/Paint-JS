import EraserIcon from './eraser.png';
import { eventBus } from "../listener";
export default class Eraser{
    constructor(){
        this.isSelected = false;
    }

    initEraser(){
        console.log('-evntBus', eventBus);
        this.eraserEl = document.createElement("div");
        this.eraserEl.classList.add("paint_tool");

        let img = document.createElement("img");
        img.setAttribute("src", EraserIcon);
        this.eraserEl.appendChild(img);
        this.listenToEraserSelect();
        return this.eraserEl;
    }

    listenToEraserSelect(){
        this.eraserEl.addEventListener('click', this.toggleSelected);
    }

    toggleSelected(){
        //global composition type is destination-out 
        eventBus.publish('tool_selected', 'eraser', 'destination-out');
        this.isSelected = !this.isSelected;
        console.log(this.isSelected);
        this.isSelected ? this.classList.add("selected") : this.classList.remove("selected");
    }
};