$(function () {
  $("#accordion").accordion();

});


$('.close-popup').click(function (event) {
  $(".popup").addClass('close');
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


