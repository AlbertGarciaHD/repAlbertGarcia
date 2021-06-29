
const boton = document.getElementById("boton")

const accion = () => {

    const colores = document.getElementById("paleta")
    const ancho = document.getElementById("ancho-cuadro")
    const altura = document.getElementById("altura-cuadro")
    const infor = document.getElementById("Informacion")
    const contenedor = document.getElementById("contenedor")


    contenedor.style.width = ancho.value;
    contenedor.style.height = altura.value;
    document.getElementById("contenedor").innerHTML=infor.value;
    document.getElementById("contenedor").style.backgroundColor = colores.value;

}


boton.addEventListener('click', accion)