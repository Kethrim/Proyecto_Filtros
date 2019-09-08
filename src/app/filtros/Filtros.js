let rojo = document.getElementById('filtroRojo'),
    azul = document.getElementById('filtroAzul'),
    verde = document.getElementById('filtroVerde'),
    mosaico = document.getElementById('filtroMosaico');

/**
* Función que carga una imagen.
*/
function cargarImagen(){
  let archivo = document.getElementById("file").files[0];
  let lector = new FileReader();
  if (archivo) {
    lector.readAsDataURL(archivo);
    lector.onload = function(){
      leerImagen(lector.result);
      imagenCargada = lector.result;
    }
  }
}

/**
* Función que posiciona una imagen en el canvas.
* @param ruta- ruta de la imagen que posicinará.
*/
function leerImagen (ruta){
  let imagen = new Image();
  imagen.src = ruta;
  imagen.onload = function (){
    let canvasOrig = document.getElementById('canvasOrig'),
    canvasFilt = document.getElementById('canvasFilt'),
    contextOrig = canvasOrig.getContext('2d'),
    contextFilt = canvasFilt.getContext('2d');
    contextOrig.drawImage(imagen,0,0,canvasOrig.width,canvasOrig.height);
  }
}

/**
* Función que obtiene el arreglo de pixeles con valores rgb de la imagen cargada.
* @return arreglo coon valores rgb de los pixeles de la imagen cargada.
*/
function obtenerArregloDePixeles() {
  let c = document.getElementById('canvasOrig');
  let ctx = c.getContext('2d');
  return ctx.getImageData(0,0,canvasOrig.width,canvasOrig.height);
}

/**
*Función que regresa el contexto de la imagen filtrada.
* @return contexto de la magen filtrada.
*/
function imgFiltrada() {
  let canvasFilt = document.getElementById('canvasFilt');
      return contextFilt = canvasFilt.getContext('2d');
}

/**
 *Función que cambia los valores rgb de la imagen.
 */
function aplicaFiltro(arrayPixeles, tam, rojo, verde, azul){
  let r = rojo, a = azul, v = verde;
  for (var i = 0; i < tam; i++) {
   if (rojo!= 0) {
     r = 2*arrayPixeles[4*i];
   } if (verde != 0) {
     v = 2*arrayPixeles[(4*i)+1];
   } if (azul!= 0) {
     a = 2*arrayPixeles[(4*i)+2];
   }
    arrayPixeles[4*i] = r - arrayPixeles[4*i];
    arrayPixeles[(4*i)+1] = v - arrayPixeles[(4*i)+1];
    arrayPixeles[(4*i)+2] =  a - arrayPixeles[(4*i)+2];
  }
}

/**
* Función que aplica el filtro rojo al darle click al botón "Filtro rojo".
*/
rojo.onclick = function() {
  let arregloDePixeles = obtenerArregloDePixeles(),
      pixeles = arregloDePixeles.data,
      numPixeles = arregloDePixeles.width * arregloDePixeles.height;
    aplicaFiltro(pixeles, numPixeles,1,0,0);
    imgFiltrada().putImageData(arregloDePixeles,0,0);
}

/**
* Función que aplica el filtro azul al darle click al botón "Filtro azul".
*/
azul.onclick = function () {
  let arregloDePixeles = obtenerArregloDePixeles(),
      pixeles = arregloDePixeles.data,
      numPixeles = arregloDePixeles.width * arregloDePixeles.height;
      aplicaFiltro(pixeles, numPixeles,0,0,1);
  imgFiltrada().putImageData(arregloDePixeles,0,0);
};

/**
* Función que aplica el filtro verde al darle click al botón "Filtro verde".
*/
verde.onclick = function () {
  let arregloDePixeles = obtenerArregloDePixeles(),
      pixeles = arregloDePixeles.data,
      numPixeles = arregloDePixeles.width * arregloDePixeles.height;
      aplicaFiltro(pixeles, numPixeles,0,1,0);
  imgFiltrada().putImageData(arregloDePixeles,0,0);
};
