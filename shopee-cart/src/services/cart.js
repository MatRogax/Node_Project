async function addItem(userCart, item) {
  userCart.push(item);
}

async function removeItem(userCart, item) {
  const index = userCart.findIndex((i) => i.name === item.name);
  if (index === -1) {
    console.log("Item not found in cart.");
    return;
  }

  if (userCart[index].quantity > 1) {
    userCart[index].quantity -= 1;
  } else if (userCart[index].quantity === 1) {
    userCart.splice(index, 1);
  }
}

async function DeleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function CalculateTotal(userCart) {
  let total = userCart.reduce((total, item) => total + item.subtotal(), 0);
  return total;
}

async function displayCart(userCart) {
  console.log("shopee cart:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - ${item.price} x ${item.quantity} = ${item
        .subtotal()
        .toFixed(2)}`
    );
  });
}

export {
  addItem,
  removeItemByIndex,
  removeItem,
  DeleteItem,
  CalculateTotal,
  displayCart,
};
