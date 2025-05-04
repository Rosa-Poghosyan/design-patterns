import Document from "../Document";

export default class UnderlineDecorator implements Document {
    constructor(private document: Document) {}
    getContent(): string {
        return `<UNDERLINE>${this.document.getContent()}</UNDERLINE>`;
    }
}