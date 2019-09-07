let rojo = document.getElementById('filtroRojo'),
    azul = document.getElementById('filtroAzul'),
    verde = document.getElementById('filtroVerde'),
    mosaico = document.getElementById('filtroMosaico'),
    guardar = document.getElementById('guardar');
var imagenCargada;

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
   }else if (verde != 0) {
     v = 2*arrayPixeles[(4*i)+1];
   }else if (azul!= 0) {
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

guardar.onclick = function () {
  //recibe un src
  alert("Guardar imagen");
  // window.newW = open(img);
  // newW.document.execCommand("GuardarComo");
  // newW.close();
}

mosaico.onclick = function () {
  let arregloDePixeles = obtenerArregloDePixeles(),
      pixeles = arregloDePixeles.data,
      numPixeles = arregloDePixeles.width * arregloDePixeles.height;
  for (var i = 0; i < numPixeles; i++) {
    pixeles[4*i] = 255 - pixeles[4*i];
    pixeles[4*i+1] = 255 - pixeles[4*i+1];
    pixeles[4*i+2] = 255 - pixeles[4*i+2];
  }
  imgFiltrada().putImageData(arregloDePixeles,0,0);
}


/*
      public.filtroM = function (arrayPixeles,promRojo, promAzul, promVerde, inicio, fin) {
        console.log("El limite es "+fin);
        for (var i = inicio; i < fin; i+=4) {
          arrayPixeles[i] = promRojo;
          arrayPixeles[i+1] = promVerde;
          arrayPixeles[i+2] = promAzul;
          //console.log("i "+i);
        }
        console.log("Color "+arrayPixeles[0]);
      }

      public.mosaico = function (tam) {
        var datosDeImagen = filtro.obtenerDatosDeImagen(),
            pixeles = datosDeImagen.data,
            numPixeles = datosDeImagen.width * datosDeImagen.height,
            limite = numPixeles/tam;

            console.log("Limite " + limite);

            for (var i = 0; i < numPixeles; i++) {
              var rojo = 0, azul = 0, verde = 0;
              for (var j = i; j < (limite+i); j++) {
                rojo += pixeles[4*j];
                verde += pixeles[(4*j)+1];
                azul += pixeles[(4*j)+2];
              }
              var promRojo = rojo/limite, promAzul = azul/limite, promVerde = verde/limite;
              console.log("Rojo "+promRojo+" azul "+promAzul+" verde "+promVerde);
              filtro.filtroM(pixeles,promRojo, promAzul, promVerde,i,limite+i);
            }
            contextFilt.putImageData(datosDeImagen,0,0);
      };
*/
