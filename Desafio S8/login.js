document.addEventListener("DOMContentLoaded", function(){
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();    
      user = document.getElementById("username");
      password = document.getElementById("password");

      if (!user.value && password.value) {
        alert("El usuario no está logueado, por favor rellene los campos");
        window.location.href = "login.html";
      } else {
          // Almacenar el nombre en sessionStorage/localStorage para usarlo en home.js
      localStorage.setItem("user", user.value);
      
      // Redirigir a la página principal
      window.location.href = "home.html"; // Cambia "home.html" por la ruta correcta de tu página home
      
      }
      
    });

});
