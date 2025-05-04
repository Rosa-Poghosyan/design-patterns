import Document from "../Document";

export default class HighlightDecorator implements Document {
    constructor(private document: Document) {}

    getContent(): string {
        return `<HIGHLIGHT>${this.document.getContent()}</HIGHLIGHT>`;
    }

}