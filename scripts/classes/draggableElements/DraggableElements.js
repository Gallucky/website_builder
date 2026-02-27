import { dragElement } from "../../services/dragService.js";

export class DraggableElement {
    static #subclasses = new Set();
    static #id = 0;

    #createdElementID;

    name;
    style;
    element;

    locationX;
    locationY;

    static get subclasses() {
        return DraggableElement.#subclasses;
    }

    constructor(name, width, height, text, bgColor, textColor, fontSize, fontFamily) {
        // If the constructor is not the called
        // from the DraggableElement class
        // then it is called from a subclass.
        // Add the subclass to the list of subclasses.
        if (this.constructor !== DraggableElement) {
            DraggableElement.#subclasses.add(this.constructor.name);
            const msg =
                `DraggableElement's constructor was called from a subclass.\n` +
                `Adding the ${this.constructor.name} subclass to the list of subclasses.`;
            console.log(msg);
        }

        DraggableElement.#id++;
        this.#createdElementID = DraggableElement.#id;

        this.name = name.toLowerCase().replace(" ", "-");
        this.style = {
            width: width + "px",
            height: height + "px",
            textContent: text,
            backgroundColor: bgColor,
            color: textColor,
            fontSize: fontSize,
            fontFamily: fontFamily,
        };
        this.element = null;

        this.locationX = 0;
        this.locationY = 0;
    }

    updateDraggableElement() {
        Object.assign(this.element.style, this.style);
        this.element.style.zIndex = 1;
        this.element.dataset.draggable = "true";
        this.element.textContent = this.style.textContent;
        this.element.style.userSelect = "none";

        this.element.style.position = "absolute";
        this.element.style.left = `${this.locationX}px`;
        this.element.style.top = `${this.locationY}px`;

        // Making sure the center of the element is in the (locationX, locationY) point.
        // this.element.style.transform = "translate(-50%, -50%)";

        dragElement(this.element);
    }

    /**
     * Sorts the subclasses of DraggableElement in alphabetical order.
     * Updates the static set of subclasses with the sorted order.
     */
    static sortSubclasses() {
        DraggableElement.#subclasses = new Set(Array.from(this.#subclasses).sort());
    }
}
