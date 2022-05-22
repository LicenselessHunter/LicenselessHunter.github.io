let slideIndex = 1; /*Este es el índice de slide, por defecto estara puesto el 1 que es el primer slide que se mostrara al acceder a la página. Recordar que como es una variable let esta variable esta propensa a cambio. Si el slideIndex se vuelve 2, entonces será su nuevo valor. Al momento en que se vuelva a leer este archivo js, se leera el slideIndex como un 2, no como un 1.*/


showSlides(slideIndex);

/*Función para las flechitas*/
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/*Función para las puntitos*/
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} /*Si al momento de usar la flecha derecha para cambiar la imagen y n queda como un número superior a la capacidad máxima de los slides, aqui se corrige y se devuelve al 1, dejandolo con la primera imágen.*/

  if (n < 1) {slideIndex = slides.length} /*Es lo mismo que la instrucción de arriba, pero para el caso en que n queda como negativo al usar la flecha izquierda. Aqui se corrige y se iguala al length de los slides dejandolo en la última imágen. */

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  /*Se recorre toda la lista de los slides y se dejan invisibles. Esto se hace para evitar que dos o más slides queden visibles.*/
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); /*Se recorre toda la lista de los dots y se dejan desactivados para evitar, por ejemplo, que hayan 2 dots activados o más al mismo tiempo.*/
  }


  slides[slideIndex-1].style.display = "block"; /*Se cambia de display 'none' 'block' para que se muestre el actual slide*/
  dots[slideIndex-1].className += " active"; /*Se activa el punto de la imagen actual*/
}

