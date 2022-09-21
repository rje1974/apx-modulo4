function servicios() {
  const yo = datosCompletos().then((res) => {
    return res;
  });

  yo.then((res) => {
    return res.misServiciosAssets.misServicios;
  }).then((res) => {
    res.forEach((element) => {
      let div = document.createElement("div");
      div.className = "pagina__mis__servicios__bloque__mis__servicios";
      div.innerHTML = `
        <img class="pagina__mis__servicios__imagen" src="${element.imagen}"></img>
        <h2 class="pagina__mis__servicios__titulo__secundario">${element.titulo}</h2>
        <p class="pagina__mis__servicios__parrafo">${element.parrafo}</p>
        `;
      document.querySelector(".pagina__mis__servicios__servicios").append(div);
    });

    // })
  });
}

function servicios2() {
  const yo2 = datosCompletos()
    .then((res) => {
      return res.misServciosAssets2.misServicios2;
    })
    .then((res) => {
      const objetivo = res;
      const busquedaEle2 = (document.querySelector(
        ".pagina__mis__servicios__bloque__mis__servicios__html"
      ).innerHTML = objetivo.map((item) => {
        return `
        <div class="pagina__mis__servicios__bloque__mis__servicios_individuales__html">
          <img class="pagina__mis__servicios__imagen__html" src="${item.imagen}"></img>
          <h2 class="pagina__mis__servicios__titulo__secundario__html">${item.titulo}</h2>
          <p class="pagina__mis__servicios__parrafo__html">${item.parrafo}</p>
        </div>
          `;
      }));
    });
}

function main() {
  servicios();
  servicios2();
}

main();
