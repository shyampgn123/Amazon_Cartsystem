import {carts, deleteFromCart} from 'cart.js';
import {products, updateCartQuantity} from 'product.js'
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
let deliveryOptions = [{
  id:'1',
  deliveryDays:7,
  pay:0
},{
  id:'2',
  deliveryDays:4,
  pay:100
},{
  id:'3',
  deliveryDays:1,
  pay:200
}];  
function formatToINR(number) {
  if (isNaN(number)) {
    return "Invalid number";
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(number);
}
let cartsHtml="";
carts.forEach((cart) =>{
  const pro = cart.name;
  let matchitem;
  products.forEach((product) =>{
    if (pro === product.name) {
      matchitem = product;
    }
  });
  let dOptnId = cart.DeliveryOptionId;
  let doption;
  deliveryOptions.forEach((option) =>{
    if(dOptnId === option.id){
      doption = option;
    }
  });
    let today = dayjs();
let deliverydate = today.add(doption.deliveryDays, 'days')
let stringDate = deliverydate.format('dddd, MMMM D');
  cartsHtml += `<div class="cart pro ${matchitem.name.replace(/\s+/g, '')}">
      <h3 class="d-date">Delivery date : ${stringDate}</h3>
      <div class="cart-product-details">
        <img src="${matchitem.image}">
        <div class="pro-dtl">
          <h3>${matchitem.name}</h3>
          <h3 class="cart-price">${formatToINR(matchitem.price)}</h3>
          <p>Qty: ${cart.quantity}</p>
          <button class="cart-delete" data-cart-dlt="${matchitem.name}">delete</button>
        </div>
        <div class="delivery-options">
          <h4 class="head">Choose an Delivery options</h4>
          ${deliveryDate(matchitem, cart)}
          </div>
      </div>
    </div>`;
});
document.querySelector(".cart-container").innerHTML= cartsHtml;

document.querySelectorAll(".cart-delete")
.forEach((btn) => {
  btn.addEventListener("click", () => {
let prodel = btn.dataset.cartDlt;
 deleteFromCart(prodel);
 document.querySelector(`.${prodel.replace(/\s+/g, '')}`).remove();
  })
});

function deliveryDate(matchitem, cart) {
let deliveryOptionsHtml ="";
  deliveryOptions.forEach((deliveryOption) => {
  let today = dayjs();
let deliverydate = today.add(deliveryOption.deliveryDays, 'days')
let stringDate = deliverydate.format('dddd, MMMM D');

let priceOf = deliveryOption.pay === 0
? "Free"
: `${formatToINR(deliveryOption.pay)} - `;

   const isChecked = deliveryOption.id === cart.DeliveryOptionId;
    deliveryOptionsHtml += `
    <div class="option">
            <input type="radio" ${isChecked ? 'checked' :""} name="${matchitem.name}" class="radio-delivery">
            <div>
            <h4>${stringDate}</h4>  
            <p>${priceOf} delivery</p>
            </div>
            </div>
    `
  })
  return deliveryOptionsHtml;
                       }
