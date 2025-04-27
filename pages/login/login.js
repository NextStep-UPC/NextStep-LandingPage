document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || password === "") {
      alert("Por favor, complete todos los campos para iniciar sesión.");
      return;
    }

    alert("¡Inicio de sesión exitoso! (demo)");
    form.reset();
  });
});
