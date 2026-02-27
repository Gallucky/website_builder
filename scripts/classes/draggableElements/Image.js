import { DraggableElement } from "./DraggableElements.js";

export class Image extends DraggableElement {
    src;
    alt;

    constructor(name, width, height, text, bgColor, textColor, fontSize, fontFamily, src, alt) {
        super(name, width, height, text, bgColor, textColor, fontSize, fontFamily);

        this.element = document.createElement("img");
        this.element.style.id =
            "created-draggable-element-img-" +
            `${this.createdElementID}-` +
            this.name.toLowerCase();

        this.src = src;
        this.alt = alt;

        this.updateDraggableElement();

        this.element.src = this.src;
        this.element.alt = this.alt;

        this.element.style.aspectRatio = "16/9";
        this.element.style.objectFit = "cover";
        this.element.style.objectPosition = "center";
    }

    static initialize() {
        new Image("Image", "100px", "100px", "img", "#fff", "#000", "16px", "Arial", "", "", true);
    }
}
