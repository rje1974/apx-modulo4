function footer (ele) {
    const busquedaEle = document.querySelector(".pagina__final");
    busquedaEle.innerHTML = 
    `
    <div class="footer__todo">
      <h1 class="marce-principal">JUAN</h1>
      <div class="redessociales-conjunto">
        <img
          class="redessociales-individual"
          src="./pages/assets/Group 13.svg"
          alt="instagram"
        />
        <img
          class="redessociales-individual"
          src="./pages/assets/Group 11.svg"
          alt="linkedin"
        />
        <img
          class="redessociales-individual"
          src="./pages/assets/Group 10.svg"
          alt="github"
        />
      </div>
    </div>
    `
}

footer()