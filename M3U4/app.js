
const fondo = document.querySelector(".fondo");

function FondoRojo(){
    fondo.style.backgroundColor = '#ff0000';
}
function FondoAzul(){
    fondo.style.backgroundColor = '#0729ec';
}
function FondoNegro(){
    fondo.style.backgroundColor = '#000000';
}


// EJERCICIO 2

function getID(id){
    return document.getElementById(id).value;
}
function innerHTML(id,result){
    return document.getElementById(id).innerHTML=result;
}
function contadorCaracteres(){
    setInterval(function(){
        var c = getID("txt");
        if(c.length>50){
            innerHTML("txtVista","Solo permite 50 caracteres");
        } else{
            innerHTML("txtVista",c.length);
        }
    },0000);
}

//EJERCICIO 3

var alumnos = [
    {nombre: 'Juan Gomez', nota: 7},
    {nombre: 'Pedro Rodriguez', nota: 4},
    {nombre: 'Roxana García', nota: 8},
    {nombre: 'Luciano Lopez', nota: 5},
    {nombre: 'Fernanda Gimenez', nota: 6},
    {nombre: 'Florencia Martinez', nota: 10},
    {nombre: 'Raul Sanchez', nota: 7},
    {nombre: 'Sandra Figueroa', nota: 8}];

const alumnosAprobados = alumnos.filter(item =>item.nota >=7);

console.log(alumnosAprobados[0]);

const containerText = document.querySelector('.container-text');

for(let i = 0; i < alumnosAprobados.length; i++){
    const texto = document.createElement('p');
    containerText.append(texto);
    texto.innerHTML = `${alumnosAprobados[i].nombre} = ${alumnosAprobados[i].nota}`;
}
