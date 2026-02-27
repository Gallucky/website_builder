import { linkCSSToHTML } from "../services/helperService.js";

/**
 * The type for the tool object.
 * @static @class
 * @see Tool
 */
export class ToolType {
    static #input = "Input";
    static #select = "Select";
    static #size = "Size";
    static #color = "Color";
    static #textArea = "TextArea";

    static get input() {
        return ToolType.#input;
    }

    static get select() {
        return ToolType.#select;
    }

    static get size() {
        return ToolType.#size;
    }

    static get color() {
        return ToolType.#color;
    }

    static get textArea() {
        return ToolType.#textArea;
    }

    static validate(toolType) {
        return toolType instanceof ToolType;
    }

    static getTypes() {
        return [ToolType.input, ToolType.select, ToolType.size, ToolType.color, ToolType.textArea];
    }

    static linkCSS(toolType) {
        let linkURL = "";

        if (
            toolType === ToolType.input ||
            toolType === ToolType.color ||
            toolType === ToolType.textArea
        ) {
            linkURL = "./styles/tools/input.css";
        } else if (toolType === ToolType.select) {
            linkURL = "./styles/tools/select.css";
        } else if (toolType === ToolType.size) {
            linkURL = "./styles/tools/size.css";
        } else {
            const msg =
                `%cLinking ${toolType} CSS failed.\n` +
                `Error Message:\n` +
                "Tool type of is not a valid type.";
            console.log(msg, "color: red;");
            return false;
        }

        return linkCSSToHTML(linkURL);
    }
}
