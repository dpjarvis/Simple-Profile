$(window).on("scroll", function(){
  var scrollTop = $(this).scrollTop(),
      $hs = 2000,
      $val = ($hs-scrollTop)/$hs;
  $('.halo1').css('opacity', $val);
  $('.halo2').css('opacity', $val);
  $('.msg').css('opacity', $val);
});

 $(document).on('click', '.scrollToB', function (event) {
   event.preventDefault();
   $('html, body').animate({ scrollTop: $(document).height() }, 5000); 
 });

function getRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}			
var canvas = document.getElementById('starfield'),
context = canvas.getContext('2d'),
stars = 600,
colorrange = [0,60,240];
for (var i = 0; i < stars; i++) {
	var x = Math.random() * canvas.offsetWidth;
	y = Math.random() * canvas.offsetHeight,
	radius = Math.random() * 1.2,
	hue = colorrange[getRandom(0,colorrange.length - 1)],
	sat = getRandom(50,100);
	context.beginPath();
	context.arc(x, y, radius, 0, 360);
	context.fillStyle = "hsl(" + hue + ", " + sat + "%, 88%)";
	context.fill();
}
