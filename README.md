# Website Builder

A drag-and-drop browser-based website builder that lets users create, style, position, and save web elements — all without writing code.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Architecture](#architecture)
- [Supported Elements](#supported-elements)
- [License](#license)

---

## Overview

Website Builder is a rich interactive application built with vanilla HTML, CSS, and JavaScript using an ES Modules OOP architecture. Users can drag elements onto a canvas, apply styling through a toolbox, change fonts, and save their work — all in the browser. The project demonstrates advanced front-end concepts including drag-and-drop, inheritance-based class hierarchies, and service-based modular design.

---

## Features

- 🖱️ Drag-and-drop placement of elements on a canvas
- 🧱 Support for multiple HTML element types (headings, paragraphs, links, images, divs, spans)
- 🎨 Toolbox for styling: font, size, color, and more
- 🔤 Multiple supported web fonts
- 💾 Save/load canvas state via `localStorage`
- ℹ️ Info button with usage hints
- 🖱️ Custom cursor styles

---

## Demo

Open `index.html` directly in your browser — no build step or server required.

> **Note:** The app uses ES Modules (`type="module"`). Serve via a local development server (e.g., VS Code Live Server, `npx serve`) for full compatibility.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Canvas structure and element templates |
| CSS3 | Builder UI, toolbox, and element styles |
| JavaScript (ES6+ / ES Modules) | OOP classes, drag logic, services, storage |

---

## Project Structure

```
website-builder/
├── index.html
├── scripts/
│   ├── index.js                                # App entry point
│   ├── classes/
│   │   ├── Tool.js                             # Tool class
│   │   ├── ToolBox.js                          # Toolbox manager
│   │   ├── ToolType.js                         # Tool type definitions
│   │   └── draggableElements/
│   │       ├── DraggableElements.js            # Base draggable element class
│   │       ├── Header.js                       # Header base class
│   │       ├── Image.js                        # Image element
│   │       ├── A.js                            # Anchor/link element
│   │       ├── Div.js                          # Div element
│   │       ├── P.js                            # Paragraph element
│   │       ├── Span.js                         # Span element
│   │       └── headers/
│   │           ├── H1.js – H6.js               # Heading level subclasses
│   └── services/
│       ├── dragService.js                      # Drag-and-drop logic
│       ├── elementService.js                   # Element creation and management
│       ├── toolService.js                      # Toolbox interaction logic
│       ├── actionButtonsService.js             # Save/load/clear button actions
│       ├── storageService.js                   # localStorage persistence
│       ├── supportedFontsService.js            # Font loading and switching
│       └── helperService.js                    # General utility functions
├── styles/
│   ├── general.css                             # Base/reset styles
│   ├── style.css                               # Page-level styles
│   ├── website_builder.css                     # Builder canvas styles
│   ├── infoButton.css                          # Info button styles
│   ├── supported_fonts.css                     # Font definitions
│   ├── shiny_button.css                        # Button component styles
│   └── tools/
│       ├── tool.css                            # General tool styles
│       ├── input.css                           # Input tool styles
│       ├── select.css                          # Select tool styles
│       ├── size.css                            # Size control styles
│       └── specific_styling.css                # Per-element tool overrides
```

---

## Getting Started

1. Clone or download the repository.
2. Serve the project with a local server:

```bash
npx serve .
# or use VS Code's Live Server extension
```

3. Open the provided localhost URL in your browser.

---

## Architecture

The project uses an OOP, ES Modules architecture:

### Classes
- **`DraggableElements`** — base class for all placeable elements; handles drag behavior and shared styling
- **`Header` / `H1`–`H6`** — heading element hierarchy using inheritance
- **`Tool` / `ToolBox` / `ToolType`** — toolbox components for managing styling controls

### Services
- **`dragService`** — manages drag-and-drop events and canvas placement
- **`elementService`** — creates and manages element instances
- **`toolService`** — connects tool inputs to element styles
- **`actionButtonsService`** — handles save, load, and clear canvas actions
- **`storageService`** — abstracts all `localStorage` read/write operations
- **`supportedFontsService`** — dynamically loads and applies web fonts
- **`helperService`** — shared utility functions used across services

---

## Supported Elements

| Element | Description |
|---|---|
| H1 – H6 | Heading levels |
| P | Paragraph text |
| Span | Inline text |
| A | Anchor / hyperlink |
| Div | Container block |
| Image | Image element |

---

## License

This project is intended for educational and portfolio purposes.
