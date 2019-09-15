/**
 * Progama para probar el funcionamiento de la función aplica verde
 * 
 * Simularemos tener un arreglo de pixeles y ejecutaremos el codigo para saber si se llenan correctamente
 * 
 * @author Trad Mateos Kethrim, Mártinez Santana Brayan
 * @version 1
 */
describe('Filtro verde pruebas', () => {
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

	it('aplica el filtro correctamente', () => {
		aplicaFiltroVerde(arregloDePixeles, numPixeles);
		for (let i = 0; i < numPixeles; i++) {
			expect(arregloDePixeles[i * 4]).toBe(0); // valor en rojo
			expect(arregloDePixeles[i * 4 + 2]).toBe(0); // valor en azul
		}
	});

});