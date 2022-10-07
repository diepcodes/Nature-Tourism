document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverPause: true,
  });