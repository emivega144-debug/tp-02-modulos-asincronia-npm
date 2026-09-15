const path = require("node:path");
const pc = require("picocolors");
const {leerJuegosJson, carpetaContenedoraTexto} = require("./archivos");
const { catalogoDeJuegos} = require("./juegos")

const rutaDatos = path.join(__dirname, "../datos/Juegos.json");
const rutaSalida = path.join(__dirname, "../salida/catalogo-de-juegos.txt");

async function main(){
try{
  console.log(pc.cyan("Leyendo Catalogo...."));

  const juegos = await leerJuegosJson(rutaDatos);
  const catalogo = await catalogoDeJuegos (juegos);
await carpetaContenedoraTexto(rutaSalida, catalogo);

   console.log(catalogo);
    console.log(pc.green(`Informe generado en: ${rutaSalida}`));
  } 
catch (error) {
    console.error(pc.red(`No se pudo generar el informe: ${error.message}`));
    process.exitCode = 1;
  }

}

main();