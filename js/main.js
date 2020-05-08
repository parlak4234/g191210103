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
	$("#buraya").on('click', function(event) {
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

	//ŞEHRİM DETAY SAYFASI

	var url_string = window.location.search;
	urlParams = new URLSearchParams(url_string);
	yer = urlParams.get('yer');

	if(window.location.pathname.split('/')[3] == "sehrim-detay.html"){
		if(yer == null || (yer!="mevlanaTurbesi" && yer != 'alaeddinCami' && yer != 'inceMinareliMedrese' && yer != 'karatayMedresesi' && yer != 'kilistraAntikKenti'
			&& yer != 'kizorenObrukGolu' && yer != 'kubadabad' && yer != 'makeGolu' && yer != 'nasreddinHocaTurbesi' && yer != 'selimiyeCami'
			&& yer != 'silleKoyu' && yer != 'tarihiHisarlikCami' && yer != 'yerkopruSelalesi' && yer != 'zengibarKalesi')){
			alert("Anasayfaya Yönlendiriliyorsunuz");
		window.location = "index.html";
	}
}

document.getElementById(yer).style.display = "block";
var slider = document.getElementsByClassName(yer);
var i;
for (i = 0; i < slider.length; i++) {
	slider[i].classList.add("mySlides");
}

var dot = document.getElementsByClassName(yer+"d");
var j;
for (j = 0; j < dot.length; j++) {
	dot[0].click();
	dot[j].classList.add("dot");
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
	var map = document.getElementsByClassName("map");
	for(var i=0; i< map.length; i++){
		map[i].style.height  = map[i].offsetWidth+"px";;
	}
}
mapGuncelle();
setInterval("mapGuncelle()", 0);

//Video
//MAP
function videoGuncelle() {
	var video = document.getElementsByClassName("video");
	for(var i=0; i< video.length; i++){
		video[i].style.height  = video[i].offsetWidth+"px";;
	}
}
videoGuncelle();
setInterval("videoGuncelle()", 0);