const $btnAnimated = document.querySelector(".btn--animated");
$btnAnimated.addEventListener("animationend", function () {
  $btnAnimated.classList.remove("btn--animated");
});
