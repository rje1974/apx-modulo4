function footer (ele) {
    const busquedaEle = document.querySelector(".pagina__final");
    busquedaEle.innerHTML = 
    `
    <div class="footer__todo">
      <a class="marce-principal" href="./index.html">JUAN</a>
      <div class="redessociales-conjunto">
        <a 
          class="redessociales-individual"
          target="_blank" 
          href="https://www.instagram.com/rje1974/">
          <img src="./pages/assets/Group 13.svg" alt="instagram" />
        </a>
        <a 
          class="redessociales-individual"
          target="_blank" 
          href="https://www.linkedin.com/in/juan-eduardo-riva/">
          <img src="./pages/assets/Group 11.svg" alt="linkedin" />
        </a>

        <a 
          class="redessociales-individual"
          target="_blank" 
          href="https://github.com/rje1974">
          <img src="./pages/assets/Group 10.svg" alt="github" />
        </a>

      </div>
    </div>
    `
}
footer()