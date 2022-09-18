const $btnAnimated = document.querySelector(".btn--animated");
$btnAnimated.addEventListener("animationend", function () {
  $btnAnimated.classList.remove("btn--animated");
});

const $logoAnimated = document.querySelector(".header__logo--animated");
  $logoAnimated.addEventListener("animationend", function () {
  $logoAnimated.classList.remove("header__logo--animated");
});
