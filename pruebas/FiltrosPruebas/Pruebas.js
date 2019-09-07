/**
 * @fileoverview Pruebas Generales
 *
 * @version 1.1
 *
 * @author Martínez Santana Brayan
 * 				 Trad Mateos Kethrim Guadalpe
 * ----
 */
//var expect = require('chai').expect; // Llamamos a los metodos expect de chai (es necesario)
var chai = require('chai');
var app = require('../../src/app/filtros/Filtros.js');
var expect = chai.expect;
var jsdom = require('mocha-jsdom');

describe('mocha tests', function () {
 
  jsdom();
 
  it('has document', function () {
    var div = document.createElement('div');
	expect(div.nodeName).eql('div');
  });
 
});

/**
 * Prueba basica (como plantilla para otras pruebas)
 * Recibe un Nombre en forma de string y conjunyo de funciones
 * @param  {string, function}
 */
//suite('Prueba blanca', function() {
//	test('CarpetaConImgagenes', function(done) {
//		expect(4).to.be.equal(4);
//		done();
//	});
//	//test('P2', function(done) {
//	//	expect(3).to.be.equal(3);
//	//	done();
//	//});
//	//test('P3', function(done) {
//	//	expect(3).to.be.equal(3);
//	//	done();
//	//});
//});