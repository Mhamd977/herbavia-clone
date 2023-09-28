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

  if ($("body").magnificPopup != undefined) {
    $(".popup").magnificPopup({
      type: "image",
      removalDelay: 300,
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      zoom: {
        enabled: true,
        duration: 300,
      },
    });
  }

  $(".ltn__shop-details-small-img .single-small-img").on("click", function () {
    let targetImg = $(this).find("img").attr("src");
    $(".single-large-img").find("img").attr("src", targetImg);
    $(".single-large-img").find("img").attr("xoriginal", targetImg);
  });
  

  $(".xzoom").xzoom({
    zoomWidth: 500,
    zoomHeight: 500,
    Xoffset: 15
  });
});





