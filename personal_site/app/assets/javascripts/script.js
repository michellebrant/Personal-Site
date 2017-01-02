console.log('script loaded')
fontArray = [
"'Abril Fatface', cursive",
"'Slabo 27px', serif",
"'Oswald', sans-serif",
"'Montserrat', sans-serif",
"'Open Sans Condensed', sans-serif",
"'Nova Script', cursive",
"'Indie Flower', cursive",
"'Lobster', cursive",
"'Bungee', cursive",
'"Pacifico", cursive'
]

function changeFonts(){
  bigM = $('.title_card');
  var randomNum = Math.floor(Math.random() * 9);
  font = fontArray[randomNum]
  bigM.css("font-family", font)
}

setInterval(function(){
  changeFonts();
}, 1000)


function changeMFonts(){
  var randomNum = Math.floor(Math.random() * 9);
  font = fontArray[randomNum]
  $('.name').css("font-family", font)
}


$('.name').mouseover(function(){
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
