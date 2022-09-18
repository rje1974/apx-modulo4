async function servicios() {
    const yo = datosCompletos().then((res) => {
        return res;
    });

    yo.then((res) => { return res;})
    .then((res) => {
        const busquedaEle = document.querySelector(".pagina__mis__servicios");
        busquedaEle.innerHTML = 
        `
        <h1 class="pagina__mis__servicios__titulo">${res.misServiciosTitle}</h1>
        <div class="pagina__mis__servicios__servicios"></div>
        `
        ;
    })

    yo.then((res)=>{return res.misServiciosAssets.misServicios}).then((res)=>{
        console.log(res)
        res.forEach(element => {            
            let div = document.createElement('div');
            div.className = "pagina__mis__servicios__bloque__mis__servicios";
            div.innerHTML = `
            <img class="pagina__mis__servicios__imagen" src="${element.imagen}"></img>
            <h2 class="pagina__mis__servicios__titulo__secundario">${element.titulo}</h2>
            <p class="pagina__mis__servicios__parrafo">${element.parrafo}</p>
            `;
            document.querySelector(".pagina__mis__servicios__servicios").append(div);
        });

        // })

    })



                
    
}

servicios()
