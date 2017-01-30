$(document).ready(function () {
// console.log('script loaded')
// fontArray = [
// "'Abril Fatface', cursive",
// "'Slabo 27px', serif",
// "'Oswald', sans-serif",
// "'Montserrat', sans-serif",
// "'Open Sans Condensed', sans-serif",
// "'Nova Script', cursive",
// "'Indie Flower', cursive",
// "'Lobster', cursive",
// "'Bungee', cursive",
// '"Pacifico", cursive'
// ]

// function changeFonts(){
//   bigM = $('.title_card');
//   var randomNum = Math.floor(Math.random() * 9);
//   font = fontArray[randomNum]
//   bigM.css("font-family", font)
// }

// setInterval(function(){
//   changeFonts();
// }, 1000)


// function changeMFonts(){
//   var randomNum = Math.floor(Math.random() * 9);
//   font = fontArray[randomNum]
//   $('.name').css("font-family", font)
// }

$('.name').mouseenter(function(){
  namei = setInterval(function(){
  changeMFonts();
}, 500)

})

$('.name').mouseleave(function(){
  clearInterval(namei)
})

$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 100) {
         $('.learnmore').hide();
     }
     else {
         $('.learnmore').show();
     }
});

$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 800) {
         $('.allme').hide();
     }
     else {
         $('.allme').show();
     }
});

  $(".navbar").hide(); //Hide the navigation bar first


description = $('.description')
description.hide();
description2 = $('.description2')
description2.hide();
description3 = $('.description3')
description3.hide();
description4 = $('.description4')
description4.hide();

$('.tripcontainer').mouseenter(function(event) {
  console.log('it worked')
  $('.tripcontainer').addClass('hover')
  description.show();
});

$('.tripcontainer').mouseleave(function(event) {
  console.log('it worked')
  $('.tripcontainer').removeClass('hover')
  description.hide();
});

$('.foodcontainer').mouseenter(function(event) {
  console.log('it worked')
  $('.foodcontainer').addClass('hover')
  description2.show();
});

$('.foodcontainer').mouseleave(function(event) {
  console.log('it worked')
  $('.foodcontainer').removeClass('hover')
  description2.hide();
});

$('.messangercontainer').mouseenter(function(event) {
  console.log('it worked')
  $('.messangercontainer').addClass('hover')
  description3.show();
});

$('.messangercontainer').mouseleave(function(event) {
  console.log('it worked')
  $('.messangercontainer').removeClass('hover')
  description3.hide();
});

$('.mealcontainer').mouseenter(function(event) {
  console.log('it worked')
  $('.mealcontainer').addClass('hover')
  description4.show();
});

$('.mealcontainer').mouseleave(function(event) {
  console.log('it worked')
  $('.mealcontainer').removeClass('hover')
  description4.hide();
});

});


