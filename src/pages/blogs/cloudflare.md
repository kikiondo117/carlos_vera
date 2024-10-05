---
layout: ../../layouts/Blog.astro
title: 'Electron and Webpack configuration'
subtitle: 'Remix las ventajas de tener una fullastak app'
poster: '/images/cloud.png'
---

## Novedades interesantes 🧙‍♂️

Les voy a ser totalmente honesto, nunca he utilizado Cloudflare, independientemente del tiempo que llevo desarrollando, nunca he tenido la curiosidad ni la necesidad de utilizarlo. He pecado de utilizar siempre herramientas como Netlify o Vercel, pero justo ahora me ha surgido la curiosidad de utilizarlos por algunas novedades que han anunciado. Vamos a echar un vistazo 🙄.

### Workers

Hay novedades en **Cloudflare Workers**, para mi que soy un poco distraído se me olvidó que era un worker en Cloudflare, en resumen es un tipo de "serverless function" que permite ejecutar código js, ts o WebAssembly directamente en la infraestructura de Cloudflare, sin necesidad de la gestión de servidores tradicionales. Estos workers se ejecutan en el **edge** el cual es muy sonado actualmente, más si han estado trabajando con Remix. Esto significa que están distribuidos en centros de datos de Cloudflare alrededor del mundo, permitiendo que las respuestas sean más rápidas.

Al final como resumen, los Workers son funciones at the edge que pueden interceptar peticiones HTTPS y realizar acciones como procesar datos, almacenar en caché y responder con datos.

## Novedades en los Workers 💻

**Persisten Logs**: Tenemos una nueva vista de logs, con diferentes datos que nos van a ayudar a visualizar mejor acciones de nuestra aplicación por ejemplos errores, peticiones, etc.

Lamentablemente solo nos dan 200,000 logs por día, si queremos aumentarlo tenemos que pagar.

**OpenNext**: Desplegar aplicaciones Next.js en Cloudflare Workers. Al final esto es una iniciativa de Cloudflare para que puedan utilizar Next.js ya que actualmente está muy cerrado Next JS sobre las opciones de deploy limitando algunas funcionalidades.

Las ventajas que esto conlleva:

- Más barato 💸
- Más rápido ⏩

Si, tenemos la opción de hacer deploy en AWS pero con algunas limitaciones,

**Continuous integration & Continuous Delivery**: Ahora disponible en Cloudflare Workers, ahora podemos conectar el repositorio de Github muy similar a lo que hace Vercel.

**Workers preview URLs**: Esto se refiere a unas URLs donde podemos previsualizar nuestra app, muy similar a lo que hace Vercel.

**Despliegues graduales para Workers**: Vamos a tener la posibilidad de definir el porcentaje de los usuarios que van a poder ver la nueva versión, muy similar a los A/B test.

**Workers KV**: Mejoran la velocidad X3 teniendo en cuenta que ya era muy rapida esta base de datos.
