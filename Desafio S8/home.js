document.addEventListener("DOMContentLoaded", function() {
  // Escribe el codigo necesario para acceder al nombre del usuario y guardarlo localmente.
  const username = localStorage.getItem("user")
  // Si el usuario se loguea mostrar mensaje de bienvenida y si no lo hace mostrar que complete los campos.
  const message= document.getElementById("welcomeMessage");
  if (username) {
    message.innerHTML= "Bienvenid@ " + username;
  } else {
    alert("El usuario no está logueado, por favor rellene los campos");
        window.location.href = "login.html";
  };
});
    