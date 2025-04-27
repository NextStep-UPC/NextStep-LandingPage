document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const birthdate = document.getElementById("birthdate").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirm-password")
      .value.trim();

    if (
      name === "" ||
      lastname === "" ||
      birthdate === "" ||
      phone === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    const onlyLetters = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    if (!onlyLetters.test(name)) {
      alert("El nombre solo debe contener letras y espacios.");
      return;
    }
    if (!onlyLetters.test(lastname)) {
      alert("El apellido solo debe contener letras y espacios.");
      return;
    }

    const onlyNumbers = /^[0-9]{7,15}$/;
    if (!onlyNumbers.test(phone)) {
      alert("El número telefónico debe contener solo números.");
      return;
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmail.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    alert("¡Registro exitoso! (Demo)");
    form.reset();
  });
});
