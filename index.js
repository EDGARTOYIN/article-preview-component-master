let social = document.querySelector(".social-container");
const button = document.querySelector(".share-button");

button.addEventListener("click", () => {
  social.classList.toggle("active");
  if (social.classList.contains("active")) {
    social.style.visibility = "visible";
    social.style.opacity = "1";
  } else {
    social.style.visibility = "invisible";
    social.style.opacity = "0";
  }
});
