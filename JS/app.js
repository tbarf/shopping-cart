// # shopping-cart
// ## Getting Started
// 1. Fork and Clone this repository.
// 2. Create the project file structure.
// You are tasked to build and design the front-end of a new highly-sophisicated locally-built powerhouse meme-tastic shopping cart named... **ShoppingCart.io**.
// ## Your Tasks
// 1. Reproduce the layout.
// 2. Generate the items in the cart with the data given to you. **Item data should not be hardcoded!**
// 3. Find images that match the product
// 4. When clicking on the product name, it will show and hide (toggle) the description of the product.
// 5. For the subtotal, add up the total price of all items. **This should not be hardcoded!**
// *note: you can use the `cart.svg` file as your image, just include it in your HTML markup*


var itemDB = [{
    image: "https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/ae4ef8dc-b6c6-4b23-b2e7-9cbe0d169ea1.jpg._CB285945496__SR300,300_.jpg",
    product: "Finger Toothbrush",
    description: "A helping hand to a nicer smile.",
    price: 1.11

}, {
    image: "https://images-na.ssl-images-amazon.com/images/I/41KB1X0G6QL.jpg",
    product: "Barry Manilow's Greatest Hits Collection Vol 1",
    description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.",
    price: 39.57
}, {
    image: "https://cdn.trendhunterstatic.com/phpthumbnails/253/253437/253437_1_230c.jpeg",
    product: "Ramen Oreos",
    description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.",
    price: 8.88
}, {
    image: "https://images-na.ssl-images-amazon.com/images/I/71HSSN0kgvL._SY355_.jpg",
    product: "Woof Washer 360",
    description: "Wash your dirty stinky mutt in minutes! Water and dog not included.",
    price: 9.29
}, {
    image: "https://images-na.ssl-images-amazon.com/images/I/71uznBnmcuL._SX355_.jpg",
    product: "Sauna Pants",
    description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.",
    price: 2.33
}, {
    image: "https://tctechcrunch2011.files.wordpress.com/2009/02/l10048158.jpg?w=620&h=706",
    product: "Hug Me Pillow",
    description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.",
    price: 599.99
}];
console.log(itemDB);
var main = document.body;

var mainDiv = document.createElement('div');
mainDiv.className = "container";
main.appendChild(mainDiv);

for (var i = 0; i < itemDB.length; i++) {

var mediaDiv = document.createElement('div');
mediaDiv.className = "media";
mainDiv.appendChild(mediaDiv);

var img = document.createElement('img');
img.className = "img";
img.src = itemDB[i].image;
mediaDiv.appendChild(img);


var ChildDiv = document.createElement('div');
ChildDiv.className = "cartItem";
mediaDiv.appendChild(ChildDiv);



var productBox = document.createElement("div");
productBox.className = "product";
productBox.textContent =itemDB[i].product;
ChildDiv.appendChild(productBox);


// var productBox = document.createElement("div");
// productBox.className = "product";
// var h1 = document.createElement("h1");
// var t = document.createTextNode("name: " + itemDB[i].product);
//  h1.appendChild(t);
// ChildDiv.appendChild(productBox);


var descriptionBox = document.createElement("div");
descriptionBox.className = "description";
descriptionBox.textContent =  itemDB[i].description;
productBox.appendChild(descriptionBox);

var priceBox = document.createElement("div");
priceBox.className = "price";
priceBox.textContent = "$" + itemDB[i].price;
ChildDiv.appendChild(priceBox);



}
console.log(Object.keys(itemDB));

var product = document.getElementsByClassName("product");
console.log(product);
for (var i = 0; i < product.length; i++) {
    product[i].addEventListener('click', doSomething, false);
}

function doSomething(e) {
    var clickedItem = this.querySelectorAll(".description")[0];
     if(clickedItem.style.display === "none"){
    clickedItem.style.display = "block";
  }else{
    clickedItem.style.display = "none";
  }
}

//  pulls out the price and dumps into an array
function getFields(input, field) {
    // Function-level strict mode syntax
  'use strict';
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}
var result = getFields(itemDB, "price");

console.log(result);


// adds array
// var sum = result.reduce((a, b) => a + b, 0); this works too
var sum = result.reduce(add, 0);
function add(a, b) {
    return a + b;
}

console.log(sum);

var subtotal = document.createElement("div");
subtotal.id ="subtotal";
subtotal.textContent = "Subtotal: ";
mediaDiv.insertAdjacentElement("afterend",subtotal);


var priceAdded = document.createElement('span');
priceAdded.id = "priceAdded";
priceAdded.innerHTML ="$" + sum;
subtotal.appendChild(priceAdded);

// step by step break down of how to add an array

// function sumArray(array) {
//   for (
//     var
//       index = 0,              // The iterator
//       length = array.length,  // Cache the array length
//       sum = 0;                // The total amount
//       index < length;         // The "for"-loop condition
//       sum += array[index++]   // Add number on each iteration
//   );
//   return sum;
// }

// var totalPrice = sumArray(result);
// console.log(totalPrice);

