import PlainTextDocument from "./PlainTextDocument";
import BoldDecorator from "./decorators/BoldDecorator";
import ItalicDecorator from "./decorators/ItalicDecorator";
import HighlightDecorator from "./decorators/HighlightDecorator";
import Document from "./Document";

let myDoc: Document = new PlainTextDocument("Hello World");
myDoc = new BoldDecorator(myDoc);
myDoc = new ItalicDecorator(myDoc);
myDoc = new HighlightDecorator(myDoc);

console.log(myDoc.getContent());
