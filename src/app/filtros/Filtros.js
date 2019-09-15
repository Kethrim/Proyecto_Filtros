/**
 * Función que carga una imagen.
 */
function cargarImagen() {
	let archivo = document.getElementById("archivos").files[0],
		lector = new FileReader();
	if (archivo) {
		lector.readAsDataURL(archivo);
		lector.onload = function() {
			limpiaCanvas();
			leerImagen(lector.result);
			borraImagenFiltrada();
		};
	}
}

/**
 * Función que posiciona una imagen en el canvas.
 * @param ruta- ruta de la imagen que posicinará.
 */
function leerImagen(ruta) {
	let imagen = new Image();
	imagen.src = ruta;
	imagen.onload = function() {
		let canvasOrig = document.getElementById('canvasOrig'),
			canvasFilt = document.getElementById('canvasFilt'),
			contextOrig = canvasOrig.getContext('2d'),
			contextFilt = canvasFilt.getContext('2d');
		contextOrig.drawImage(imagen, 0, 0, canvasOrig.width, canvasOrig.height);
	}
}

/**
 * Función que obtiene el arreglo de pixeles con valores rgb de la imagen cargada.
 * @return arreglo coon valores rgb de los pixeles de la imagen cargada.
 */
function obtenerArregloDePixeles() {
	let c = document.getElementById('canvasOrig');
	let ctx = c.getContext('2d');
	return ctx.getImageData(0, 0, canvasOrig.width, canvasOrig.height);
}

/**
 * Función que obtiene el arreglo de pixeles de la imagen filtrada.
 */
function obtenerArregloDePixelesImagenFiltrada(){
	let c = document.getElementById('canvasFilt');
	let ctx = c.getContext('2d');
	return ctx.getImageData(0,0,canvasFilt.width, canvasFilt.height);	
}

/**
 *Función que regresa el contexto de la imagen filtrada.
 * @return contexto de la magen filtrada.
 */
function imgFiltrada() {
	let canvasFilt = document.getElementById('canvasFilt');
	return contextFilt = canvasFilt.getContext('2d');
}

/**
 * Función que borra la imagen filtrada.
 */
function borraImagenFiltrada(){
		let canvasFilt = document.getElementById("canvasFilt"),
				ctx = canvasFilt.getContext('2d');
		ctx.clearRect(0,0,canvasFilt.width, canvasFilt.height);	
}

/*
 * Función que limpia el canvas antes de agregar una imagen.
 */
function limpiaCanvas(){
let canvasOrig = document.getElementById("canvasOrig"),
				ctx = canvasOrig.getContext('2d');
		ctx.clearRect(0,0,canvasOrig.width, canvasOrig.height);		
}
/**
 * Función que aplica el filtro rojo al darle click al botón "Filtro rojo".
 */
function rojo () {
	let arregloDePixeles = obtenerArregloDePixeles(),
		pixeles = arregloDePixeles.data,
		numPixeles = arregloDePixeles.width * arregloDePixeles.height;
    aplicaFiltroRojo(pixeles,numPixeles);
	imgFiltrada().putImageData(arregloDePixeles, 0, 0);
}

/**
 * Función que aplica el filtro azul al darle click al botón "Filtro azul".
 */
function azul () {
	let arregloDePixeles = obtenerArregloDePixeles(),
		pixeles = arregloDePixeles.data,
		numPixeles = arregloDePixeles.width * arregloDePixeles.height;
    aplicaFiltroAzul(pixeles,numPixeles,0,0,1);
	imgFiltrada().putImageData(arregloDePixeles, 0, 0);
}

/**
 * Función que aplica el filtro verde al darle click al botón "Filtro verde".
 */
function verde () {
	let arregloDePixeles = obtenerArregloDePixeles(),
		pixeles = arregloDePixeles.data,
		numPixeles = arregloDePixeles.width * arregloDePixeles.height;
    aplicaFiltroVerde(pixeles,numPixeles,0,1,0);
	imgFiltrada().putImageData(arregloDePixeles, 0, 0);
}


/**
 * Función que aplica el mosaico al darle click al botón "Filtro Mosaico".
 * No aplica el filtro si los valores de largo y ancho son menores o iguales a 0 y si son mayores a 500, cada uno. 
 */
function mosaico () {
  let n = prompt("Largo",5),
		m = prompt("Ancho",5),
		arregloDePixeles = obtenerArregloDePixeles();
	try{
		aplicaFiltroMosaico(arregloDePixeles, n, m);		
		imgFiltrada().putImageData(arregloDePixeles, 0, 0);
	} catch (error){
		alert(error);
		borraImagenFiltrada();
	}	
}