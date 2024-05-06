// items.forEach((item) => {
//     alert(`${item.product_name} || ${item.product_price}`);
// })


let itemAmouage = document.querySelector("#amouage-container");
let itemContainer = document.querySelector("#item-container");
let cartContainer = document.querySelector("#cart-container");

const addToCart = (image, name, price, desc) => {
    // alert(`${image} ||${name} ||${price} ||${desc}`);
    cartItems.push({cart_image: image, cart_name: name, cart_price: price, cart_desc: desc});
    localStorage.setItem("shopping_cart", JSON.stringify(cartItems));
    showCart();
};

const showCart = () => {
    cartContainer.innerHTML = "";
    cartItems.forEach((cart) => {


      cartContainer.innerHTML += `
        <tr>
            <td>
                <img src="${cart.cart_image}" alt="" width="100">
            </td>
            <td>
                ${cart.cart_name}
            </td>
            <td>
                ${cart.cart_price}
            </td>
            <td>
                ${cart.cart_desc}
            </td>
                    
        </tr>
      
         
      `;
         
    // alert(`${cart.cart_name} || ${cart.cart_price}`);
 }) 

};

const showProducts = () => {
    items.forEach((item) => {

        itemContainer.innerHTML += `
        <div class= "col-md-3">
            <div class= "card">
                <img src="${item.product_image}" alt="">
                <div class="card-body">
                <h5 class="card-title">
                    ${item.product_name}</h5>
                <h6>${item.product_price}</h6>
                <p class="card-text">${item.product_desc}</p>
                <button class="btn btn-primary" onclick="addToCart('${item.product_image}','${item.product_name}','${item.product_price}','${item.product_desc}');">
                Add to cart
                </button>
                </div>
               </div>
              </div>  
               
        `;

        // alert(`${item.product_name} || ${item.product_price}`);
    })
};

const productSearch = (e) => {
    itemContainer.innerHTML = ""; 
    const searchProduct = document.querySelector("#search-product").value.toLowerCase();
    const productSearch = items.filter(value =>{
        return value.product_name.toLowerCase().includes(searchProduct);
    });
    if (productSearch.length >0) {
        for (let index = 0; index < productSearch.length; index++){
            itemContainer.innerHTML += `
            <div class= "col-md-3">
                <div class= "card">
                    <img src="${productSearch[index].product_image}" alt="">
                    <div class="card-body">
                    <h5 class="card-title">
                    ${productSearch[index].product_name}</h5>
                    <h6>${productSearch[index].product_price}</h6>
                    <p class="card-text">${productSearch[index].product_desc}</p>
                    <button class="btn btn-primary" onclick="addToCart('${productSearch[index].product_image}','${productSearch[index].product_name}','${productSearch[index].product_price}','${productSearch[index].product_desc}');">
                    Add to cart
                    </button>
                    </div>
                   </div>
                  </div>  
                   
            `;
        }

    }
    else {
        itemContainer.innerHTML = `itemnotfound`;
    }

};



const showAmouage = () => {
    amouageItem.forEach((item1) => {

        itemAmouage.innerHTML += `
        <div class= "col-md-3">
            <div class= "card">
                <img src="${item1.product_image}" alt="">
                <div class="card-body">
                <h5 class="card-title">
                ${item1.product_name}</h5>
                <h6>${item1.product_price}</h6>
                <p class="card-text">${item1.product_desc}</p>
                <button class="btn btn-primary" onclick="addToCart('${item1.product_image}','${item1.product_name}','${item1.product_price}','${item1.product_desc}');">
                Add to cart
                </button>
                </div>
               </div>
              </div>  
               
        `;

        // alert(`${item.product_name} || ${item.product_price}`);
    })
};
showAmouage();
showCart();



