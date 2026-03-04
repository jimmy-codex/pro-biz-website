const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
const whatsappBtn = document.querySelector(".btn");
const businessNumber = "25468164795"; // replace with actual number

whatsappBtn.href = `https://wa.me/${businessNumber}?text=Hi, I saw your website and I want to learn more!`;