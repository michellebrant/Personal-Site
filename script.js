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
"'Bungee', cursive"
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



