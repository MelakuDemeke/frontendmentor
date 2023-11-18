var rate = 0;
$(".number").click(function (e) {
  removeEffect();
  var selected = $(this).find("p").text();
  rate = selected;
  applayEffect(selected);
});

$("button").click(function (e){
    if(rate != 0){
        $(".rate-value").text("you selected "+rate+" out of 5")
        $(".sucess").removeClass('hide');
        $(".rate").addClass('hide');
    }
})

function removeEffect() {
  for (var i = 0; i < 6; i++) {
    $("#" + i).removeClass("second-hover-button");
    $("#" + i).removeClass("hover-button");
  }
}

function applayEffect(selected){
    $("#" + selected).toggleClass("hover-button");
    if (selected > 1) {
      var before = selected - 1;
      $("#" + before).toggleClass("second-hover-button");
    }
}