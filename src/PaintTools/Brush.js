import BrushIcon from './brush.jpg';
export default class Brush{
    constructor(){
        this.isSelected = false;
    }

    initBrush(){
        this.brushEl = document.createElement("div");
        this.brushEl.classList.add("brush");

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
        this.isSelected = !this.isSelected;
        console.log(this.isSelected);
    }
};