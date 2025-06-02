import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const cart = [];

console.log("Welcome to the your shopee Cart");

const item1 = await createItem("smartWatch", 159.99, 1);
const item2 = await createItem("book: Clean code", 89.99, 3);

await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

await cartService.DeleteItem(cart, item2.name);

await cartService.displayCart(cart);

const total = await cartService.CalculateTotal(cart);
console.log("🛒 Shopee Cart Total($): ", total);