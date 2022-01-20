const mobileMenu = document.getElementById("mobile-menu");
const hamburgerBtn = document.getElementById("hamburger-btn");

// Functions
const toggleMobileMenu = (e) => {
  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    mobileMenu.style.display = "block";
    mobileMenu.classList.remove("fade-out");
    mobileMenu.classList.add("fade-in");
  } else {
    mobileMenu.classList.remove("fade-in");
    mobileMenu.classList.add("fade-out");
    setTimeout(() => {
      mobileMenu.style.display = "none";
    }, 100);
  }
};

// Event Listeners
hamburgerBtn.addEventListener("click", toggleMobileMenu);
