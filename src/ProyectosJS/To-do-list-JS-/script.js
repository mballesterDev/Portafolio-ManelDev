const contenedorPadreLista = document.querySelector('#listaTareas');
const botonTareas = document.querySelector('#boton1');
const input1 = document.querySelector('#input1');

function creadorTarea(e) {
    if (input1.value === '') {
        alert('Añade texto, por favor');
    } else {
        const nuevaTarea = document.createElement('div');
        nuevaTarea.classList.add('tarea');
        contenedorPadreLista.appendChild(nuevaTarea);

        const elementoP = document.createElement('p');
        elementoP.textContent = input1.value; // Aquí se asigna el valor al párrafo, no al div
        nuevaTarea.appendChild(elementoP);

        const botonPapelera = document.createElement('button');
        botonPapelera.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
        botonPapelera.classList.add('boton2');
        nuevaTarea.appendChild(botonPapelera);

        // Agregar el evento click para eliminar la tarea justo después de crear el botón de papelera
        botonPapelera.addEventListener('click', function() {
            eliminarTarea(nuevaTarea);
        });
    }
}



function eliminarTarea(tarea) {
    tarea.remove();
}

botonTareas.addEventListener('click', creadorTarea);


/* const nuevaTarea = document.createElement('div');
nuevaTarea.classList.add('tarea');
contenedorPadreLista.appendChild(nuevaTarea);

const elementoP = document.createElement('p');
nuevaTarea.appendChild(elementoP);
elementoP.textContent = input1.value;

const botonPapelera = document.createElement('button');
botonPapelera.innerHTML = '<i class="fa-regular fa-trash-can" id="papelera">';
botonPapelera.classList.add('boton2');
nuevaTarea.appendChild(botonPapelera);

eliminarTarea(nuevaTarea); */