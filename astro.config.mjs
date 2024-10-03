// @ts-check
import { defineConfig } from 'astro/config';

// Define el base dependiendo del entorno

// https://astro.build/config
export default defineConfig({
  base: import.meta.env.PROD ? '/carlos_vera/' : '/', // Cambiar el base según el entorno
});
