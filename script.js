let cart = [];

function addToCart(product) {
  cart.push(product);
  alert(`${product.name} به سبد خرید شما اضافه شد!`);
  console.log(cart);
}

document.querySelectorAll('.product button').forEach((button, index) => {
  button.addEventListener('click', () => {
    const productName = button.previousElementSibling.previousElementSibling.textContent;
    addToCart({ name: productName });
  });
});
