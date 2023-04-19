// define
const showOnPx = 300;
const backToTop = document.querySelector(".back-to-top");

const scrollToTop = () => {
  return document.documentElement || document.body;
};

// kondisi tombol backToTop muncul
document.addEventListener("scroll", () => {
  if (scrollToTop().scrollTop > showOnPx) {
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }
});

// Memberikan fungsi pada tombol
const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};
backToTop.addEventListener("click", goToTop);
