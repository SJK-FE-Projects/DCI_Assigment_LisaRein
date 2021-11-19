
if ((scrollDiff < 1) && (theScrollDiv.hasClass("hover"))) {
  $("footer).addClass("move-up");
} else {

  if (!$('footer').is(":hover")) {
    $("footer").removeClass("move-up");
  }
}