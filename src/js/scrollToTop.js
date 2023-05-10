const scroll = (function () {
  const scrollToTop = document.querySelector(".scroll-to-top");

  function scrollFunction() {
    scrollToTop.style.display =
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
        ? "block"
        : "none";
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  scrollToTop.addEventListener("click", topFunction);

  return {
    scrollToTop,
    scrollFunction,
    topFunction,
  };
})();

window.onscroll = function () {
  scroll.scrollFunction();
};
