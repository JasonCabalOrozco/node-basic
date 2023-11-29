const user = [
    {
      usuario: "jecabal@gmail.com",
      contraseña: "12345Abcd$"
    },
    {
      usuario: "jeco@hotmail.com",
      contraseña: "4321Cabal$"
    },
    {
      usuario: "cabal@gmail.com",
      contraseña: "Cabal1234s$"
    }
  ];

 
 
  
  const usuarioInput = document.getElementById('usuario');
  const contraseñaInput = document.getElementById('contraseña');
  const boton = document.getElementById('boton');
  const form = document.getElementById('form');
  const mensaj = document.getElementById('mensaje');

  function validarUsuario(usuario, contraseña) {
    return new Promise((resolve, reject) => {
      
      let usuarioEncontrado = false; 
      let regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,3})+$/;
  
      if (!regexemail.test(usuario)) {
        reject('El usuario es inválido ');
        return;
      }
  
      if (contraseña.length < 8) {
        reject('La contraseña es muy corta ');
        return;
      }

     
    
      for (let i = 0; i < user.length; i++) {
        if (user[i].usuario === usuario) {
          usuarioEncontrado = true;
  
          setTimeout(() => {
            if (user[i].contraseña === contraseña) {
              resolve("Ingresando...");
            } else {
              reject("La contraseña es incorrecta");
            }
          }, 3000);
  
          break;
        }
      }
  
      if (!usuarioEncontrado) {
        reject("Usuario no encontrado");
      }
    });
  }

  function validarContrasena() {
    const contraseñaInput = document.getElementById('contraseña').value;
    const mensajeValidacion = document.getElementById('mensaje-validacion');
  
    const tieneMayuscula = /[A-Z]/.test(contraseñaInput);
    const tieneMinuscula = /[a-z]/.test(contraseñaInput);
    const tieneNumero = /\d/.test(contraseñaInput);
    const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(contraseñaInput);
  
    let mensaje = '';
  
    mensajeValidacion.style.color = 'green'; // Set the initial color
  
    if (!tieneMayuscula) {
      mensaje += 'Debe contener al menos una mayúscula. <br>';
    } else {
      mensaje += 'Ya contiene mayúscula. <br>';
    }
  
    if (!tieneMinuscula) {
      mensaje += 'Debe contener al menos una minúscula. <br>';
    } else {
      mensaje += 'Ya contiene minúscula. <br>';
    }
  
    if (!tieneNumero) {
      mensaje += 'Debe contener al menos un número. <br>';
    } else {
      mensaje += 'Ya contiene número. <br>';
    }
  
    if (!tieneCaracterEspecial) {
      mensaje += 'Debe contener al menos un carácter especial. ';
    } else {
      mensaje += 'Ya contiene carácter especial. ';
    }
    
    mensajeValidacion.innerHTML = mensaje;
  }
  
  
  document.getElementById('contraseña').addEventListener('input', validarContrasena);


  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuario = usuarioInput.value;
    const contraseña = contraseñaInput.value;
    
    
   
  validarUsuario(usuario, contraseña)
  .then((mensaje) => {
    mensaj.innerHTML = mensaje; 
    window.location.href = "tablas.html";
  })
  .catch((error) => {
    mensaj.textContent = error;
  });

  });