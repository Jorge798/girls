var miBoton = document.getElementById("miBoton");
var miVentanaModal = document.getElementById("miVentanaModal");

miBoton.onclick = function(){
    miVentanaModal.style.display = "block";
}

miVentanaModal.querySelector(".cerrar").onclick = function() {
    miVentanaModal.style.display = "none";
}

document.getElementById('btn-wp-1').addEventListener('click', function() {
    var nombre = document.getElementById('text-nombre').value;
    var precio = document.getElementById('select-precio').value;
    var hora = document.getElementById('hora').value;
    var url = "https://api.whatsapp.com/send?phone=59160750434&text=Bievenid%40%20%22CBBA%2069%22%20usted%20acaba%20de%20reservar%20un%20cita%20con%3A" + " NOMBRE DE LA MODELO: "+nombre +" LA TARIFA DE: "+ precio +" A LA HORA DE: "+ hora;
    window.location.href = url;
  });