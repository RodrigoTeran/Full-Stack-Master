alert('Hola mundo!');

var nombre = 'Armando Rosas ';
var altura = 177;
/*
var concatenacion = `${nombre} ${altura}`;

var datos = document.getElementById('datos');

datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>

`;

if(altura >= 178){
    datos.innerHTML += ` <h1>Eres una persona alta</h1>`;
} else{
    datos.innerHTML += `<h1>Eres una persona bajita</h1>`;
}

for(let i = 2000; i <= 2020 ; i++){
    //Bloque de instrucciones
    datos.innerHTML += `<h2>Estamos en el año ${i} </h2>`;
}

*/

// Funciones

function muestraMiNombre(nombre, altura){
    var misDatos = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es ${nombre}</h2>
        <h3>Mido: ${altura} cm</h3>
    
    `;

    return misDatos;
}

function imprimir(){
    var datos = document.getElementById('datos');
    datos.innerHTML = muestraMiNombre('Armando', 178);
}

imprimir();

var nombres = ['Armando', 'Victor', 'Juan'];

document.write('<h1>Listado de nombres</h1>');
/*
for(let i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>');
}*/


nombres.forEach((nombre) => {
    document.write(nombre + '<br/>');
});


// Objetos JSON

var coche = {
    modelo: 'Mercedes Clase A',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    propiedad_extra: 'Valor aleatorio'
};

document.write('<h1>' + coche.modelo + '</h1>');
coche.mostrarDatos();

// Promesas: Dato o error
// Capturar

var saludar = new Promise((resolve, reject) => {

    setTimeout( () => {
        let saludo = 'Hola, buenas tardes !!';

        if (saludo){
            resolve(saludo);
        }
        else{
            reject('No ha saludo siponible')
        }
    }, 2000) // Va a atardar 2 segundos en ejecutar el bloque de codigo

});

saludar.then( resultado =>{
    alert(resultado); // Se ejecuta despues de la ejecucion de la promesa
}) 
.catch(error =>{
    alert(error); // Devuelve el reject de la promesa
});
