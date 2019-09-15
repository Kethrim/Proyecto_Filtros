/**
 * Progama para probar el funcionamiento de la función aplica filtro
 * 
 * @author Trad Mateos Kethrim, Mártinez Santana Brayan
 * @version 1
 */
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
		expect(function () { aplicaFiltro(arregloDePixeles, 100, 0, 0, 0) }).toThrowError(URIError, "El tamaño del arreglo debe ser el mismo");
	});

	it('usando un arreglo cualquiera no se aplican filtros', () => {
		let arrelgoDeEnteros = new Array(4);
		expect(function () { aplicaFiltro(arrelgoDeEnteros, 1, 0, 0, 0) }).toThrowError(TypeError, "El arrelgo debe ser del formato Uint8ClampedArray");
	});
});