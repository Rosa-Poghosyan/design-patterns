import ProductJson from "./ProductJson";
import ProductXml from "./ProductXml";


export default class ProductJsonAdapter implements ProductXml {
    constructor(private product: ProductJson){}
    toXml(): string {
        let xml = '';
        for (let prop in this.product){
            const key = prop as keyof ProductJson;
            if(this.product.hasOwnProperty(prop)){
                xml += `\t<${prop}>${this.escapeXml(this.product[key].toString())}</${prop}>\n`
            }
        }
        return `<product>\n${xml}\n</product>`
    }

    private escapeXml(str: string): string {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
    }
}