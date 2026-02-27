import { DraggableElement } from "./DraggableElements.js";

export class A extends DraggableElement {
    url;
    newTab;

    constructor(name, width, height, text, bgColor, textColor, fontSize, fontFamily, url) {
        super(name, width, height, text, bgColor, textColor, fontSize, fontFamily);

        this.element = document.createElement("a");
        this.element.classList.add("draggable-link");
        this.element.style.id =
            "created-draggable-element-a-" + `${this.createdElementID}-` + this.name.toLowerCase();

        this.url = url;

        this.updateDraggableElement();

        this.element.href = this.url;
        this.element.target = "_blank";

        this.element.textContent = "";

        const span = document.createElement("span");
        span.textContent = text;

        this.element.appendChild(span);
    }

    static initialize() {
        new A("A", "100px", "100px", "link", "#fff", "#000", "16px", "Arial", "", "", true);
    }
}
