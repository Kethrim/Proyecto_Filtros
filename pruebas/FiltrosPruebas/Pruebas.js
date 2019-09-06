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
var chaiFiles = require('chai-files');

chai.use(chaiFiles);

var expect = chai.expect;
var file = chaiFiles.file;
var dir = chaiFiles.dir;
/**
 * Prueba basica (como plantilla para otras pruebas)
 * Recibe un Nombre en forma de string y conjunyo de funciones
 * @param  {string, function}
 */
suite('Existencia de Archivos', function() {
	test('CarpetaConImgagenes', function(done) {
		expect(dir('../src/imagenes')).to.exist;
		//expect(file('../src/imagenes/img1.jpg')).to.be.empty;
		//expect(file('img1.jpg')).to.match(/img1.jpg/);
		//expect(file('../src/imagenes/img1.jpg')).to.be.empty;
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