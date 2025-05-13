// document.addEventListener("DOMContentLoaded", function () {
//   const hamburgerMenu = document.getElementById("hamburger-menu");
//   const navbarNav = document.querySelector(".navbar-nav");

//   // Toggle the 'active' class on the navbar when the hamburger menu is clicked
//   hamburgerMenu.addEventListener("click", function () {
//     navbarNav.classList.toggle("active");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navbarNav = document.querySelector(".navbar-nav");

  // Toggle the 'active' class on the navbar when the hamburger menu is clicked
  hamburgerMenu.addEventListener("click", function (e) {
    e.stopPropagation(); // Mencegah event klik pada hamburger menu memicu event di document
    navbarNav.classList.toggle("active");
  });

  // Klik di luar navbar untuk menutup menu
  document.addEventListener("click", function (e) {
    if (!navbarNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
});


document.querySelector('a[href="#about"]').addEventListener("clink", function (e) {
    e.preventDefault();
    const target = document.querySelector("#about");
    const offset = 150;
    const targetPosition = target.offsetTop - offset;

    window.scrollTo({
        top: targetPosition, behavior: "smooth"
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function changeActiveSection() {
        let scrollY = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${section.id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", changeActiveSection);
    changeActiveSection(); // Panggil langsung biar navbar langsung aktif saat load
});