import { ToolBox } from "../classes/ToolBox.js";
import {
    applyRedBorderToElement,
    createDraggableElement,
    addDraggableElementToDOM,
} from "../services/elementService.js";
import {
    getDraggableElements,
    addDraggableElement,
    saveDraggableElementsToLocalStorage,
} from "../services/storageService.js";

/**
 * Creates an onclick event handler for the "Create" action button.
 * This function will get the selected tool from the provided toolBox and
 * create a new draggable element using the selected tool's type.
 * @param {ToolBox} toolBox - The tool box to get the selected tool from.
 * @returns {void} Returns nothing.
 */
export const actionButtonCreateOnClickHandler = (toolBox) => {
    const actionButtonCreate = document.getElementById("create-element-btn");

    actionButtonCreate.onclick = () => {
        const type = toolBox.getToolByID(1);
        const fontFamily = toolBox.getToolByID(8);
        const nameTool = toolBox.getToolByID(2);
        const textTool = toolBox.getToolByID(3);

        if (checkEmptyValues(nameTool, textTool)) {
            console.warn("%cName and Text inputs should not be empty.", "color: yellow;");
        } else if (validateAndHighlightInputValues(toolBox)) {
            const fontColor = toolBox.getToolByID(5);
            const bgColor = toolBox.getToolByID(6);

            warnIfFontAndBgColorsAreTheSame(fontColor, bgColor);

            const draggableElement = createDraggableElement(toolBox);
            addDraggableElement(draggableElement);
            console.log("Draggable Elements Map:", getDraggableElements());

            addDraggableElementToDOM(draggableElement);

            console.log(draggableElement);
        } else {
            console.warn("%cPlease select a type and font family.", "color: yellow;");
        }
    };
};

const checkEmptyValues = (elementName, elementText) => {
    if (!elementName || !elementText) {
        throw new Error("One of the following parameters is not defined: name, text.");
    }

    const nameInput = elementName.element.querySelector("input");
    const textInput = elementText.element.querySelector("textarea");

    if (!nameInput || !textInput) {
        console.error("%cElement Name:", "color: red;");
        console.error(elementName.element);
        console.error("%cElement Text:", "color: red;");
        console.error(elementText.element);

        console.log();

        console.error("%cName Input:", "color: red;");
        console.error(nameInput);
        console.error("%cText Input:", "color: red;");
        console.error(textInput);

        throw new Error("One of the following parameters is not defined: nameInput, textInput.");
    }

    return nameInput.value === "" || textInput.value === "";
};

const validateAndHighlightInputValues = (toolBox) => {
    const type = toolBox.getToolByID(1);
    const fontFamily = toolBox.getToolByID(8);

    if (!type || !fontFamily) {
        throw new Error("One of the following parameters is not defined: type, size, fontFamily.");
    }

    const typeInput = type.element.querySelector("select");
    const fontFamilyInput = fontFamily.element.querySelector("select");

    if (!typeInput || !fontFamilyInput) {
        throw new Error(
            "One of the following parameters is not defined: typeInput, sizeWidthInput, sizeHeightInput, fontFamilyInput."
        );
    }

    const typeElement = typeInput.value.toLowerCase();
    let result = true;

    if (typeInput.getAttribute("default-value") === "true") {
        applyRedBorderToElement(typeInput);
        result = false;
    }

    if (fontFamilyInput.getAttribute("default-value") === "true") {
        applyRedBorderToElement(fontFamilyInput);
        result = false;
    }

    return result;
};

const warnIfFontAndBgColorsAreTheSame = (fontColor, bgColor) => {
    if (!fontColor || !bgColor) {
        throw new Error("One of the following parameters is not defined: fontColor, bgColor.");
    }

    const fontColorInput = fontColor.element.querySelector("input");
    const bgColorInput = bgColor.element.querySelector("input");

    if (!fontColorInput || !bgColorInput) {
        throw new Error(
            "One of the following parameters is not defined: fontColorInput, bgColorInput."
        );
    }

    if (fontColorInput.value == bgColorInput.value) {
        console.warn(
            "%cIt is recommended to have different font and background colors.",
            "color: yellow;"
        );
        console.warn("%cFont color:", "color: yellow;");
        console.warn("Value:", fontColorInput.value);
        console.warn("%cBackground color:", "color: yellow;");
        console.warn("Value:", bgColorInput.value);
    } else {
        console.log("Font color:", fontColorInput.value);
        console.log("Background color:", bgColorInput.value);
    }
};

export const actionButtonSaveOnClickHandler = () => {
    const saveBtn = document.getElementById("save-workspace-btn");

    saveBtn.onclick = () => {
        const draggableElements = getDraggableElements();

        for (const draggableElement of draggableElements.values()) {
            draggableElement.locationX = draggableElement.element.style.left.replace("px", "");
            draggableElement.locationY = draggableElement.element.style.top.replace("px", "");

            console.log("updated locationX and locationY");
        }

        saveDraggableElementsToLocalStorage();

        console.log("Saved Draggable Elements to Local Storage.");
    };
};
