function iniciarDesaparicion() {

  var tiempo = parseFloat(document.getElementById('tiempoInput').value) * 1000;

  // Obtener imágenes 
  var imagenes = document.querySelectorAll('#squareContainer img'); 

    
            // Iterar imagen y quitarle opacidad
        for (var i = imagenes.length - 1; i >= 0; i--) {
            setTimeout(function (i) 
            {
                return function () {
                    imagenes[i].style.opacity = 0;
                };
            }(i), (imagenes.length - 1 - i) * tiempo);
        }
    
   
}

function Reiniciar() {

    var tiempo = parseFloat(document.getElementById('tiempoInput').value) * 1000;
  
    // Obtener imágenes 
    var imagenes = document.querySelectorAll('#squareContainer img'); 
  
      // Reproducir sonido antes de cambiar la opacidad
    var sonido = document.getElementById('miSonido');
    sonido.play();
              // Iterar imagen y quitarle opacidad
          for (var i = imagenes.length - 1; i >= 0; i--) {
              setTimeout(function (i) 
              {
                  return function () {
                      imagenes[i].style.opacity = 100;
                  };
              }(i), (imagenes.length - 1 - i));
          }

  }




