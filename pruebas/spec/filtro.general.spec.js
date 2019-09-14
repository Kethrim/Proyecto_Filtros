describe('Filtro General', () => {
	let arregloDePixeles,
		numPixeles;

	beforeEach(function () {
		arregloDePixeles = new Uint8ClampedArray(8 * 4);
		numPixeles = arregloDePixeles.length / 4;
	});

	it('usando un arreglo de pixeles vacio no se aplican filtros', () => {
		expect(function () { aplicaFiltro(arregloDePixeles, 0, 0, 0, 0) }).toThrowError(RangeError, "El tamaño debe ser positivo");
		expect(function () { aplicaFiltro(arregloDePixeles, -3, 0, 0, 0) }).toThrowError(RangeError, "El tamaño debe ser positivo");
		expect(function () { aplicaFiltro(arregloDePixeles, 100, 0, 0, 0) }).toThrowError(URIError, "El tamañod el arreglo debe ser el mismo");
	});

});