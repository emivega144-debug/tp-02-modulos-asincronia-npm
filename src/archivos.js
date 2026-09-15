const fs = require("node:fs/promises");
const path = require("node:path");


async function leerJuegosJson(ruta) {

    const datos = await fs.readFile(ruta, "utf8");
    return JSON.parse(datos)

}

async function carpetaContenedoraTexto(ruta, texto) {
    
    const carpeta = path.dirname(ruta);
    await fs.mkdir(carpeta, {recursive: true});
    await fs.writeFile(ruta, texto, "utf8");

}

module.exports = {
    leerJuegosJson,
    carpetaContenedoraTexto,
};