function mobileNav() {
  // Mobile nav button
  const navBtn = document.querySelector(".burger");
  const nav = document.querySelector(".mobile-nav");
  const menuIcon = document.querySelector(".nav-icon");

  navBtn.onclick = function() {
    nav.classList.toggle("open");
    navBtn.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  };
}

export default mobileNav;
