

var cart = []
var cartQty = 0
if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
  
  }
if(localStorage.getItem('cartQty')){
    cartQty = JSON.parse(localStorage.getItem('cartQty'));
    updateCartQty()
    
  }
setTimeout(() => {
    calculateTotal()
}, 100);
const add_to_cart = (product_id , e, productQty) => {
    cartQty = cartQty + productQty
    updateCartQty()
    console.log(product_id)
    e.stopPropagation(); 
    e.preventDefault(); 
    
   

    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            quantity: productQty
        }];
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            quantity: productQty
        });
    }else{
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + productQty;
    }
    
   
    localStorage.setItem('cart', JSON.stringify(cart));
    
    localStorage.setItem('cartQty', cartQty);
    console.log(cart)
}

