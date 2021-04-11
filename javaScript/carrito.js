//agregar item//
// var boton = document.getElementsByClassName("addItem");
// for(i=0; i<boton.length; i++){
// boton[i].addEventListener('click', function(){
//   alert('La guitarra se ha agregado al carrito');
// });
// }

// $(".addItem").on("click", function(e){
//   alert("La guitarra se ha agregado al carrito con exito");
//   console.log(e);
//   console.log(e.target);
//   console.log(e.target.id);
//   items.find(function(elemento){return elemento.id == e.target.id});




//     SELECCIONADOS.push(e)


//     for(const comprado of SELECCIONADOS){
//       $("#productos").append(`<p>$(comprado.nombre) $(comprado.precio)</p>`)
//     }
// });

// function buscarObjeto(elemennto, id){
//   return elemennto.id === id;
// }

// let SELECCIONADOS = [];


// //AJAX//
// $('#btnCargar').click(function(){
//   var esperar= 2000;
//   $.ajax({

//     url: "/javaScript/contenido.html", 
//     beforeSend : function(){
//       $('#contenido').text('Cargando!!!...');
//     }
//     ,
//     success : function(data){
//       setTimeout(function(){
//         $('contenido').html(data);
//       }, esperar
//       ); 
//     }  
//   });
// })
//sintanxis ternaria if

/*
if (condicion) {
//bloque si es true la condicion
} else {
  si la condicion es false
}  

(condicion) ? 
bloque true : 
bloque else.

*/
 

function ShoppingCart(){
  this.cart = [];

  this.recargarCarrito = function(){
                                                  //recuperar localStorage
    this.cart = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
     
  
  }


  this.add = function(item){
    this.cart.push(item);
    //guardar en localstorage
    localStorage.setItem('cart', JSON.stringify(this.cart));
  
    this.mostrarHTML("containerCarrito");
    this.total();
 

    

  }

  this.total = function(){
    var cart = this.cart.forEach(item =>{
      console.log(item.precio);
    })
  }

  //render bucle foreach 
  this.mostrarHTML = function(containerID){
    let array = this.cart;
    let container = document.getElementById(containerID);
    container.innerHTML = "";
    let html = "";

    array.forEach(item => {

        html = html + `
        <li><a class="dropdown-item" href="#">${item.nombre}</a></li>
        `;
    });

    container.innerHTML = html;
    
}


}










