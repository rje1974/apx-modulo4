function portfolio() {
  const yo = datosCompletos();
  yo.then((res) => {return res}).then((res)=>{
    const busquedaEle = document.querySelector(".pagina__portfolio");
    busquedaEle.innerHTML = 
    `
      <div class="pagina__portfolio__cabecera">
        <div class="pagina__portfolio__cabecera__columna__primera">
          <img class="pagina__portfolio__imagen" src="./pages/assets/yo.png"></img>
        </div>
        <div class="pagina__portfolio__cabecera__columna__segunda">
          <h1 class="pagina__portfolio__titulo">${res.quienSoy}</h1>
          <p class="pagina__portfolio__porfolio">${res.portfolio}</p>
        </div>
      </div>
    `;
  });
}

function portfolio2() {
  const yo2 = datosCompletos();
  yo2.then((res) => { return res}).then((res) => { 
    const objetivo = res.serviciosPorfolioAssets.Portfolio; 
    const busquedaEle2 = document.querySelector(".pagina__portfolio__individual__data").innerHTML = objetivo.map((item) => 
    {return `
    <div class="pagina__mis__servicios__bloque__mis__portfolios">
      <img class="pagina__mis__portfolios__imagen" src="${item.imagen}"></img>
      <h2 class="pagina__mis__portfolios__titulo__secundario">${item.titulo}</h2>
      <p class="pagina__mis__portfolios__parrafo">${item.parrafo}</p>
      <p class="pagina__mis__portfolios__url">${item.url}</p>
    </div>
    `
  })
    
  });
} 

function main() {
  portfolio();
  portfolio2();
}

main();


// `
// <div>
//   <h2 class="pagina__mis__portfolios__titulo__secundario">${element.titulo}</h2>
// </div>
// `
