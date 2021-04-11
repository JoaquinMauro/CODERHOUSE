let productos = [{
    id: 1,
    img : "../img/antares2.jpg",
    precio: 1500,
    nombre : "ANTARES",
    cuerpo: "Fresno",
    Mango: "3 piezas de Maple/Guayacan",
    Diapasón: "Wengue",
    PerfilMango: "Thin D",
    Escala: 27
},
{
    id: 2,
    img : "../img/deimos2.jpg",
    precio: 1600,
    nombre : "DEIMOS",
    cuerpo: "Fresno",
    Mango: "3 piezas de Wengue/Purple Hearth",
    Diapasón: "Wengue",
    PerfilMango: "Thin D",
    Escala: 34
},
{
    id: 3,
    img : "../img/orion2.jpg",
    precio: 1700,
    nombre : "ORION",
    cuerpo: "Fresno",
    Mango: "Maple",
    Diapasón: "Wengue",
    PerfilMango: "Thin D",
    Escala: 36-34
},
{
    id: 4,
    img : "../img/rigel2.jpg",
    precio: 1800,
    nombre : "RIGEL",
    cuerpo: "Fresno",
    Mango: "3 piezas de Maple/Guayacan",
    Diapasón: "Wengue",
    PerfilMango: "Thin D",
    Escala: 27
}]


function Products (){

    this.renderHTML = function(producto){
       return `
        <div class="col-12 col-md-6" id="${producto.id}">
            <div class="modelo animate__animated animate__lightSpeedInLeft">
                <figure>
                    <img src="${producto.img}" alt="Deimos">
                    <div class="capa">
                        <h3 class="nombre">${producto.nombre}</h3>
                    </div>                    
                </figure>
                <div class="contenido">
                    <h3 class="precio">u$s ${producto.precio}</h3>
                    <p>Cuerpo: ${producto.cuerpo}</p>
                    <p>Mango: ${producto.mango}</p>
                    <p>Diapasón:${producto.diapason}</p>
                    <p>Perfil Mango: ${producto.perfilMango}</p>
                    <p>Escala: ${producto.escala}</p>
                    <button for="#1" type="button" class="btn btn-secondary btn-lg btn-block addItem" onclick="addCarrito(${producto.id})">COMPRAR</button>
                    
                </div>
            </div>
        </div>    
`
    }

    this.mostrarHTML = function(containerID, array){
        let container = document.getElementById(containerID);
        container.innerHTML = "";
        let html = "";

        array.forEach(producto => {
            console.log(producto);
            html = html + this.renderHTML(producto);
        });

        container.innerHTML = html;
        
    }

    this.traerID = function(id){
        return productos.filter(pepe => pepe.id === id);
    }


}


