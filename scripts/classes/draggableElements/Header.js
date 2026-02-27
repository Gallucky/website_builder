import { DraggableElement } from "./DraggableElements.js";
import { H1 } from "./headers/H1.js";
import { H2 } from "./headers/H2.js";
import { H3 } from "./headers/H3.js";
import { H4 } from "./headers/H4.js";
import { H5 } from "./headers/H5.js";
import { H6 } from "./headers/H6.js";

export class Header {
    static createHeaderElement(
        name,
        level,
        width,
        height,
        text,
        bgColor,
        textColor,
        fontSize,
        fontFamily
    ) {
        switch (level) {
            case 1:
                return new H1(name, width, height, text, bgColor, textColor, fontSize, fontFamily);
            case 2:
                return new H2(name, width, height, text, bgColor, textColor, fontSize, fontFamily);
            case 3:
                return new H3(name, width, height, text, bgColor, textColor, fontSize, fontFamily);
            case 4:
                return new H4(name, width, height, text, bgColor, textColor, fontSize, fontFamily);
            case 5:
                return new H5(name, width, height, text, bgColor, textColor, fontSize, fontFamily);
            case 6:
                return new H6(name, width, height, text, bgColor, textColor, fontSize, fontFamily);
            default:
                return null;
        }
    }

    static initializeHeaders() {
        new H1("", 0, 0, "", "", "", "", "", true);
        new H2("", 0, 0, "", "", "", "", "", true);
        new H3("", 0, 0, "", "", "", "", "", true);
        new H4("", 0, 0, "", "", "", "", "", true);
        new H5("", 0, 0, "", "", "", "", "", true);
        new H6("", 0, 0, "", "", "", "", "", true);
    }
}
