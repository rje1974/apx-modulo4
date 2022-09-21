function datosCompletos() {
    return fetch("https://cdn.contentful.com/spaces/6f2a9gq665e7/environments/master/entries?access_token=LiazaQ1DPVvmaiGXteX_YTr50aIeqr-jsTiQ6SNudJY&content_type=desafioPagina").then
        (
            (res) => { return res.json() }
        ).then(
            (res) => { return res.items[0].fields }
        )
}


function quienSoy () {
    const yo = datosCompletos().then((res)=>{return res})
    yo.then((res)=>{return res}).then(
        (res)=>{
            const busquedaEle = document.querySelector(".pagina__principal__cuerpo");
            busquedaEle.innerHTML = 
            `
            <h1 class="pagina__pricipal__titulo__principal">${res.saludo}</h1>
            <h1 class="pagina__pricipal__titulo__secundario">${res.quienSoy}</h1>
            `
        }
    )

}

function main (){
    datosCompletos()
    quienSoy()
}

main()

