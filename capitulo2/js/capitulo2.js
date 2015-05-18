$(document).ready(function(){
    ejemplo2_1();
});


function ejemplo2_1(){
	var objeto = {};
	// extiende a objeto la capacidad de trabajar con eventos
	_.extend(objeto, Backbone.Events);
	//  on nos perite recibir eventos enviados por si mismo
	objeto.on("alert", function(msg, el){
		alert(msg);
		el.append("<div class='tested'>Elemento Pasado</div>");
	});
	//usaremos jQuery para usar al usuario para interactuar.
	$("#ejemplo1").click(function(event) {
		//ahora necesitamos poder lanzar los eventos usamos trigger
		objeto.trigger("alert","Pasando  parametros de eventos", $(this));
	});
	
}







