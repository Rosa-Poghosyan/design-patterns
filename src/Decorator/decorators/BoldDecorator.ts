import Document from "../Document";

export default class BoldDecorator implements Document {
  constructor(private document: Document) {}

  getContent(): string {
    return `<BOLD>${this.document.getContent()}</BOLD>`;
  }
}