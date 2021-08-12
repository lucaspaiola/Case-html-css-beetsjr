/* Slides */
if (window.SimpleSlide) {

	new SimpleSlide({
		slide: "convenios",
		time: 4000,
      nav: true
	});

	new SimpleSlide({
		slide: "consultorio",
		time: 4000,
      nav: true
	});

}

/* Menu hamburguer */
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
	if(event.type === 'touchstart') event.preventDefault();
	const nav = document.getElementById('nav');
	nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);