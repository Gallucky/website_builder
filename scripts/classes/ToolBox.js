import { Tool } from "./Tool.js";

/**
 * Represents a collection of tools.
 * @class
 * @see {Tool}
 */
export class ToolBox {
    #tools;

    /**
     * Initializes a new instance of the ToolBox class.
     * Creates an empty map to store tools.
     */
    constructor() {
        this.#tools = new Map();
    }

    /**
     * Gets an iterator of all the tools in the ToolBox.
     * @returns {Iterator.<Tool>} An iterator of all the tools in the ToolBox.
     */
    get tools() {
        return this.#tools.values();
    }

    /**
     * Gets the number of tools in the ToolBox.
     * @returns {number} The number of tools in the ToolBox.
     */
    get size() {
        return this.#tools.size;
    }

    /**
     * Adds the given tool to the ToolBox.
     * @param {Tool} tool The tool to add.
     */
    addTool(tool) {
        this.#tools.set(tool.toolID, tool);
    }

    /**
     * Retrieves the tool with the given name from the ToolBox.
     * @param {string} toolName The name of the tool to retrieve.
     * @returns {Array<Tool>} An array containing all of the tools
     * with the given name, if there is no tool with the name given
     * then an empty array is returned.
     */
    getToolByName(toolName) {
        const toolWithGivenName = [];
        this.#tools.forEach((tool) => {
            if (tool.name === toolName) {
                toolWithGivenName.push(tool);
            }
        });

        return toolWithGivenName;
    }

    /**
     * Retrieves the tool with the given ID from the ToolBox.
     * @param {number} toolID The ID of the tool to retrieve.
     * @returns {Tool} The tool with the given ID, or undefined if no such tool exists.
     */
    getToolByID(toolID) {
        return this.#tools.get(toolID);
    }

    /**
     * Adds all the tools in the ToolBox to the .tools-panel element.
     *
     * This method will throw an error if no .tools-panel element is found, or if there are no tools in the ToolBox.
     *
     * @throws {Error} If no .tools-panel element is found.
     * @throws {Error} If there are no tools in the ToolBox.
     */
    addToolsToToolPanel() {
        const toolPanel = document.querySelector(".tools-panel");

        if (!toolPanel) {
            throw new Error("No tool panel found.");
        }

        if (this.#tools.size === 0) {
            throw new Error("No tools found.");
        }

        const baseDefaultTools = Array.from(this.#tools.values()).filter(
            (tool) => tool.baseDefaultTool
        );

        for (const tool of baseDefaultTools) {
            console.log(tool);

            tool.addToolElementTo(toolPanel);
            console.log(`%cAdded '${tool.name}' to tool panel.`, "color: green;");
        }
    }

    removeToolFromPanelByName(toolName) {
        const tool = this.getToolByName(toolName)[0];
        const panel = document.querySelector(".tools-panel");
        if (tool) {
            tool.removeToolElement();
        }
    }

    removeToolFromPanelByID(toolID) {
        const tool = this.getToolByID(toolID);

        if (tool) {
            tool.removeToolElement();
        }
    }

    addToolToPanelByName(toolName) {
        const tool = this.getToolByName(toolName)[0];

        if (tool) {
            const toolPanel = document.querySelector(".tools-panel");
            tool.addToolElementTo(toolPanel);
        }
    }

    addToolToPanelByID(toolID) {
        const tool = this.getToolByID(toolID);

        if (tool) {
            const toolPanel = document.querySelector(".tools-panel");
            tool.addToolElementTo(toolPanel);
        }
    }

    /**
     * Empties the ToolBox by removing all tools.
     */
    empty() {
        this.#tools = new Map();
    }

    getBaseDefaultTools() {
        const result = new Map();
        Array.from(this.#tools.values())
            .filter((tool) => tool.baseDefaultTool)
            .forEach((tool) => {
                result.set(tool.name, tool);
            });
        return result;
    }
}
