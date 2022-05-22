/*Variables que representan las 6 imagenes de personas en la página*/
const image_person1 = document.querySelector('#image1');
const image_person2 = document.querySelector('#image2');
const image_person3 = document.querySelector('#image3');
const image_person4 = document.querySelector('#image4');
const image_person5 = document.querySelector('#image5');
const image_person6 = document.querySelector('#image6');

let PDescriptionSection = document.querySelector('#PersonDescription'); /*Variable que representa el elemento html section 'PersonDescription' que es la parte de la página que contiene el sidebar con la descripción y la imagen de la persona*/
let imageDescription = document.querySelector('#ImageDescription'); /*Variable que representa la imagen de la persona en el sidebar*/
let textDescription = document.querySelector('#TextDescription'); /*Variable que representa la descripción de la persona en el sidebar*/
let ImageCloseButton = document.createElement('img'); /*Variable que representa la imagen del boton para cerrar el sidebar*/


let SelectedImage; /*Variable string auxiliar que ayudara a ver cuál imagen activo la función 'ShowPerson'.*/

/*Todas las imagenes activan la misma función al hacer click en ellas*/
image_person1.addEventListener('click', function() {
	ShowPerson(SelectedImage = 'P1');
});

image_person2.addEventListener('click', function() {
	ShowPerson(SelectedImage = 'P2');
});

image_person3.addEventListener('click', function() {
	ShowPerson(SelectedImage = 'P3');
});

image_person4.addEventListener('click', function() {
	ShowPerson(SelectedImage = 'P4');
});

image_person5.addEventListener('click', function() {
	ShowPerson(SelectedImage = 'P5');
});

image_person6.addEventListener('click', function() {
	ShowPerson(SelectedImage = 'P6');
});

ImageCloseButton.addEventListener('click', CloseSidebar);

function ShowPerson(){

	PDescriptionSection.style.display = "flex";
	const paragraph = document.createElement('p'); /*Se crea un elemento parrafo*/
	let personText; /* Variable que contendra el texto para la descripción de la persona */

	ImageCloseButton.src = 'https://www.nicepng.com/png/full/52-521935_close-white-close-button-png.png';

	/*Al iniciar la función, se deja como vacío el contenido html de la descripción y la imagen, es decir limpia/elimina la imagen y descripción antes que nada. Esto se hace para evitar que se acoplen 2 o más descrpciones de persona en el mismo sidebar*/
	textDescription.innerHTML = ''; 
	imageDescription.innerHTML = '';

	if (SelectedImage == 'P1') {
		personText =  document.createTextNode("Selene delgado has accompanied UNREALCORP since 2019, her financial management skills have delivered long-term financial strategies to the company."); /*Se crea un texto*/
	
		paragraph.appendChild(personText); /*Se agrega el texto al elemento p*/
	
		const cloneImage = image_person1.cloneNode(true); /*Se copia la imagen de persona 1  */

		textDescription.appendChild(paragraph); /*Se pone el parrafo en la parte del sidebar*/

		textDescription.appendChild(ImageCloseButton); /*Se pone el botón de cierre en la parte del texto del sidebar*/

		imageDescription.appendChild(cloneImage); /*En la sección de imagen se pone el clon de la imágen*/


		PDescriptionSection.scrollIntoView({block: 'center'}); /*La pantalla se centrara en el sidebar*/


	}
	else if (SelectedImage == 'P2'){
		personText =  document.createTextNode("The founder of UNREALCORP. Since 2015 he has been leading the company on the path of growth and innovation."); /*Se crea un texto*/
	
		paragraph.appendChild(personText); /*Se agrega el texto al elemento p*/
	
		const cloneImage = image_person2.cloneNode(true); /*Se copia la imagen de persona 1  */

		textDescription.appendChild(paragraph); /*Se pone el parrafo en la parte del sidebar*/

		textDescription.appendChild(ImageCloseButton);

		imageDescription.appendChild(cloneImage); 

		PDescriptionSection.scrollIntoView({block: 'center'});

	}

	else if (SelectedImage == 'P3'){
		personText =  document.createTextNode("Mary has been working with the company since 2020. Her expertise in statistic analysis help us with various headaches during the global pandemic, her work let us adapt our strategies to face this scenario."); /*Se crea un texto*/
	
		paragraph.appendChild(personText); /*Se agrega el texto al elemento p*/
	
		const cloneImage = image_person3.cloneNode(true); /*Se copia la imagen de persona 1  */

		textDescription.appendChild(paragraph); /*Se pone el parrafo en la parte del sidebar*/

		textDescription.appendChild(ImageCloseButton);

		imageDescription.appendChild(cloneImage); 

		PDescriptionSection.scrollIntoView({block: 'center'});

	}

	else if (SelectedImage == 'P4'){
		personText =  document.createTextNode("David stone has been with the company since 2018, his accounting expertise has enabled UNREALCORP to make short and long term financial decisions."); /*Se crea un texto*/
	
		paragraph.appendChild(personText); /*Se agrega el texto al elemento p*/
	
		const cloneImage = image_person4.cloneNode(true); /*Se copia la imagen de persona 1  */

		textDescription.appendChild(paragraph); /*Se pone el parrafo en la parte del sidebar*/

		textDescription.appendChild(ImageCloseButton);

		imageDescription.appendChild(cloneImage); 

		PDescriptionSection.scrollIntoView({block: 'center'});

	}

	else if (SelectedImage == 'P5'){
		personText =  document.createTextNode("John has been with us since 2016. With 8 years of experience, his expertise in data analysis and marketing forecasting has helped UNREALCORP to be in the right place at the right time."); /*Se crea un texto*/
	
		paragraph.appendChild(personText); /*Se agrega el texto al elemento p*/
	
		const cloneImage = image_person5.cloneNode(true); /*Se copia la imagen de persona 1  */

		textDescription.appendChild(paragraph); /*Se pone el parrafo en la parte del sidebar*/

		textDescription.appendChild(ImageCloseButton);

		imageDescription.appendChild(cloneImage); 

		PDescriptionSection.scrollIntoView({block: 'center'});

	}

	else if (SelectedImage == 'P6'){
		personText =  document.createTextNode("Justin Amend, our new Accountant. Justin has a work experience of 8 years, and a great reputation in his work, we have high hopes for him and his future contibution for UNREALCORP."); /*Se crea un texto*/
	
		paragraph.appendChild(personText); /*Se agrega el texto al elemento p*/
	
		const cloneImage = image_person6.cloneNode(true); /*Se copia la imagen de persona 1  */

		textDescription.appendChild(paragraph); /*Se pone el parrafo en la parte del sidebar*/

		textDescription.appendChild(ImageCloseButton);

		imageDescription.appendChild(cloneImage); 

		PDescriptionSection.scrollIntoView({block: 'center'});

	}



}

/*Función del botón de cierre, se pone como vacío el contenido html del sidebar, es decir, se elimina la descripción y la imágen*/
function CloseSidebar(){
	PDescriptionSection.style.display = "none";
	/*
	textDescription.innerHTML = '';
	imageDescription.innerHTML = '';
	*/
}