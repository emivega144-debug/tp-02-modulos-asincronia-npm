function formatearJuegos (juego, indice){

const categorias = juego.categorias.join(",");
const estado = juego.disponible ? "Disponible" : "No disponible";

return ` 
${indice + 1}. 
Titulo: ${juego.titulo} 
Editorial: ${juego.editorial} 
Año: ${juego.año}  
JugadoresMin: ${juego.jugadoresMin}
JugadoresMax: ${juego.jugadoresMax} 
Categorias: ${categorias} 
Estado: ${estado}`


}

function catalogoDeJuegos (juegos){

const juegosDeMesa = juegos.map(formatearJuegos)

return`
CATALOGO DE JUEGOS DE MESA

===========================
Cantidad de juegos: ${juegos.length}

${juegosDeMesa.join("\n")}

`
;
}

module.exports = { catalogoDeJuegos};

