//Declarar variables
const nuevaTareaInput = document.getElementById("nuevaTareaInput");
const agregarBtn = document.getElementById("agregarBtn"); //boton agregar
const lista = document.getElementById("lista"); //listas de tareas
//const checkbox = document.getElementById("checkbox");
var tareas = [];
agregarBtn.addEventListener("click", function(e){
    e.preventDefault();
    const textoDeLaTarea = nuevaTareaInput.value;

    idTarea = new Date ().getTime();

    agregarTarea(textoDeLaTarea, idTarea); //se lee el texto de tarea y el id que es el tiempo
    
    
    var nt = {
        texto:textoDeLaTarea,
        idTarea:idTarea
    }
    tareas.push(nt);
    localStorage.setItem("tareas", JSON.stringify(tareas));

});

function agregarTarea(texto, id){ 

    const nuevoli =  document.createElement("li");

    nuevoli.setAttribute ("idTarea", id);

    nuevoli.innerHTML = 
    `
    <input type="checkbox" id="checkbox">
    <label for="Tarea">${texto} </label>
    <button class="delet" onclick="eliminarTarea(this)">🗑️</button>
    `;
    lista.prepend(nuevoli);

}
function eliminarTarea(e){
    recupId = e.parentElement.getAttribute ("idTarea"); //en la variable recupera el evento e
    console.log("RID",recupId)
    e.parentElement.remove();
    tareas = tareas.filter ( t => t.idTarea != recupId);//esto hace que el conjunto de tareas y si el idTarea y el recupId son distintos que se quede
    
    localStorage.setItem("tareas", JSON.stringify(tareas));

}

function checkbox(e){
   e.parentElement.strike();
}
//text-decoration-line: line-through;
window.onload = function(){
    tareasStorage = window.localStorage.getItem("tareas");
        if (tareasStorage != null){
            tareas = JSON.parse(tareasStorage);

    for (i=0; i<= tareas.length; i++){
       agregarTarea(tareas[i].texto, tareas[i].idTarea);
    }
}
}
