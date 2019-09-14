xdescribe('Filtro mosaico pruebas', () => {
	let arregloDePixeles = new Uint8ClampedArray(8);
	it('usamos un pixel vacio', () => {
		expect(arregloDePixeles).not.toBe(null);
		console.log(arregloDePixeles);
	});
	
	//it('probamos strings', () => {
	//	
	//	var a = "Hola";
	//	
	//	expect(a).not.toBe("Adios");
	//});
});

//describe('Holaaaaa', () => {
//	//let a = new Uint8ClampedArray();
//	
//	it('probamos null', () => {
//		
//		expect(null).toBe(null);
//	});
//});