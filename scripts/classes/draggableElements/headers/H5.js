import { DraggableElement } from "../DraggableElements.js";

export class H5 extends DraggableElement {
    constructor(name, width, height, text, bgColor, textColor, fontSize, fontFamily) {
        super(name, width, height, text, bgColor, textColor, fontSize, fontFamily);

        this.element = document.createElement("h5");
        this.element.style.id =
            `created-draggable-element-h5-` + `${this.createdElementID}-` + this.name.toLowerCase();

        this.updateDraggableElement();
    }
}
