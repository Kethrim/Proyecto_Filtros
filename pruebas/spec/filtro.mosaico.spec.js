/**
 * Progama para probar el funcionamiento de la función aplica rojo
 * 
 * Simularemos tener un arreglo de pixeles y ejecutaremos el codigo para saber si se llenan correctamente
 * 
 * @author Trad Mateos Kethrim, Mártinez Santana Brayan
 * @version 1
 */
describe('Filtro mosaico pruebas', () => {
	let arregloDePixeles,
		numPixeles;

	beforeEach(function () {
		arregloDePixeles = new Uint8ClampedArray(400 * 4);
		numPixeles = arregloDePixeles.length / 4;
		// Llenamos el arreglo con colores al azar del 0 al 255
		for (let i = 0; i < numPixeles; i++) {
			arregloDePixeles[i * 4] = Math.trunc(Math.random() * (256));
			arregloDePixeles[i * 4 + 1] = Math.trunc(Math.random() * (256));
			arregloDePixeles[i * 4 + 2] = Math.trunc(Math.random() * (256));
		}
	});

	it('no aplica el filtro cuando los parametros son negativos ni cuando ceros', () => {
		expect(function () { aplicaFiltroMosaico(arregloDePixeles, 0, 0) }).toThrowError(RangeError);
		expect(function () { aplicaFiltroMosaico(arregloDePixeles, -2, 12) }).toThrowError(RangeError);
		expect(function () { aplicaFiltroMosaico(arregloDePixeles, 3, -2) }).toThrowError(RangeError);
		expect(function () { aplicaFiltroMosaico(arregloDePixeles, -52, -23) }).toThrowError(RangeError);
	});

	it('no aplica el filtro cuando los parametros son muy grandes', () => {
		expect(function () { aplicaFiltroMosaico(arregloDePixeles, 999, 999) }).toThrowError(RangeError);
		expect(function () { aplicaFiltroMosaico(arregloDePixeles, 12, 600) }).toThrowError(RangeError);
	});
});