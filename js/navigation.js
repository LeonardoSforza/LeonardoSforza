const ham = document.getElementById("ham");
const hamDown = document.getElementById("ham-down");
const hamUp = document.getElementById("ham-up");
const navSlider = document.getElementById("navSlider");

ham.addEventListener("click", function () {
  navSlider.classList.toggle("show");
  ham.classList.toggle("hide-nav");
  hamUp.classList.toggle("close-up");
  hamDown.classList.toggle("close-down");
});
