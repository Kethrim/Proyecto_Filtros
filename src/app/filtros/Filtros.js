var filtro = ( function () {
        //var canvasOrig = document.getElementById('canvasOrig');
        //canvasFilt = document.getElementById('canvasFilt'),
//        contextOrig = canvasOrig.getContext('2d'),
//        contextFilt = canvasFilt.getContext('2d'),
      var public = {};

      /*
      Método que carga una imagen.
      */
      public.cargarImagen = function (img) {
        var imagen = new Image();
        imagen.src = img;
        imagen.onload = function () {
          contextOrig.drawImage(imagen,0,0);
          contextFilt.drawImage(imagen,0,0);
        };
      };
      
//      /*
//      Método para obtener los valores RGB de una imagen
//      */
//      public.obtenerDatosDeImagen = function () {
//        return contextOrig.getImageData(0,0, canvasOrig.width, canvasOrig.height);
//
//      };
//
//      /*
//      Método que aplica un filtro rojo a la imagen.
//      */
//      public.rojo = function () {
//        var datosDeImagen = filtro.obtenerDatosDeImagen(),
//            pixeles = datosDeImagen.data,
//            numPixeles = datosDeImagen.width * datosDeImagen.height;
//
//        for (var i = 0; i < numPixeles; i++) {
//          pixeles[(4*i)+1] = 0;
//          pixeles[(4*i)+2] = 0;
//        }
//        contextFilt.putImageData(datosDeImagen,0,0);
//      };
//
//      /*
//      Método que aplica un filtro azul a la imagen.
//      */
//      public.azul = function () {
//        var datosDeImagen = filtro.obtenerDatosDeImagen(),
//            pixeles = datosDeImagen.data,
//            numPixeles = datosDeImagen.width * datosDeImagen.height;
//
//        for (var i = 0; i < numPixeles; i++) {
//          pixeles[(4*i)] = 0;
//          pixeles[(4*i)+1] = 0;
//        }
//        contextFilt.putImageData(datosDeImagen,0,0);
//      };
//
//      /*
//      Método que aplica un filtro verde.
//      */
//      public.verde = function () {
//        var datosDeImagen = filtro.obtenerDatosDeImagen(),
//            pixeles = datosDeImagen.data,
//            numPixeles = datosDeImagen.width * datosDeImagen.height;
//
//        for (var i = 0; i < numPixeles; i++) {
//          pixeles[(4*i)] = 0;
//          pixeles[(4*i)+2] = 0;
//        }
//        contextFilt.putImageData(datosDeImagen,0,0);
//      };
//
//      return public;
} ());