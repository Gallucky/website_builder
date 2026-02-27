import { DraggableElement } from "./DraggableElements.js";

export class Span extends DraggableElement {
    constructor(name, width, height, text, bgColor, textColor, fontSize, fontFamily) {
        super(name, width, height, text, bgColor, textColor, fontSize, fontFamily);

        this.element = document.createElement("div");
        this.element.style.id =
            "created-draggable-element-span-" +
            `${this.createdElementID}-` +
            this.name.toLowerCase();
        this.element.style.display = "inline-block";

        this.updateDraggableElement();
    }

    static initialize() {
        new Span("Span", "100px", "100px", "Span", "#fff", "#000", "16px", "Arial", true);
    }
}
