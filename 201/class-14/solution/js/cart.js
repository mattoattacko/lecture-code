'use strict';

var Cart = [];

function loadCart() {
    Cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(Cart);
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
    
    // TODO: Find the table
    var tableBody = document.querySelector('#cart tbody');

    // TODO: Iterate over the items in the cart
        // TODO: Create a TR
        // TODO: Create a TD for the quantity and the item
        // TODO: Add the TR to the TBODY and both TD's to the TR
    for( var i in Cart ) { 
        var tr = document.createElement('tr');
        var xTD = document.createElement('td');
            xTD.textContent = 'x';
        var qTD = document.createElement('td');
            qTD.textContent = Cart[i].quantity;
        var iTD = document.createElement('td');
            iTD.textContent = Cart[i].item;

        tableBody.appendChild(tr);
        tr.appendChild(xTD);
        tr.appendChild(qTD);
        tr.appendChild(iTD);
        console.log("Added Item");
    }
}

function removeItemFromCart() {
    // TODO: When a delete link is clicked, rebuild the Cart array without that item
    // TODO: Save the cart back to local storage
    // TODO: Re-draw the cart table
}

// TODO: Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.



loadCart();

showCart();