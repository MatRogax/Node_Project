async function createItem(name, price, quantity) {
  const item = {
    name,
    price,
    quantity,
    subtotal: () => price * quantity,
  };

  return item;
}

export default createItem;
