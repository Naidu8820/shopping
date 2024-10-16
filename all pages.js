document.getElementById('sub').addEventListener('click', function() {
    const minValue = parseInt(document.getElementById('minvalue').value) || 0;
    const maxValue = parseInt(document.getElementById('maxvalue').value) || Infinity;

    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        const price = parseInt(product.querySelector('p').innerText.replace('₹', ''));
        if (price >= minValue && price <= maxValue) {
            product.style.display = 'block'; // Show product
        } else {
            product.style.display = 'none'; 
        }
    });
});
// Initialize cart count
let cartCount = 0;

// Function to update cart count
function updateCartCount() {
  document.getElementById('cart').textContent = `(${cartCount})`;
}

// Add event listener to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
      cartCount++;
      updateCartCount();
      alert(`${button.getAttribute('data-product')} added to cart!`);
  });
});

// Initial call to set cart count to zero
updateCartCount();