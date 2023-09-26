$(document).ready(function () {
  const eHFn = () => {
    $(".eH-Area").each(function () {
      $(this).find(".eH").matchHeight();
      $(this).find(".eH2").matchHeight();
    });
  };
  eHFn();
  $(document).on("click scroll resize", function () {
    eHFn();
  });
});
 
$('.ltn__blog-img').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  removalDelay: 300,
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
  },
  zoom: {
    enabled: true,
    duration: 300 // don't foget to change the duration also in CSS
  }
});
