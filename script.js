var mob_menu_btn = document.querySelector(".fa-bars")
var mob_menu = document.querySelector(".mob-menu")
var mob_menu_close_btn = document.querySelector(".fa-close")
var mob_menu_overlay = document.querySelector(".mob-menu-overlay")

mob_menu_btn.addEventListener("click",()=>{
    mob_menu.style.right = '0'
    mob_menu_overlay.style.opacity = '1'
    mob_menu_overlay.style.pointerEvents = 'all'
})
mob_menu_close_btn.addEventListener("click",()=>{
    mob_menu.style.right = '-70vw'
    mob_menu_overlay.style.opacity = '0'
    mob_menu_overlay.style.pointerEvents = 'none'
})

mob_menu_overlay.addEventListener("click",()=>{
    mob_menu.style.right = '-70vw'
    mob_menu_overlay.style.opacity = '0'
    mob_menu_overlay.style.pointerEvents = 'none'
})


// for home page 
var img = document.querySelector(".content img")

 img.addEventListener('load', () => {
    img.classList.add('animate');
});


if (img.complete) {
    img.dispatchEvent(new Event('load'));
}

// for slider 



function leftScroll() {
    
    document.querySelector(".slider-products").scrollBy({
      left: -400,
      behavior: "smooth"
    });
  }

  function rightScroll() {
    document.querySelector(".slider-products").scrollBy({
      left: 400,
      behavior: "smooth"
    });
  }

  