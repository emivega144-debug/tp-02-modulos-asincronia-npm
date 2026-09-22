# Trabajo Práctico 02 - Módulos, asincronía y NPM

## Descripcion

Es un programa que genera un catalogo de juegos de mesa apartir de la informacion que se encuentra en un archivo JSON, el cual se muestra en la consola.

## Instalacion

Para usar el proyecto, lo primero es tener Node.js instalado en tu computadora.  
Después, abrí una terminal en la carpeta del proyecto y colocar npm install picocolors.


Ese comando descarga las dependencias necesarias (en este caso picocolors).  
Con eso ya queda listo para ejecutar.


## Ejecución

Una vez instaladas las dependencias, el proyecto se puede correr desde la terminal con npm start. El catalogo se imprime en pantalla y también queda guardado en la carpeta 
salida en un archivo txt.

## Estructura del proyecto

El proyecto se encuentra organizado de la siguiente manera para separar las responsabilidades del sistema:

tp-02-modulos-asincronia-npm/
│
├── datos/
│   └── juegos.json           Archivo JSON con el catálogo de juegos de mesa (datos de entrada)
│
├── salida/                   Carpeta generada automáticamente por el programa
│   └── catalogo-juegos.txt   Informe de texto generado a partir del procesamiento
│
├── src/
│   ├── archivos.js           Módulo exclusivo para la lectura y escritura asíncrona 
│   ├── juegos.js             Módulo encargado de transformar los datos y armar el formato del informe
│   └── index.js              Módulo principal que coordina la ejecución, rutas y manejo de errores
│
├── .gitignore                Archivos y carpetas ignorados por Git 
├── package.json              Configuración de NPM, scripts y dependencias del proyecto
├── package-lock.json         Registro de versiones exactas de las dependencias instaladas
└── README.md                 Documentación general del proyecto y respuestas conceptuales


## Flujo asincrónico

El programa funciona de manera asincrónica usando async y await.  
Primero se leen los datos del archivo JSON, después se transforman en un catalogo y finalmente se escribe el resultado en un archivo de texto.  
Cada paso espera al anterior para que no haya problemas de orden:

1. leerJuegosJson: abre y convierte el archivo JSON en objetos.  
2. CatalogoDeJuegos :arma el catalogo con los datos.  
3. CarpetaContenedoraTexto: guarda el catalogo en la carpeta salida.  
4. El catalogo se muestra en la consola y queda guardado en un archivo txt.

## Dependencias

El proyecto usa una sola librería externa que es picocolors

## Preguntas

1. 

Modulo archivo.js: tiene como responsabilidad leer el archivo JSON creando tambien la carpeta y el archivo de salida.

Modulo juegos.js: tiene como responsabilidad dar forma a los datos de los juegos. Recibe la información desde el JSON ya procesado, usa una función para transformar cada juego en una línea de texto con sus datos principales y junta todas esas líneas en un catálogo completo, agregando también la cantidad total de juegos.  

modulo index.js: tiene como responsabilidad coordinar todo el programa. Importa las funciones de los otros módulos (archivos.js y juegos.js), define las rutas de entrada (JSON) y salida (archivo de texto). Usa async y await para ejecutar los pasos en orden, leer los datos y generar el catálogo.  


2. Exportar una función significa dejarla disponible para que otros archivos la puedan usar. Ejecutar una función es llamarla directamente dentro del código para que haga su trabajo y devuelva un resultado.

3. La promesa representa la operación asincrónica de leer un archivo.  
Cuando se resuelve, devuelve el contenido del archivo en forma de texto.  
Si algo falla la promesa se rechaza y lanza un error.

4. Se await dentro de una funcion asinc porque pausa esa función hasta que la promesa se resuelve.

5. Puede capturar errores como: archivo JSON inexistente, JSON mal escrito, falta de permisos o problemas al crear la carpeta de salida. El catch muestra el mensaje en consola y evita que el programa se corte.


6. No se publica node_modules porque es una carpeta pesada que se reconstruye automáticamente con npm install.

7. Se usa picocolors para mostrar mensajes con colores en la consola, lo que hace más claro distinguir entre avisos, errores o confirmaciones. Está en dependencies porque el programa la necesita en tiempo de ejecución, no solo en desarrollo. Por eso se instala junto con el proyecto y queda registrada en el package.json.
