import { dragElement } from "./dragService.js";

let draggableElements = [];

export const getDraggableElements = () => draggableElements;

export const addDraggableElement = (draggableElement) => {
    draggableElements.push(draggableElement);
};

export const removeDraggableElement = (draggableElementName) => {
    draggableElements.delete(draggableElementName);
};

export const loadDraggableElementsFromLocalStorage = () => {
    const exportedData = JSON.parse(localStorage.getItem("draggableElements"));
    const workspace = document.getElementById("workspace");
    console.log(exportedData);

    if (exportedData) {
        exportedData.forEach((storedArrayItem) => {
            const elementParent = document.createElement("div");
            elementParent.innerHTML = storedArrayItem.outerHTML;
            const restoredElement = elementParent.firstChild;
            restoredElement.innerHTML = storedArrayItem.innerHTML;
            restoredElement.remove();

            restoredElement.dataset.appliedDragFunctionality = true;
            dragElement(restoredElement);

            const draggableElement = storedArrayItem.draggableElement;
            draggableElement.element = restoredElement;
            draggableElements.push(draggableElement);
            workspace.appendChild(restoredElement);
        });
    }
};

export const saveDraggableElementsToLocalStorage = () => {
    const toSave = [];
    draggableElements.forEach((draggableElement) => {
        toSave.push({
            draggableElement: draggableElement,
            outerHTML: draggableElement.element.outerHTML,
            innerHTML: draggableElement.element.innerHTML,
        });
    });

    localStorage.setItem("draggableElements", JSON.stringify(toSave));
};
