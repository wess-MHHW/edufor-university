function showMenu() {
  let navLinks = document.getElementById("nav__links");
  navLinks.style.right = "0";
}

function hideMenu() {
  let navLinks = document.getElementById("nav__links");
  navLinks.style.right = "-200px";
  console.log(navLinks);
}
