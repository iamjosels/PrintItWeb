// Función para alternar la visibilidad de la contraseña
function togglePasswordVisibility(fieldId) {
  const passwordField = document.getElementById(fieldId);
  const icon = passwordField.nextElementSibling.querySelector('i');

  if (passwordField.type === "password") {
    passwordField.type = "text";
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    passwordField.type = "password";
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
}
  
  // Validación básica para el formulario de registro
  document.getElementById("register-form").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const userType = document.getElementById("user-type").value;
    
    // Validación de campos vacíos
    if (!email || !password || !confirmPassword || !name || !address || !userType) {
      alert("Por favor, completa todos los campos.");
      event.preventDefault(); // Evita el envío del formulario
    }
    
    // Validación de contraseñas
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      event.preventDefault(); // Evita el envío del formulario
    }
  });
  