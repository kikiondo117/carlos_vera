---
layout: ../../layouts/Blog.astro
title: 'Astro in depth'
subtitle: 'A deep dive into Astro'
poster: '/images/astro.png'
---

Version en español:

## Javascript Runtime fatigue

Un componente Astro es basicamente un bloque de código necesario para crear un Astro project, suena un poco redundante pero es lo que es, teniendo esta definicion en mente, vamos a lo siguiente.

Estos componentes son HTML templates sin ningun cliente-side runtime, vamos a explicarlo de una manera sencilla con algunos ejemplos 🧙‍♂️

Imaginemos que creamos un projecto en mi librería favorita, React JS ❤️

```
 npx create-react-app kikis_404
```

Listo ya tenemos nuestro proyecto en React, ahora vamos a tratar de utilizar un poco la imaginación.

Al iniciar el proyecto en React tenemos una UI como la siguiente:

<center>
  <img src="https://assets.digitalocean.com/articles/66983/React_Dark_BG.png" alt="react" width="400px" height="200px" />
</center>

En nuestra UI tenemos un parrafo, un enlace y una imagen de React, algo muy sencillo.

Si hacemo un `npm run build` para crear el bundle de nuestra app sencilla, vamos a crear un proceso generando los siguientes archivos:

- build/static/js/main.js
- build/static/js/787.f2a4c4f0.chunk.js
- build/static/css/main.f1a5d3d6.chunk.css

Pero aparte de estos, React crea un html file con el root element donde nuestra app se renderizara insertando elementos usando js.

Este archivo HTML tiene en el **Head** el **bundle css** y el js donde el script tiene el atributo `defer="defer"`.

Lo realmente interesante es que el archivo JS generado por el bundle, este tiene miles de lineas de código y eso que no hemos creado nada nuevo, solo utilizamos el template basico, siendo más exactos 9000 lineas de código 😱!!!

Este archivo va a se ejecutado por el Browser ya que es una funcion auto-ejecutada.

### ¿Qué es este archivo JS?

Practicamente es el runtime de React que necesitamos para trabajar con React, state, props, virtual DOM, etc.

Esto no es una critica, React nunca va a dejar de ser mi librería favorita 😊 pero tenemos que tener en cuenta que puede ser un poco overkill para un proyecto simple.
