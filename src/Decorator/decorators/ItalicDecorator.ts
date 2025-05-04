import Document from "../Document";

export default class ItalicDecorator implements Document {
    constructor(private document: Document) {}

    getContent(): string {
        return `<ITALIC>${this.document.getContent()}</ITALIC>`;
    }

}