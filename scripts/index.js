import { ToolBox } from "./classes/ToolBox.js";
import { populateToolBox } from "./services/helperService.js";
import {
    actionButtonCreateOnClickHandler,
    actionButtonSaveOnClickHandler,
} from "./services/actionButtonsService.js";
import { loadDraggableElementsFromLocalStorage } from "./services/storageService.js";
import { updateDraggableElements } from "./services/dragService.js";
import { addDraggableElementsFromLocalStorageToDOM } from "./services/elementService.js";

loadDraggableElementsFromLocalStorage();
addDraggableElementsFromLocalStorageToDOM();

updateDraggableElements();

// This toolbox is used to store all the
// tools in the tools panel.
const toolBox = new ToolBox();

populateToolBox(toolBox);

toolBox.addToolsToToolPanel();

console.log(toolBox.tools);

actionButtonCreateOnClickHandler(toolBox);
actionButtonSaveOnClickHandler();

const floatingButton = document.getElementById("floating-btn");
const aside = document.querySelector("aside");
const overlay = document.querySelector(".overlay");

floatingButton.onclick = () => {
    if (aside.classList.contains("open")) {
        overlay.style.zIndex = -1;
    } else {
        overlay.style.zIndex = 9;
    }
    aside.classList.toggle("open");
};

overlay.onclick = () => {
    if (aside.classList.contains("open")) {
        overlay.style.zIndex = -1;
    } else {
        overlay.style.zIndex = 9;
    }
    aside.classList.toggle("open");
};
