
function addCarrito(id){
    let product = products.traerID(id)[0];
    carrito.add(product);
}

window.addEventListener('DOMContentLoaded', function(){ 
    products = new Products();
    products.mostrarHTML("productosContainer", productos);

    carrito = new ShoppingCart();
    carrito.recargarCarrito();
    carrito.mostrarHTML("containerCarrito");
})

//AJAX//
$('#btnCargar').click(function(){
  var esperar = 2000;
  $.ajax({

    url: "/javaScript/contenido.html", 
    beforeSend : function(){
      $('#contenido').text('Cargando!!!...');
    }
    ,
    success : function(data){
      setTimeout(function(){
        $('#contenido').html(data);
      }, esperar
      ); 
    }  
  });
})
