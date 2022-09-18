function portfolio() {
  const yo = datosCompletos().then((res) => {
    return res;
  });
  yo.then((res)=>{console.log(res.serviciosPorfolioAssets.Portfolio[0]
    )})
  yo.then((res) => {
    return res;
  }).then((res) => {
    const busquedaEle = document.querySelector(".pagina__portfolio");
    busquedaEle.innerHTML = 
    `
    <h1 class="pagina__portfolio__titulo">${res.quienSoy}</h1>
    <p class="pagina__portfolio__porfolio">${res.portfolio}</p>
    `;
  });

  yo.then((res)=>{return res.serviciosPorfolioAssets.Portfolio}).then((res)=>{
    console.log(res)
    res.forEach(element => {            
        let div = document.createElement('div');
        div.className = "pagina__mis__servicios__bloque__mis__portfolios";
        div.innerHTML = `
        <img class="pagina__mis__portfolios__imagen" src="${element.imagen}"></img>
        <h2 class="pagina__mis__portfolios__titulo__secundario">${element.titulo}</h2>
        <p class="pagina__mis__portfolios__parrafo">${element.parrafo}</p>
        <p class="pagina__mis__portfolios__url">${element.url}</p>
        `;
        document.querySelector(".pagina__portfolio__individual__data").append(div);
    });

  });
}

portfolio();
