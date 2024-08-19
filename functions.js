
let matrix = [];    //  Matriz para almacenar la informacion
let matrixGasto = [];   //  Matriz para almacenar lo que debe pagar cada uno
let sumaGasto = 0; //  Variable para almacenar la suma de los gastos
let gastoUnit = 0;   //  Variable para almacenar el gasto unitario


// Función para agregar un nuevo elemento (una nueva fila) a la matriz
function addElement() {
    
    const nombre = document.getElementById("Nombre").value; //  Obtenemos los valores del Nombre desde los inputs
    const gasto = document.getElementById("Gasto").value;   //  Obtenemos los valores del Gasto desde los inputs

    // Verificamos si ambos inputs no están vacíos y si gasto es un número válido
    if (nombre !== "" && gasto !== "" && !isNaN(gasto)) {
        
        const numericGasto = parseFloat(gasto); //  Convertimos colValue a número antes de agregarlo

        matrix.push([nombre, numericGasto]);    //  Agregamos un nuevo elemento a la matriz como un array (una fila)

        sumaGasto += numericGasto; //  Actualizamos la suma de las columnas
        gastoUnit = sumaGasto/matrix.length;    //  Actualizamos el gasto unitario
        matrixGasto.push([nombre, numericGasto-gastoUnit]); // Agregamos un nuevo elemento a la matriz de lo que debe pagar cada uno

        // Llamamos a las funciones para actualizar la lista y la suma visualmente
        updateMatrixList();
        updateSumResult();

        // Limpiamos los campos de entrada
        document.getElementById("Nombre").value = "";
        document.getElementById("Gasto").value = "";
    } else {
        alert("Por favor, ingresa valores válidos para ambos campos. El 'Gasto' debe ser un número.");
    }
}

// Función para actualizar la lista que se muestra en el HTML
function updateMatrixList() {
    const list = document.getElementById("matrixList");
    //const debe = document.getElementById("matrixDebe");

    // Limpiamos la lista actual
    list.innerHTML = "";
    //debe.innerHTML = "";

    // Recorremos la matriz y creamos un elemento <li> por cada fila
    matrix.forEach(function(item) {
        const listItem = document.createElement("li");
        listItem.textContent = `Nombre: ${item[0]}, Gasto: ${item[1]}, Debe: ${item[1] - sumaGasto/matrix.length}`;
        list.appendChild(listItem);
    });
/*
    matrixGasto.forEach(function(item){
        const listItem2 = document.createElement("li");
        listItem2.textContent = `Nombre: ${item[0]}, Debe: ${item[1]}`;
        list.appendChild(listItem2);
    });
    */
}

// Función para actualizar el resultado de la suma en el HTML
function updateSumResult() {
    const sumDisplay = document.getElementById("sumResult");
    sumDisplay.textContent = sumaGasto;

    const unitDisplay = document.getElementById("unit");    //  Muestra el gasto unitario
    unitDisplay.textContent = gastoUnit;
}
