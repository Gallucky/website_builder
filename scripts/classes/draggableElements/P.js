import { DraggableElement } from "./DraggableElements.js";

export class P extends DraggableElement {
    constructor(name, width, height, text, bgColor, textColor, fontSize, fontFamily) {
        super(name, width, height, text, bgColor, textColor, fontSize, fontFamily);

        this.element = document.createElement("div");
        this.element.style.id =
            "created-draggable-element-p-" + `${this.createdElementID}-` + this.name.toLowerCase();

        this.updateDraggableElement();
    }

    static initialize() {
        new P("P", "100px", "100px", "P", "#fff", "#000", "16px", "Arial", true);
    }
}
