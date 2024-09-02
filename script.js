const toggleButton = document.querySelector(".toggle-button") ;
const navbarLinks = document.querySelector(".navbar-links") ;

toggleButton.addEventListener("click", () => {

  console.log("Clicked");
  
  navbarLinks.classList.toggle("active");
  
  toggleButton.classList.toggle("active-navbar")
});