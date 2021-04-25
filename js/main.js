
var popupProducts = document.querySelector(".products-popup");
var productsLink = document.querySelectorAll(".action__btn-bookmarks");
var productsClose = popupProducts.querySelector(".products-close");
var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".write-popup");
var close = popup.querySelector(".popup-close");
var form = popup.querySelector("form");
var popupName = popup.querySelector(".popup-name_type_text");
var popupEmail = popup.querySelector(".popup-email_type_email");
var popupText = popup.querySelector(".popup-textarea_type_textarea");
var isStorageSupport = true;
var storage = "";
var popupMap = document.querySelector(".map-window");
var mapLink = document.querySelector(".map-link");
var mapClose = popupMap.querySelector(".map-close");

try {
  storage = localStorage.getItem("popupName");
} catch (err) {
    isStorageSupport = false;
}

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

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  if (storage) {
    popupName.value = storage;
    popupEmail.focus();
  } else {
    popupName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
  if (!popupName.value || !popupEmail.value || !popupText.value) {
    evt.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("popupName", popupName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
      popup.classList.remove("popup-error");
    }
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("map-show");
});

mapClose.addEventListener("click", function (evt){
  evt.preventDefault();
  popupMap.classList.remove("map-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("map-show")) {
      popupMap.classList.remove("map-show");
    }
  }
});


/* JQuery */

$(document).ready(function(){
  $('.top-slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $(".services__inner-descr").not(":first").hide();
  $(".inner-list__item").click(function() {
    $(".inner-list__item").removeClass("inner-list__item_current").eq($(this).index()).addClass("inner-list__item_current");
    $(".services__inner-descr").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("inner-list__item_current");
});
