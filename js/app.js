window.addEventListener("load", inicio);
	var textArea = document.getElementById("textarea");
	var boton = document.getElementById("btn");
	var tareas = document.getElementById("tareas");
function inicio(){
	boton.addEventListener("click", tarea);
}
function tarea(){
	/*var nuevaTarea = document.createElement("div");
	nuevaTarea.classList.add("checkbox");
	tareas.appendChild(nuevaTarea);*/
	var nuevaTarea = crear("div", ["checkbox"]);
	tareas.appendChild(nuevaTarea);
	
	var label = document.createElement("label");
	nuevaTarea.appendChild(label);
	var input  = document.createElement("input");
	input.type = "checkbox";
	label.appendChild(input);
	
	var texto = textArea.value;
	var n = document.createTextNode(texto);
	label.appendChild(n);

	/*var trash = document.createElement("span");
	trash.classList.add("glyphicon", "glyphicon-trash", "icon");*/
	var trash = crear("span", ["glyphicon", "glyphicon-trash", "icon"]);
	nuevaTarea.appendChild(trash);

	input.addEventListener("click", tachar);

	trash.addEventListener("click", borrar);
	textArea.value= "";
}
function tachar(){
	this.parentElement.classList.toggle("tachar");
}
function borrar(){
	padres(this, 1).remove();
}
/*reutilizables*/
function padres(elemento,numero){
	while(numero > 0){
		elemento = elemento.parentElement;
		numero--; 
	}
	return elemento;
}
/*
function eliminar(){
	elemento.parentElement.removeChild(elemento);
}*/
// crear elementos y clases
function crear(etiqueta, clases = []) {
	var elemento = document.createElement(etiqueta);
	var l = clases.length;
	if (l > 0) {
		for (var i = 0; i < l; i++) {
			elemento.classList.add(clases[i]);
		}
	}
	return elemento;
}