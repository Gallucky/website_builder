import { DraggableElement } from "../DraggableElements.js";

export class H1 extends DraggableElement {
    constructor(name, width, height, text, bgColor, textColor, fontSize, fontFamily) {
        super(name, width, height, text, bgColor, textColor, fontSize, fontFamily);

        this.element = document.createElement("h1");
        this.element.style.id =
            `created-draggable-element-h1-` + `${this.createdElementID}-` + this.name.toLowerCase();

        this.updateDraggableElement();
    }
}
