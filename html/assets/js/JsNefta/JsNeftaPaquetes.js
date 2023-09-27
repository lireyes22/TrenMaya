$(document).ready(function(){
  // Mostrar la ventana emergente al hacer clic en el botón
  $("#mostrarPopup").click(function(){
    $("#popup").fadeIn();
  });

  // Cerrar la ventana emergente al hacer clic en el botón "Cerrar"
  $("#cerrarPopup").click(function(){
    $("#popup").fadeOut();
  });
});
</script>
En este código, al hacer clic en el botón "Mostrar Ventana Emergente", se utiliza .fadeIn() para mostrar la ventana emergente y al hacer clic en el botón "Cerrar", se utiliza .fadeOut() para ocultarla.

Este es un ejemplo simple de una ventana emergente usando jQuery. Puedes personalizar y estilizar el contenido de la ventana emergente según tus necesidades. También es importante recordar que las ventanas emergentes pueden ser intrusivas, por lo que debes utilizarlas con cuidado y consideración para la experiencia del usuario.





