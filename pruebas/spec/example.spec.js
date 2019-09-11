describe('Cargar imagenes', () => {

	//beforeEach(function() {
	//});

	it(' Se cargaron los pixeles', () => {
		// arrange
		var archivo = new File(['img1'],
							   'img1.jpg',
							   {type:'image/jpg'});
		cargarImagen(archivo);
		
		// act
		let pixeles = obtenerArregloDePixeles().data;

		// assert
		expect(pixeles[0]).not.toBe(0);
		expect(pixeles[1]).not.toBe(0);
		expect(pixeles[2]).not.toBe(0);
		expect(pixeles[3]).not.toBe(0);
	});

});