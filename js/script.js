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



// image zoom
