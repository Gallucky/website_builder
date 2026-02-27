export const getSupportedFontsNames = () => {
    // Extracting the font-family names from the document.fonts set.
    const fontNames = Array.from(document.fonts).map((font) => font.family);

    // Returning a new array containing unique font names / with no duplicates.
    return [...new Set(fontNames)].sort();
};
