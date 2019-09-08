/**
 * Función que carga una imagen.
 */
function cargarImagen() {
	let archivo = document.getElementById("file").files[0];
	let lector = new FileReader();
	if (archivo) {
		lector.readAsDataURL(archivo);
		lector.onload = function() {
			leerImagen(lector.result);
			imagenCargada = lector.result;
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
 *Función que regresa el contexto de la imagen filtrada.
 * @return contexto de la magen filtrada.
 */
function imgFiltrada() {
	let canvasFilt = document.getElementById('canvasFilt');
	return contextFilt = canvasFilt.getContext('2d');
}

/**
*Función que aplica un filtro cambiando sus valores rgb.
* @param arregloDePixeles- arregelo de pixeles con valores rgb que se cambiarán.
* @param tam - tamanio del arreglo de pixeles.
* @param rojo. número mayor que 0 para filtro rojo, 0 si se desea quitar el valor.
* @param azul- número mayor que 0 para filtro azul, 0 si se desea quitar el valor.
* @param verde - número mayor que 0 para filtro verde, 0 si se desea quitar el valor.
*/
function aplicaFiltro(arregloDePixeles, tam, rojo, verde, azul) {
  let r = 0,v = 0,a = 0;
  for (var i = 0; i < tam; i++) {
   if (rojo!= 0) {
     r = 2*arregloDePixeles[4*i];
   } if (verde != 0) {
     v = 2*arregloDePixeles[(4*i)+1];
   } if (azul!= 0) {
     a = 2*arregloDePixeles[(4*i)+2];
   }
    arregloDePixeles[4*i] = r - arregloDePixeles[4*i];
    arregloDePixeles[4*i+1] = v - arregloDePixeles[4*i+1];
    arregloDePixeles[4*i+2] = a - arregloDePixeles[4*i+2];
  }
}

/**
 * Función que aplica el filtro rojo al darle click al botón "Filtro rojo".
 */
function rojo () {
	let arregloDePixeles = obtenerArregloDePixeles(),
		pixeles = arregloDePixeles.data,
		numPixeles = arregloDePixeles.width * arregloDePixeles.height;
    aplicaFiltro(pixeles,numPixeles,1,0,0);
	imgFiltrada().putImageData(arregloDePixeles, 0, 0);
}

/**
 * Función que aplica el filtro azul al darle click al botón "Filtro azul".
 */
function azul () {
	let arregloDePixeles = obtenerArregloDePixeles(),
		pixeles = arregloDePixeles.data,
		numPixeles = arregloDePixeles.width * arregloDePixeles.height;
    aplicaFiltro(pixeles,numPixeles,0,0,1);
	imgFiltrada().putImageData(arregloDePixeles, 0, 0);
}

/**
 * Función que aplica el filtro verde al darle click al botón "Filtro verde".
 */
function verde () {
	let arregloDePixeles = obtenerArregloDePixeles(),
		pixeles = arregloDePixeles.data,
		numPixeles = arregloDePixeles.width * arregloDePixeles.height;
    aplicaFiltro(pixeles,numPixeles,0,1,0);
	imgFiltrada().putImageData(arregloDePixeles, 0, 0);
}

/**
 * Función que aplica el mosaico al darle click al botón "Filtro Mosaico".
 */
function mosaico () {
  let n = prompt("Largo");
  let m = prompt("Ancho");
  document.getElementById('mosaico');
	let arregloDePixeles = obtenerArregloDePixeles(),
		pixeles = arregloDePixeles.data,
		largo = arregloDePixeles.width,
		alto = arregloDePixeles.height,
    pixPorCuadrante = (largo * alto) / (n * m);
	for (let desplazamiento_x = 0; desplazamiento_x < largo; desplazamiento_x += largo / n) {
		for (let desplazamiento_y = 0; desplazamiento_y < alto; desplazamiento_y += alto / m) {
      let promRojo = 0,
          promVerde = 0,
          promAzul = 0;

      for (let i = desplazamiento_y; i < desplazamiento_y + (alto / m); i++) {
				for (let j = desplazamiento_x + i * 800; j < desplazamiento_x + (i * 800) + (largo / n); j++) {
					promRojo += pixeles[(4 * j)];
					promVerde += pixeles[(4 * j) + 1];
					promAzul += pixeles[(4 * j) + 2];
				}
			}
			promRojo /= pixPorCuadrante;
			promVerde /= pixPorCuadrante;
			promAzul /= pixPorCuadrante;
			for (let i = desplazamiento_y; i < desplazamiento_y + (alto / m); i++) {
				for (let j = desplazamiento_x + i * 800; j < desplazamiento_x + (i * 800) + (largo / n); j++) {
					pixeles[(4 * j)] = promRojo;
					pixeles[(4 * j) + 1] = promVerde;
					pixeles[(4 * j) + 2] = promAzul;
				}
			}
		}
	}
	imgFiltrada().putImageData(arregloDePixeles, 0, 0);
}