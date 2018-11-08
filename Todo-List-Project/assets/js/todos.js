$("li").on("click", function() {
  $(this).toggleClass("toDone");
});

$("li span").on("click", function(event) {
  $(this).parent().fadeOut(750, function(){
    $(this).remove();
  });
  event.stopPropagation();
});