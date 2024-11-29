import {carts} from 'cart.js';

export let products = [{
  name:"Adult Plain Cotton T-Shirt 2-packs",
  price:399,
  rating:4.5,
  image:"/Amazon-images/20241124_212414.jpg"
},
{
  name:"Intermideate Size Basketball",
  price:499,
  rating:4,
  image:"/Amazon-images/20241124_212348.jpg"
},{
  name:"Six White Dinner Plates Set",
  price:299,
  rating:4.5,
  image:"/Amazon-images/20241124_212440.jpg"
},{
  name:"Two - Sloat Toster Black",
  price:999,
  rating:5,
  image:"/Amazon-images/20241124_212455.jpg"
},{
  name:"Eopora Automatic Water Dispenser Pump",
  price:299,
  rating:5,
  image:"/Amazon-images/61tMzUO5pEL._AC_UF894,1000_QL80_FMwebp_.jpg"
},{
  name:"Playful Panda Cuddle Pillow",
  price:999,
  rating:4.5,
  image:"/Amazon-images/PlayfulPanda_02_medium.jpg"
},{
  name:"Miramar Galaxy Crystal Ball Night Light",
  price:599,
  rating:5,
  image:"/Amazon-images/download.jpg"
},{
  name:"Fire Turtle Ocean Wave Projector Ligh",
  price:899,
  rating:4,
  image:"/Amazon-images/bdns_.jpg"
}
];

export let updateCartQuantity = () => {
  let cartqty = 0;
  carts.forEach((cart) => {
    cartqty += cart.quantity;
  });
  document.querySelector(".cart-btn")
    .innerText = `Cart: ${cartqty}`;
};
