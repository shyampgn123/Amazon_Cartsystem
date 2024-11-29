export let carts = JSON.parse(localStorage.getItem('carts'));


if (!carts) {
carts = [{
  name:"Intermideate Size Basketball",
  quantity:1,
  DeliveryOptionId:'2'
}];
saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('carts', JSON.stringify(carts));
}
export function addToCart(pro){
  let matchitem;
    carts.forEach((cart) =>{
      if(pro === cart.name){
        matchitem = cart;
      }
    })
    if (matchitem) {
      matchitem.quantity += 1;
    }else{
      carts.push({
        name: pro,
        quantity:1,
        DeliveryOptionId:'1'
      })
    }
    saveToStorage();
}
export function deleteFromCart(prodel){
  let newcart = [];
  carts.forEach((cart) =>{
    if(prodel !== cart.name){
      newcart.push(cart)
    }
  });
  carts = newcart;
  saveToStorage();
}
