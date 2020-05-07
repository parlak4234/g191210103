//TOP HOME
$(document).ready(function(){
	if(window.pageYOffset < 100){
		$('.back-to-top').hide();
	}
	menuKontrol();

	$(window).scroll(function(){
		var sinir = 100;

		if ($(this).scrollTop() > sinir) { 
			$('.back-to-top').fadeIn();
		} else { 
			$('.back-to-top').fadeOut();
		}
	});

	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

	//Site İçi Yönlendirme
	  $("a").on('click', function(event) {
	    if (this.hash !== "") {
	      event.preventDefault();
	      var hash = this.hash;
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){
	        window.location.hash = hash;
	      });
	    } 
	  });
});

//SABİT HEADER
window.onscroll = function() {menuKontrol()};

var menu = document.getElementById("menuBar");
var sticky = menu.offsetTop;

function menuKontrol() {
	if (window.pageYOffset > sticky) {
		menu.classList.add("sticky");
	} else {
		menu.classList.remove("sticky");
	}
}
