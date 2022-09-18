function cabecera(ele) {
  const busquedaEle = document.querySelector(".pagina__principal__cabecera");

  busquedaEle.innerHTML = 
  `
    
  <div class="cabecera__marce">
        <h1 class="cabecera__marce__texto">JUAN</h1>
  </div>

  <div class="cabecera__ventana">
    <img class="cabecera__ventana__cerrada__icono" src="./components/assets/burger.svg" alt="menu tres tiras"/>
      
    <div class="cabecera__ventana__abierta__ventana">
      <div class="cabecera__ventana__abierta__div__icono">
        <img  class="cabecera__ventana__abierta__icono" src="./components/assets/close.svg" alt="menu cierre cruz"/>
      </div>
      <div class="cabecera__ventana__abierta__parrafo">
        <div>
          <a class="cabecera__ventana__abierta__texto" href="./porfolio.html">Portfolio</a></li>
        </div>
        <div>
          <a class="cabecera__ventana__abierta__texto" href="./servicios.html">Servicios</a></li>
        </div>
        <div>
          <a class="cabecera__ventana__abierta__texto" href="./contacto.html">Contacto</a></li>
        </div>
      </div>
    </div>
  </div>
  `;

  document.querySelector(".cabecera__ventana__cerrada__icono").addEventListener("click", () => {
    document.querySelector(".cabecera__ventana__cerrada__icono").style.display = "none";
    document.querySelector(".cabecera__ventana__abierta__icono").style.display = "flex";
    document.querySelector(".cabecera__ventana__abierta__div__icono").style.display = "flex";
    document.querySelector(".cabecera__ventana__abierta__ventana").style.display = "block";
    document.querySelector(".cabecera__ventana__abierta__parrafo").style.display = "flex";
    document.querySelector(".cabecera__ventana__abierta__texto").style.display = "flex";
    document.querySelector(".cabecera__ventana__abierta__texto").style.display = "flex";
    document.querySelector(".cabecera__ventana__abierta__texto").style.display = "flex";
  });

  document.querySelector(".cabecera__ventana__abierta__icono").addEventListener("click", () => {
    document.querySelector(".cabecera__ventana__cerrada__icono").style.display = "block";
    document.querySelector(".cabecera__ventana__abierta__div__icono").style.display = "none";
    document.querySelector(".cabecera__ventana__abierta__icono").style.display = "none";
    document.querySelector(".cabecera__ventana__abierta__ventana").style.display = "none";
    document.querySelector(".cabecera__ventana__abierta__parrafo").style.display = "none";
    document.querySelector(".cabecera__ventana__abierta__texto").style.display = "none";
    document.querySelector(".cabecera__ventana__abierta__texto").style.display = "none";
    document.querySelector(".cabecera__ventana__abierta__texto").style.display = "none";
    });
}

cabecera();