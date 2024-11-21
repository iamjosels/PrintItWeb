// Función para alternar la visibilidad de la contraseña
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.getElementById('eye-icon');
  

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  }
}

// Validación básica del formulario
document.getElementById("login-form").addEventListener("submit", function(event) {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  // Validación básica
  if (!email || !password) {
    alert("Por favor, completa todos los campos.");
    event.preventDefault(); // Evita el envío del formulario
  }
});
