window.onscroll = function() {stickyNavBar()}; //Si se hace scroll en la ventana, se activara la función "stickyNavBar()"

let navbar = document.getElementById("navbar");

let sticky = navbar.offsetTop; //The offsetTop property returns the top position (in pixels) relative to the parent. En este caso es la posición de la parte superior del navbar. (Calcula esto contando desde la parte superior de la página hasta esta parte del navbar)

function stickyNavBar (){
  	if (window.pageYOffset >= sticky) { //The pageYOffset property returns the pixels a document has scrolled from the upper left corner of the window. Si esta distancia es superior o igual al top position de navbar (Si el navbar esta en la parte superior o más de la ventana)
    	navbar.classList.add("sticky") //Se agrega esta clase CSS al navbar.
  	} else {
    	navbar.classList.remove("sticky"); //Se remueve esta clase CSS del navbar.
  }
}