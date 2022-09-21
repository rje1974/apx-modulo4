function contacto(ele) {
  const busquedaEle = document.querySelector(".pagina__contacto__formulario");
  busquedaEle.innerHTML = `
    
      <br />
      <br />
      <br />
      <label for="nombre" class="pagina__contacto__formulario__campo__titulos" input="nombre">NOMBRE</label>
      <br />
      <input id="nombre" class="pagina__contacto__formulario__campo__input__nombre" name="nombre" type="text" />
      <br />
      <br />
      <br />
      <label>
        <span class="pagina__contacto__formulario__campo__titulos">EMAIL</span>
        <br />
        <br />
        <input class="pagina__contacto__formulario__campo__input__email" name="email" type="text" />
      </label>
      <br />
      <br />
      <br />
      <label>
        <span class="pagina__contacto__formulario__campo__titulos">Mensaje</span>
        <br />
        <br />
        <input class="pagina__contacto__formulario__campo__input__mensaje" name="texto" type="text" />
      </label>
      <br />
      <br />
      <br />
      <button class="pagina__contacto__formulario__campo__button">Enviar</button>

    `;
}

function enviar() {
  const botonazo = document.querySelector(
    ".pagina__contacto__formulario__campo__button"
  );
  botonazo.addEventListener("click", checkboxClick, false);

  function checkboxClick(event) {
    const emilio = document.querySelector(
      ".pagina__contacto__formulario__campo__input__email"
    ).value;
    const mensaje = document.querySelector(
      ".pagina__contacto__formulario__campo__input__mensaje"
    ).value;
    event.preventDefault();
    const paquete = { to: emilio, message: mensaje };
    // console.log(paquete);
    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paquete),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

function main() {
  contacto();
  enviar();
}

main();
