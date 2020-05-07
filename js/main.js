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


	//LOGİN SAYFASI
	var url_string = window.location.search;
	urlParams = new URLSearchParams(url_string);
	product = urlParams.get('durum');
	if(product=="hatali"){
		$("#hatali").show(); 
	}
	else
	{
		$("#hatali").hide(); 
	}
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

//MAP
function mapGuncelle() {
	var map = document.getElementById("map");
	map.style.height = map.offsetWidth+"px";
}
mapGuncelle();
setInterval("mapGuncelle()", 0);

//ŞEHRİM DETAY SAYFASI

var url_string = window.location.search;
urlParams = new URLSearchParams(url_string);
yer = urlParams.get('yer');
if(yer == null || (yer!="mevlanaTurbesi" && yer != 'alaeddinCami' && yer != 'inceMinareliMedrese' && yer != 'karatayMedresesi' && yer != 'kilistraAntikKenti'
	&& yer != 'kizorenObrukGolu' && yer != 'kubadabad' && yer != 'makeGolu' && yer != 'nasreddinHocaTurbesi' && yer != 'selimiyeCami'
	 && yer != 'silleKoyu' && yer != 'tarihiHisarlikCami' && yer != 'yerkopruSelalesi' && yer != 'zengibarKalesi')){
	alert("Anasayfaya Yönlendiriliyorsunuz");
	window.location = "index.html";
}
document.getElementById(yer).style.display = "block";
