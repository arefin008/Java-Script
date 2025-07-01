const cart = [
  { item: "Book", price: 20 },
  { item: "Pen", price: 5 },
  { item: "NoteBook", price: 15 },
];

const totalPrice = cart.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log(totalPrice);
