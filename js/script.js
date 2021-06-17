$(function () {
  $("#accordion").accordion();

});

$('.close-popup').click(function (event) {
  $(".popup").addClass('close');
});



//////////////togglecheck////////////////////

$(".checkbox1").click(function () {
  $(".checkbox1").toggleClass("checkbox1-done");
  $(".check-accordion1").toggleClass("check-accordion1-done");

});
$(".checkbox2").click(function () {
  $(".checkbox2").toggleClass("checkbox2-done");
  $(".check-accordion2").toggleClass("check-accordion2-done");
});

$(".checkbox3").click(function () {
  $(".checkbox3").toggleClass("checkbox3-done");
  $(".check-accordion3").toggleClass("check-accordion3-done");
});

$(".checkbox4").click(function () {
  $(".checkbox4").toggleClass("checkbox4-done");
  $(".check-accordion4").toggleClass("check-accordion4-done");
});


$(".checkbox5").click(function () {
  $(".checkbox5").toggleClass("checkbox5-done");
  $(".check-accordion5").toggleClass("check-accordion5-done");
});
/////////////////lightswitch////////////////

$(document).on("click", "#switch", function (event) {
  event.preventDefault();

  console.log();

  if ($('body').hasClass('darkmode')) {
    $('body').removeClass('darkmode');
    console.log('uit')
    $('.switch-knop').animate({ left: "50px", });



  } else {
    $('body').addClass('darkmode');
    console.log('aan')
    $('.switch-knop').animate({ left: "4px", });
  }
});


