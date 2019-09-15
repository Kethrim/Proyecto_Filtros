/**
 *Función que aplica un filtro cambiando sus valores rgb.
 * @param arregloDePixeles- arregelo de pixeles con valores rgb que se cambiarán.
 * @param tam - tamanio del arreglo de pixeles.
 * @param rojo. número mayor que 0 para filtro rojo, 0 si se desea quitar el valor.
 * @param azul- número mayor que 0 para filtro azul, 0 si se desea quitar el valor.
 * @param verde - número mayor que 0 para filtro verde, 0 si se desea quitar el valor.
 */
function aplicaFiltro(arregloDePixeles, tam, rojo, verde, azul) {
	if ((!(arregloDePixeles instanceof Uint8ClampedArray))) {
		throw new TypeError("El arrelgo debe ser del formato Uint8ClampedArray"); // este arreglo solo permite enteros de valores entre 0 a 255
	} else if (tam <= 0) {
		throw new RangeError("El tamaño debe ser positivo");
	} else if (arregloDePixeles.length === 0) {
		throw new RangeError("El arreglo no puede ser de tamaño 0");
	} else if (arregloDePixeles.length% 4 !== 0) {
		throw new URIError('El tamaño del arreglo no es multiplo de 4');		
	} else if (arregloDePixeles.length/4 !== tam) {
		throw new URIError('El tamaño del arreglo debe ser el mismo');
	}
	
	let r = 0,
		v = 0,
		a = 0;
	for (let i = 0; i < tam; i++) {
		if (rojo != 0) {
			r = 2 * arregloDePixeles[4 * i];
		}
		if (verde != 0) {
			v = 2 * arregloDePixeles[(4 * i) + 1];
		}
		if (azul != 0) {
			a = 2 * arregloDePixeles[(4 * i) + 2];
		}
		arregloDePixeles[4 * i] = r - arregloDePixeles[4 * i];
		arregloDePixeles[4 * i + 1] = v - arregloDePixeles[4 * i + 1];
		arregloDePixeles[4 * i + 2] = a - arregloDePixeles[4 * i + 2];
	}
}

/**
 *Función que aplica un filtro cambiando sus valores rgb.
 * @param arregloDePixeles- arregelo de pixeles con valores rgb que se cambiarán.
 * @param numPixeles - tamanio del arreglo de pixeles.
 */
function aplicaFiltroRojo(arregloDePixeles, numPixeles) {
	aplicaFiltro(arregloDePixeles, numPixeles, 1, 0, 0);
}

/**
 *Función que aplica un filtro cambiando sus valores rgb.
 * @param arregloDePixeles- arregelo de pixeles con valores rgb que se cambiarán.
 * @param numPixeles - tamanio del arreglo de pixeles.
 */
function aplicaFiltroAzul(arregloDePixeles, numPixeles) {
	aplicaFiltro(arregloDePixeles, numPixeles, 0, 0, 1);
}

/**
 *Función que aplica un filtro cambiando sus valores rgb.
 * @param arregloDePixeles- arregelo de pixeles con valores rgb que se cambiarán.
 * @param numPixeles - tamanio del arreglo de pixeles.
 */
function aplicaFiltroVerde(arregloDePixeles, numPixeles) {
	aplicaFiltro(arregloDePixeles, numPixeles, 0, 1, 0);
}

/**
 *Función que aplica un filtro mosaico de cuadrosHorizontales por cuadrosVerticales dimenciones.
 * @param arregloDePixeles- arregelo de pixeles con valores rgb que se cambiarán.
 * @param cuadrosHorizontales division a lo largo de la imagen
 * @param cuadrosVerticales division a lo ancho de la imagen
 */
function aplicaFiltroMosaico(arregloDePixeles, cuadrosHorizontales, cuadrosVerticales) {
	if (cuadrosHorizontales<=0 || cuadrosVerticales<=0) throw new RangeError("Ingresa valores positivos.");
	if (cuadrosHorizontales>=500 || cuadrosVerticales>=500) throw new RangeError("Ingresa valores mas pequenos.");
	let pixeles = arregloDePixeles.data,
		largo = arregloDePixeles.width,
		alto = arregloDePixeles.height,
		pixPorCuadrante = (largo * alto) / (cuadrosHorizontales * cuadrosVerticales);

	for (let desplazamiento_x = 0; desplazamiento_x < largo; desplazamiento_x += Math.trunc(largo / cuadrosHorizontales)) {
		for (let desplazamiento_y = 0; desplazamiento_y < alto; desplazamiento_y += Math.trunc(alto / cuadrosVerticales)) {
			let promRojo = 0,
				promVerde = 0,
				promAzul = 0;
			// Leemos los datos
			for (let i = desplazamiento_y; i < desplazamiento_y + Math.trunc(alto / cuadrosVerticales); i++) {
				for (let j = desplazamiento_x + i * 800; j < desplazamiento_x + (i * 800) + Math.trunc(largo / cuadrosHorizontales); j++) {
					promRojo += pixeles[(4 * j)];
					promVerde += pixeles[(4 * j) + 1];
					promAzul += pixeles[(4 * j) + 2];
				}
			}
			// calculamos promedios
			promRojo /= pixPorCuadrante;
			promVerde /= pixPorCuadrante;
			promAzul /= pixPorCuadrante;
			// llenamos los pixeles con el promedio
			for (let i = desplazamiento_y; i < desplazamiento_y + Math.trunc(alto / cuadrosVerticales); i++) {
				for (let j = desplazamiento_x + i * 800; j < desplazamiento_x + (i * 800) + Math.trunc(largo / cuadrosHorizontales); j++) {
					pixeles[(4 * j)] = promRojo;
					pixeles[(4 * j) + 1] = promVerde;
					pixeles[(4 * j) + 2] = promAzul;
				}
			}
		}
	}
}