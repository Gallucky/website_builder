import { ToolType } from "./ToolType.js";
import { linkCSSToHTML } from "../services/helperService.js";

/**
 * Represents a tool in the a toolBox and the tools panel.
 * @class
 * @see {ToolBox}
 */
export class Tool {
    #name;
    #description;

    /**
     * The type of the tool.
     * @type {ToolType}
     * @see ToolType @at ./classes/ToolType.js
     */
    #type;
    #element;
    #toolID;
    #baseDefaultTool;

    static #id = 0;

    /**
     * Constructs a new instance of the Tool class.
     * @param {string} name - The name of the tool.
     * @param {ToolType} type - The type of the tool.
     * @param {string} [description=""] - An optional description of the tool.
     */

    constructor(name, type, description = "", baseDefaultTool = false) {
        this.#name = name;
        this.#type = type;
        this.#description = description;
        this.#baseDefaultTool = baseDefaultTool;

        Tool.#id++;
        this.#toolID = Tool.#id;

        this.#element = document.createElement("div");
        this.#element.classList.add("tool", `tool-type-${this.#type.toLowerCase()}`);
        this.#element.id = `tool-${name.replace(" ", "-").toLowerCase()}`;
        this.#element.dataset.toolId = this.#toolID;

        ToolType.linkCSS(this.#type);

        // If at least one tool is created then link the tool.css styling.
        if (Tool.#id > 0) {
            linkCSSToHTML("./styles/tools/tool.css");
        }
    }

    /**
     * Adds the tool element to the given parent element.
     * @param {HTMLElement} [parentElement=document.body] The parent element to add the tool element to.
     */
    addToolElementTo(parentElement = document.body) {
        parentElement.appendChild(this.#element);
    }

    removeToolElement() {
        this.#element.remove();
    }

    /**
     * Gets the type of the tool.
     * @returns {string} The type of the tool.
     */
    get type() {
        return this.#type;
    }

    /**
     * Gets the name of the tool.
     * @returns {string} The name of the tool.
     */
    get name() {
        return this.#name;
    }

    /**
     * Gets the description of the tool.
     * @returns {string} The description of the tool.
     */
    get description() {
        return this.#description;
    }

    /**
     * Gets the HTML element of the tool.
     * @returns {HTMLElement} The HTML element of the tool.
     */
    get element() {
        return this.#element;
    }

    get toolID() {
        return this.#toolID;
    }

    get baseDefaultTool() {
        return this.#baseDefaultTool;
    }

    /**
     * Sets the name of the tool.
     * @param {string} newName The new name of the tool.
     */

    set name(newName) {
        this.#name = newName;
    }
    /**
     * Sets the description of the tool.
     * @param {string} newDescription The new description of the tool.
     */

    set description(newDescription) {
        this.#description = newDescription;
    }
}
