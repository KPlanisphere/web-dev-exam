document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obteniendo los valores de los campos
    var usuario = document.getElementById('usuario');
    var email = document.getElementById('email');
    var contrasena = document.getElementById('contrasena');

    // Validación
    var esValido = true;
    if (usuario.value.trim() === '') {
        usuario.classList.add('invalido');
        esValido = false;
    } else {
        usuario.classList.remove('invalido');
        usuario.classList.add('valido');
    }

    if (email.value.trim() === '') {
        email.classList.add('invalido');
        esValido = false;
    } else {
        email.classList.remove('invalido');
        email.classList.add('valido');
    }

    if (contrasena.value.trim() === '') {
        contrasena.classList.add('invalido');
        esValido = false;
    } else {
        contrasena.classList.remove('invalido');
        contrasena.classList.add('valido');
    }

    // Mostrando los resultados si el formulario es válido
    if (esValido) {
        document.getElementById('resUsuario').textContent = usuario.value;
        document.getElementById('resEmail').textContent = email.value;
        document.getElementById('resContrasena').textContent = contrasena.value;
        document.getElementById('resultados').classList.remove('oculto');
    } else {
        document.getElementById('resultados').classList.add('oculto');
    }
});
