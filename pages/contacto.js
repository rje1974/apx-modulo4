function contacto (ele) {
    const busquedaEle = document.querySelector(".pagina__contacto");
    busquedaEle.innerHTML = `
    
    <h1 class="pagina__contacto__titulo__principal">Escribime</h1>
    <form class="pagina__contacto__formulario">
      <br />
      <br />
      <br />
      <label>
        <span class="pagina__contacto__formulario__campo__titulos">NOMBRE</span>
        <br />
        <br />
        <input class="pagina__contacto__formulario__campo__input__nombre" name="nombre" type="text" />
      </label>
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
    </form>
    
    `
}

contacto()