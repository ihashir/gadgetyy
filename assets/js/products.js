let http = new XMLHttpRequest();
http.open('get', '/assets/productsData/productsData.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let products = JSON.parse(this.responseText);
      let output = "";
      let latestCollection = "";
      for(let item of products){
         let discount = Math.floor(((item.price - item.discountedPrice) / item.price) * 100);
         
         const baseUrl = item.image.substring(0, item.image.lastIndexOf('.'));
        
        
        const newUrl = `${baseUrl}_d.webp?maxwidth=750`;

         output += `<a href="/product/?id=${item.url}">
                     <div class="product">
                        <div class="product-img" style="background-image:url('${newUrl}');">
                            <span class="discount">-${discount}%</span>
                            <div class="icons">
                                <i class="fa fa-heart"></i>
                                <i class="fa fa-eye"></i>
                            </div>
                            <button onclick="add_to_cart('${item.id}', event , 1)" class="add-to-cart">Add To Cart</button>
                        </div>
                        <p class="product-name">
                            ${item.title}
                        </p>
                        <p class="product-price">PKR ${item.discountedPrice} <s>${item.price}</s></p>
                        <span class="rating">
                            <i class="fa fa-star checked"></i>
                            <i class="fa fa-star checked"></i>
                            <i class="fa fa-star checked"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <span class="review-count">(88)</span>
                        </span>
                    </div>
                    </a>
                    `;


      }
      document.querySelector(".slider-products").innerHTML = output;
      document.querySelector(".all-products").innerHTML = output;
   }
}