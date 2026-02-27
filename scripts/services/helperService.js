import { ToolBox } from "../classes/ToolBox.js";

import {
    createElementTypeTool,
    createElementNameTool,
    createElementTextTool,
    createElementSizeTool,
    createElementBgColorTool,
    createElementFontColorTool,
    createElementFontSizeTool,
    createElementFontFamilyTool,
    createElementImageSRCTool,
    createElementImageAltTool,
    createElementALinkURLTool,
} from "./toolService.js";

const dynamicLinkedCSSFiles = [];

const alreadyLinked = (link) => {
    return dynamicLinkedCSSFiles.some((id) => {
        return id === `link-css-${link}`;
    });
};

export const linkCSSToHTML = (link) => {
    try {
        if (alreadyLinked(link)) {
            throw new Error(`'${link}' CSS file is already linked.`);
        }

        const linkCSS = document.createElement("link");
        linkCSS.rel = "stylesheet";
        linkCSS.href = link;
        linkCSS.id = `link-css-${link}`;
        dynamicLinkedCSSFiles.push(linkCSS.id);

        document.head.appendChild(linkCSS);
    } catch (err) {
        const msg = `%cLinking '${link}' CSS failed.\n` + `Warn Message:\n` + err.message;
        console.warn(msg, "color: yellow;");
        return false;
    } finally {
        const msg = `%c${link} CSS linked successfully.`;
        console.log(msg, "color: green;");
        return true;
    }
};

/**
 * Populates the provided tool box with a set of predefined tools.
 *
 * This function creates various tools such as element type, name, text,
 * size, background color, font color, font size, and font family tools,
 * and adds them to the specified tool box.
 *
 * @param {ToolBox} toolBoxToPopulate - The tool box to populate with tools.
 * @throws {Error} If no tool box is provided to populate.
 * @returns {boolean} Returns true if the tool box was successfully populated,
 *                    otherwise false if an error occurred during the process.
 */

export const populateToolBox = (toolBoxToPopulate) => {
    if (!toolBoxToPopulate) {
        throw new Error("No tool box to populate.");
    }

    try {
        // Creating the tools.
        const elementTypeTool = createElementTypeTool(toolBoxToPopulate);
        const elementNameTool = createElementNameTool();
        const elementTextTool = createElementTextTool();
        const elementSizeTool = createElementSizeTool();
        const elementBgColorTool = createElementBgColorTool();
        const elementFontColorTool = createElementFontColorTool();
        const elementFontSizeTool = createElementFontSizeTool();
        const elementFontFamilyTool = createElementFontFamilyTool();
        const elementImageSRCTool = createElementImageSRCTool();
        const elementImageAltTool = createElementImageAltTool();
        const elementALinkURLTool = createElementALinkURLTool();

        // Adding the tools to the tool box.
        toolBoxToPopulate.addTool(elementTypeTool);
        toolBoxToPopulate.addTool(elementNameTool);
        toolBoxToPopulate.addTool(elementTextTool);
        toolBoxToPopulate.addTool(elementSizeTool);
        toolBoxToPopulate.addTool(elementBgColorTool);
        toolBoxToPopulate.addTool(elementFontColorTool);
        toolBoxToPopulate.addTool(elementFontSizeTool);
        toolBoxToPopulate.addTool(elementFontFamilyTool);
        toolBoxToPopulate.addTool(elementImageSRCTool);
        toolBoxToPopulate.addTool(elementImageAltTool);
        toolBoxToPopulate.addTool(elementALinkURLTool);
    } catch (err) {
        const msg =
            `%c[helperService.js] - populateToolBox:\n` +
            `An error has occurred while trying to add tools to the tool box.\n` +
            `Please empty the tool box and try again.\n` +
            `Error Message:\n` +
            err.stack;
        console.log(msg, "color: red;");
        return false;
    } finally {
        const msg =
            `%c[helperService.js] - populateToolBox:\n` +
            `Finished populating the tool box with ${toolBoxToPopulate.size} tools`;
        console.log(msg, "color: green;");
        return true;
    }
};
