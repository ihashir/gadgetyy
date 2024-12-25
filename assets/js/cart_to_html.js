let http = new XMLHttpRequest();
http.open('get', '/assets/productsData/productsData.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
    let cartList = document.querySelector(".cartList")
    let cartItem = "" 
      let products = JSON.parse(this.responseText);
      if(cart.length > 0){
        cart.forEach(item => {
            
            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            let discount = Math.floor(((info.price - info.discountedPrice) / info.price) * 100);
            cartItem = cartItem + `<div class="cartItem" id="${info.id}">
                        <div class="product-img" style="background-image:url(${info.image});">
                            <span class="discount">-${discount}%</span>
                        </div>
                        <div class="quantityControl">
                            <button onclick="decrease_quantity(${info.id})">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button onclick="add_quantity(${info.id})">+</button>
                        </div>
                        <p class="price">PKR ${info.discountedPrice}</p>
                        <p class="totalPrice">PKR ${info.discountedPrice * item.quantity}</p>
                        <button onclick="remove_cart(${info.id}, ${item.quantity})" class="removeItem"><span></span></button>
                     </div>`
            
        })
        cartList.innerHTML = cartItem
        }
        
   }

}


const remove_cart = (product_id , qty) =>{
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        cart.splice(positionItemInCart, 1);
        
        document.querySelector(`[id='${product_id}']`).remove()
        localStorage.setItem("cart", JSON.stringify(cart))
        cartQty -=qty
        localStorage.setItem('cartQty', cartQty);
        updateCartQty()
        calculateTotal()
    }
   
}
