'use strict';

function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product

  var selectElement = document.getElementById('items');
  for( var i in Product.allProducts ) {
      var option = document.createElement('option');
          option.value = Product.allProducts[i].name;
          option.textContent = Product.allProducts[i].name;
      selectElement.appendChild(option);
  }

}

function handleSubmit(event) {

    // TODO: Prevent the page from reloading
    event.preventDefault();

    addSelectedItemToCart();
    saveCartToLocalStorage();
    updateCounter();
    updateCartPreview();
    
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
    var item = document.getElementById('items').value;
    var quantity = document.getElementById('quantity').value;
    new Cart(item,quantity);
}

// TODO: Save the cart to Local Storage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(Cart.allItems));

}

// TODO: Update the cart count in the header
function updateCounter() {
    document.getElementById('itemCount').textContent = "(" + Cart.allItems.length + ")";
}

// TODO: Show the selected item & quantity in the cart div
function updateCartPreview() {
    var item = document.getElementById('items').value;
    var quantity = document.getElementById('quantity').value;
    var cartOutput = document.getElementById('cartContents');
    var itemElement = document.createElement('div');
    itemElement.textContent = quantity + ': ' + item;
    cartOutput.appendChild(itemElement);
}

var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);



populateForm();
