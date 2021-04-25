var popupProducts = document.querySelector(".products-popup");
var productsLink = document.querySelectorAll(".action__btn-bookmarks");
var productsClose = popupProducts.querySelector(".products-close");

productsLink.forEach(function(btn){
  btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupProducts.classList.add("products-popup-show");
});
});

productsClose.addEventListener("click", function (evt){
  evt.preventDefault();
  popupProducts.classList.remove("products-popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupProducts.classList.contains("products-popup-show")) {
      popupProducts.classList.remove("products-popup-show");
    }
  }
});