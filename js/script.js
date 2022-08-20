// スクロールしてフワッと表示
$(function () {
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

// スライダー 
window.addEventListener('load', function () {
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    speed: 200,
  });
}, false);
