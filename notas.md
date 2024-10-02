`Script con is:inline: `

**Comportamiento:** El script con is:inline hace que el contenido del script se inserte directamente en el HTML generado, es decir, no se carga como un archivo externo. Esto significa que se ejecuta inmediatamente cuando el navegador procesa ese bloque de código.
Ubicación: Como su nombre lo indica, se inserta "inline", directamente en el HTML en la ubicación en la que se ha declarado.
Uso: Es útil cuando quieres que el JavaScript sea parte del HTML y se ejecute directamente, sin que haya una solicitud adicional al servidor para cargar un archivo externo. Ideal para scripts pequeños o aquellos que no justifiquen la carga de un archivo adicional.

- Astro.glob
  Es una forma de optimizar el rendimiento de tu sitio web. Permite buscar archivos Markdown en el directorio src/pages y renderizarlos en la página.

- Astro.glob.entries
  Devuelve un array de objetos que contienen información sobre cada archivo encontrado. Cada objeto tiene las siguientes propiedades:

* path: La ruta del archivo.
* type: El tipo de archivo. Puede ser "file" o "directory".
* ext: La extensión del archivo.
* name: El nombre del archivo sin la extensión.
* isDirectory: Un booleano que indica si el archivo es un directorio.
* isFile: Un booleano que indica si el archivo es un archivo.

- Astro.glob.glob
  Devuelve un array de objetos que contienen información sobre cada archivo encontrado. Cada objeto tiene las siguientes propiedades:

* path: La ruta del archivo.
* type: El tipo de archivo. Puede ser "file" o "directory".
* ext: La extensión del archivo.
* name: El nombre del archivo sin la extensión.
* isDirectory: Un booleano que indica si el archivo es un directorio.
* isFile: Un booleano que indica si el archivo es un archivo.

- Astro.glob.glob
  Esta función devuelve un array de objetos que contienen información sobre cada archivo encontrado.
