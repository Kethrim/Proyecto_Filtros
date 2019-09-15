describe('Filtro azul pruebas', () => {
	let arregloDePixeles,
		numPixeles;

	beforeEach(function () {
		arregloDePixeles = new Uint8ClampedArray(8 * 4);
		numPixeles = arregloDePixeles.length / 4;
	});

	it('usando un arreglo de pixeles vacio el filtro azul no se hace', () => {
		expect(function () { aplicaFiltroAzul(arregloDePixeles, 0) }).toThrowError(RangeError, "El tamaño debe ser positivo");
		expect(function () { aplicaFiltroAzul(arregloDePixeles, -3) }).toThrowError(RangeError, "El tamaño debe ser positivo");
		expect(function () { aplicaFiltroAzul(arregloDePixeles, 100) }).toThrowError(URIError, "El tamaño del arreglo debe ser el mismo");
	});

});