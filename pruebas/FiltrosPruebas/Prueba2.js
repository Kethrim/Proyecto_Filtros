/**
 * @fileoverview Pruebas Generales
 *
 * @version 1.1
 *
 * @author Martínez Santana Brayan
 * 				 Trad Mateos Kethrim Guadalpe
 * ----
 */
var expect = require('chai').expect; // Llamamos a los metodos expect de chai (es necesario)

/**
 * Prueba basica (como plantilla para otras pruebas)
 * Recibe un Nombre en forma de string y conjunyo de funciones
 * @param  {string, function}
 */
suite('Prueba Basica', function() {
	test('P1', function(done) {
		expect(3).to.be.equal(3);
		done();
	});
	test('P2', function(done) {
		expect(3).to.be.equal(3);
		done();
	});
	test('P3', function(done) {
		expect(3).to.be.equal(3);
		done();
	});
});