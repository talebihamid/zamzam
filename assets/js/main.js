function imgSlider(item) {
  document.querySelector(".zamzam").src = item;
}
function changeBgColor(color) {
  const section = document.querySelector(".section");
  section.style.background = color;
}
function toggleMenu() {
  const toggle_menu = document.querySelector(".toggle_menu");
  toggle_menu.classList.toggle("active");
  const navigation = document.querySelector(".navigation");
  navigation.classList.toggle("active");
}
