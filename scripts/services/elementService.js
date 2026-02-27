import { Header } from "../classes/draggableElements/Header.js";
import { Span } from "../classes/draggableElements/Span.js";
import { P } from "../classes/draggableElements/P.js";
import { Div } from "../classes/draggableElements/Div.js";
import { DraggableElement } from "../classes/draggableElements/DraggableElements.js";
import { Image } from "../classes/draggableElements/Image.js";
import { A as A } from "../classes/draggableElements/A.js";
import { H1 } from "../classes/draggableElements/headers/H1.js";
import { H2 } from "../classes/draggableElements/headers/H2.js";
import { H3 } from "../classes/draggableElements/headers/H3.js";
import { H4 } from "../classes/draggableElements/headers/H4.js";
import { H5 } from "../classes/draggableElements/headers/H5.js";
import { H6 } from "../classes/draggableElements/headers/H6.js";
import { getDraggableElements } from "./storageService.js";

/**
 * Populate a select element with options.
 * @param {HTMLSelectElement} select The select element to populate.
 * @param {string[]} options The options to populate the select element with.
 * @param {...*} [args] Additional arguments to pass to the function.
 * @param {string} [defaultSelectedOption] The default selected option. If not provided, the first option will be selected.
 * @param {boolean} [optionIsValidFontNames] Whether the options are valid font names. If true, the font names will be applied to the options.
 * @param {function} [func] The function to run when the select element changes. The function will receive the change event as an argument.
 */
export const populateSelectElementWith = (
    select,
    options,
    // defaultSelectedOption = undefined,
    // optionIsValidFontNames = false,
    ...args
) => {
    // Setting default values for the arguments.
    let defaultSelectedOption = undefined;
    let optionIsValidFontNames = false;
    let func = () => {};

    // Extracting the arguments.
    args.forEach((arg) => {
        if (typeof arg === "string") {
            defaultSelectedOption = arg;
        }
        if (typeof arg === "boolean") {
            optionIsValidFontNames = arg;
        }
        if (typeof arg === "function") {
            func = arg;
        }
    });

    if (defaultSelectedOption) {
        const defaultOption = document.createElement("option");
        defaultOption.value = defaultSelectedOption;
        defaultOption.textContent = defaultSelectedOption;
        defaultOption.selected = true;
        defaultOption.disabled = true;

        select.appendChild(defaultOption);
    }

    if (!optionIsValidFontNames) {
        optionIsValidFontNames = false;
    } else {
        console.warn(
            `[elementService.js] - populateSelectElementWith: Options received are not valid font names.`
        );
    }

    options.forEach((option) => {
        let optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;

        if (optionIsValidFontNames) {
            optionElement.style.fontFamily = option;
        }

        select.appendChild(optionElement);
        console.log(`Added ${option} to the select element.`);
    });

    // Adding a change listener for the select that will make
    // sure that the selected option will have the selected property.
    select.addEventListener("change", (e) => {
        Array.from(select.options).forEach((option) => {
            option.selected = option === select.options[select.selectedIndex];

            if (option.selected) {
                option.classList.add("selected");
            } else {
                option.classList.remove("selected");
            }

            // console.log(
            //     `Option ${option.value} is ${option.selected ? "selected" : "not selected"}`
            // );
        });

        console.log("select option changed.");

        // Running the onchange function provided in the args parameter array.
        func(e);
    });
};

export const createInformationButton = (informationText) => {
    const informationButton = document.createElement("div");
    informationButton.classList.add("info-btn");
    informationButton.style.setProperty("--pseudo-after-text", `"${informationText}"`);

    return informationButton;
};

export const initializeSupportedElementTypes = () => {
    // Creating a temp objects for all the supported element types,
    // so the DraggableElement.#subclasses set can be populated by the
    // constructor and thus populating the element type tool selection options.
    Header.initializeHeaders();
    Div.initialize();
    P.initialize();
    Span.initialize();
    Image.initialize();
    A.initialize();

    // Sorting the subclasses in alphabetical order.
    DraggableElement.sortSubclasses();
};

export const applyRedBorderToElement = (element) => {
    const oldBorder = element.style.border;
    element.style.border = "2px solid red";

    setTimeout(() => {
        element.style.border = oldBorder;
    }, 2000);
};

