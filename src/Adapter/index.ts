import ProductJson from "./ProductJson";
import ProductJsonAdapter from "./ProductJsonAdapter";

const jsonProduct: ProductJson = {
    name: "Chair",
    price: 129.99
};
const adapter = new ProductJsonAdapter(jsonProduct);
console.log(adapter.toXml());