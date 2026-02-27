import { DraggableElement } from "./DraggableElements.js";

export class Div extends DraggableElement {
    constructor(name, width, height, text, bgColor, textColor, fontSize, fontFamily) {
        super(name, width, height, text, bgColor, textColor, fontSize, fontFamily);

        this.element = document.createElement("div");

        this.element.style.id =
            "created-draggable-element-div-" +
            `${this.createdElementID}-` +
            this.name.toLowerCase();

        this.updateDraggableElement();
    }

    static initialize() {
        new Div("Div", "100px", "100px", "Div", "#fff", "#000", "16px", "Arial", true);
    }
}
