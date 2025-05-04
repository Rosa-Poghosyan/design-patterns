import Document from "./Document";

export default class PlainTextDocument implements Document {
  constructor(private content: string) {}

  getContent(): string {
    return this.content;
  }

}