export const createDraggableElement = (toolBox) => {
    let draggableElement = null;

    // Base tools input value.
    const baseDefaultToolsValues = toolBox.getBaseDefaultTools();

    console.log(baseDefaultToolsValues);

    const elementType = baseDefaultToolsValues.get("Element Type").element;
    const elementTypeInput = elementType.querySelector("select");

    const elementName = baseDefaultToolsValues.get("Element Name").element;
    const elementNameInput = elementName.querySelector("input");

    const elementText = baseDefaultToolsValues.get("Element Text").element;
    const elementTextInput = elementText.querySelector("textarea");

    // Here I found out that the HTMLElements doesn't have getElementById() method.
    // But they have querySelector and getElementByClassName methods.
    const elementSize = baseDefaultToolsValues.get("Element Size").element;
    const elementSizeWidthInput = elementSize.querySelector("#width-input");
    const elementSizeHeightInput = elementSize.querySelector("#height-input");

    const elementBgColor = baseDefaultToolsValues.get("Element Background Color").element;
    const elementBgColorInput = elementBgColor.querySelector("input");

    const elementFontColor = baseDefaultToolsValues.get("Element Font Color").element;
    const elementFontColorInput = elementFontColor.querySelector("input");

    const elementFontSize = baseDefaultToolsValues.get("Element Font Size").element;
    const elementFontSizeInput = elementFontSize.querySelector("input");

    const elementFontFamily = baseDefaultToolsValues.get("Element Font Family").element;
    const elementFontFamilyInput = elementFontFamily.querySelector("select");

    console.log("Base default tools values:", baseDefaultToolsValues);

    switch (elementTypeInput.value.toLowerCase()) {
        case "h1":
            draggableElement = new H1(
                elementNameInput.value,
                elementSizeWidthInput.value,
                elementSizeHeightInput.value,
                elementTextInput.value,
                elementBgColorInput.value,
                elementFontColorInput.value,
                elementFontSizeInput.value,
                elementFontFamilyInput.value
            );
            break;
        case "h2":
            draggableElement = new H2(
                elementNameInput.value,
                elementSizeWidthInput.value,
                elementSizeHeightInput.value,
                elementTextInput.value,
                elementBgColorInput.value,
                elementFontColorInput.value,
                elementFontSizeInput.value,
                elementFontFamilyInput.value
            );
            break;
        case "h3":
            draggableElement = new H3(
                elementNameInput.value,
                elementSizeWidthInput.value,
                elementSizeHeightInput.value,
                elementTextInput.value,
                elementBgColorInput.value,
                elementFontColorInput.value,
                elementFontSizeInput.value,
                elementFontFamilyInput.value
            );
            break;
        case "h4":
            draggableElement = new H4(
                elementNameInput.value,
                elementSizeWidthInput.value,
                elementSizeHeightInput.value,
                elementTextInput.value,
                elementBgColorInput.value,
                elementFontColorInput.value,
                elementFontSizeInput.value,
                elementFontFamilyInput.value
            );
            break;
        case "h5":
            draggableElement = new H5(
                elementNameInput.value,
                elementSizeWidthInput.value,
                elementSizeHeightInput.value,
                elementTextInput.value,
                elementBgColorInput.value,
                elementFontColorInput.value,
                elementFontSizeInput.value,
                elementFontFamilyInput.value
            );
            break;
        case "h6":
            draggableElement = new H6(
                elementNameInput.value,
                elementSizeWidthInput.value,
                elementSizeHeightInput.value,
                elementTextInput.value,
                elementBgColorInput.value,
                elementFontColorInput.value,
                elementFontSizeInput.value,
                elementFontFamilyInput.value
            );
            break;
        case "p":
            draggableElement = new P(
                elementNameInput.value,
                elementSizeWidthInput.value,
                elementSizeHeightInput.value,
                elementTextInput.value,
                elementBgColorInput.value,
                elementFontColorInput.value,
                elementFontSizeInput.value,
                elementFontFamilyInput.value
            );
            break;
        case "div":
            draggableElement = new Div(
                elementNameInput.value,
                elementSizeWidthInput.value,
                elementSizeHeightInput.value,
                elementTextInput.value,
                elementBgColorInput.value,
                elementFontColorInput.value,
                elementFontSizeInput.value,
                elementFontFamilyInput.value
            );
            break;
        case "span":
            draggableElement = new Span(
                elementNameInput.value,
                elementSizeWidthInput.value,
                elementSizeHeightInput.value,
                elementTextInput.value,
                elementBgColorInput.value,
                elementFontColorInput.value,
                elementFontSizeInput.value,
                elementFontFamilyInput.value
            );
            break;
        case "a":
            const elementLink = toolBox.getToolByName("A URL Link")[0].element;
            const elementLinkInput = elementLink.querySelector("input");

            draggableElement = new A(
                elementNameInput.value,
                elementSizeWidthInput.value,
                elementSizeHeightInput.value,
                elementTextInput.value,
                elementBgColorInput.value,
                elementFontColorInput.value,
                elementFontSizeInput.value,
                elementFontFamilyInput.value,
                elementLinkInput.value
            );
            break;
        case "image":
            const elementSrc = toolBox.getToolByName("Image Source")[0].element;
            const elementSrcInput = elementSrc.querySelector("input");

            const elementAlt = toolBox.getToolByName("Image Alt")[0].element;
            const elementAltInput = elementAlt.querySelector("input");

            draggableElement = new Image(
                elementNameInput.value,
                elementSizeWidthInput.value,
                elementSizeHeightInput.value,
                elementTextInput.value,
                elementBgColorInput.value,
                elementFontColorInput.value,
                elementFontSizeInput.value,
                elementFontFamilyInput.value,
                elementSrcInput.value,
                elementAltInput.value
            );
            break;
        default:
            break;
    }

    return draggableElement;
};

export const addDraggableElementToDOM = (draggableElement) => {
    const workspace = document.getElementById("workspace");

    workspace.appendChild(draggableElement.element);
    console.log("Draggable element added to DOM.");
    console.log("Workspace:\n", workspace);
};

export const createDraggableElements = (draggableElements) => {
    draggableElements.forEach((draggableElement) => {
        // Todo: Add the draggable element to the DOM.
    });
};

export const addDraggableElementsFromLocalStorageToDOM = () => {
    const draggableElements = getDraggableElements();

    for (const draggableElement of draggableElements.values()) {
        console.log(draggableElement);
        console.log(draggableElement.element);

        addDraggableElementToDOM(draggableElement);
    }
};
