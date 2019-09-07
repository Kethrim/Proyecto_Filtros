/**
 * @fileoverview Pruebas Generales
 *
 * @version 1.1
 *
 * @author Martínez Santana Brayan
 * 				 Trad Mateos Kethrim Guadalpe
 * ----
 */
var chai = require('chai'),
    expect = chai.expect; // Obtenemos las funciones 'expect' de chai
var app = require('../../src/app/filtros/Filtros.js'); // el archivo a probar
var jsdom = require('mocha-jsdom'); 

/**
 * Prueba basica (como plantilla para otras pruebas)
 * Recibe un Nombre en forma de string y conjunyo de funciones
 * @param  {string, function}
 */
suite('Prueba blanca', function() {
	test('CarpetaConImgagenes', function(done) {
    console.log( app.obtenerArregloDePixeles() );
		expect(4).to.be.equal(4);
		done();
	});
	//test('P2', function(done) {
	//	expect(3).to.be.equal(3);
	//	done();
	//});
	//test('P3', function(done) {
	//	expect(3).to.be.equal(3);
	//	done();
	//});
});