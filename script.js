import {carts, addToCart} from 'cart.js';
import {products, updateCartQuantity} from'product.js';
function formatToINR(number) {
  if (isNaN(number)) {
    return "Invalid number";
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(number);
}

let productHtml ='';
products.forEach((product) => {
  productHtml += `
  <div class="product">
   <img class="p-img" src="${product.image}">
   <h4 class="name">${product.name}</h4>
   <div class="rating">
   <img class="r-img" src="/Amazon-images/${product.rating}.jpg">
   <p>${product.rating}</p>
   </div>
   <h3 class="price">${formatToINR(product.price)} </h3>
   <h3 class="added added-${product.name.replace(/\s+/g, '')}">Added</h3>
   <button class="add-cart-btn" data-pro-name="${product.name}">Add To Cart</button> 
  </div>
  `
});
document.querySelector(".products-container").innerHTML=productHtml;
document.querySelectorAll(".add-cart-btn").forEach((btn) =>{
  btn.addEventListener("click", () =>{
    let pro = btn.dataset.proName;
    addToCart(pro);
    updateCartQuantity();
    gsap.from(`.added-${pro.replace(/\s+/g, '')}`, {
     color:"green",
     duration:2,
   });
   
   gsap.from(".cart-btn", {
     backgroundColor:"#FF8E0B",
     duration:0.5,
     color:"black"
   });
   });
});

