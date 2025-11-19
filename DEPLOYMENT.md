# 🚀 Guía de Despliegue - Novodent

Esta guía proporciona instrucciones detalladas para desplegar el sitio web de Novodent en diferentes plataformas de hosting.

---

## 📋 Tabla de Contenidos

1. [Preparación para el Despliegue](#preparación-para-el-despliegue)
2. [Despliegue en Vercel](#despliegue-en-vercel)
3. [Despliegue en Netlify](#despliegue-en-netlify)
4. [Despliegue en GitHub Pages](#despliegue-en-github-pages)
5. [Configuración de Dominio Personalizado](#configuración-de-dominio-personalizado)
6. [Variables de Entorno](#variables-de-entorno)
7. [Optimizaciones de Producción](#optimizaciones-de-producción)
8. [Solución de Problemas](#solución-de-problemas)

---

## 🔧 Preparación para el Despliegue

### 1. Verificar que el proyecto funciona localmente

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Verificar que no hay errores
npm run lint
```

### 2. Generar build de producción

```bash
npm run build
```

Este comando genera una carpeta `dist/` con los archivos optimizados para producción.

### 3. Previsualizar el build localmente

```bash
npm run preview
```

Verifica que todo funcione correctamente antes de desplegar.

---

## ☁️ Despliegue en Vercel (Recomendado)

Vercel es la opción más sencilla y rápida para proyectos React/Vite.

### Método 1: Despliegue desde GitHub (Automático)

1. **Conectar repositorio con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Crea una cuenta o inicia sesión
   - Click en "Add New Project"
   - Importa el repositorio de GitHub

2. **Configurar el proyecto**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

3. **Desplegar**
   - Click en "Deploy"
   - Vercel automáticamente desplegará el sitio
   - Cada push a la rama main desplegará automáticamente

### Método 2: Despliegue Manual con CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login en Vercel
vercel login

# Desplegar
vercel

# Para producción
vercel --prod
```

### Configuración de vercel.json

El proyecto ya incluye un archivo `vercel.json` con la configuración necesaria:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 🌐 Despliegue en Netlify

### Método 1: Despliegue desde GitHub

1. **Conectar con Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Click en "Add new site" → "Import an existing project"
   - Conecta tu repositorio de GitHub

2. **Configuración de Build**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Configurar redirects**
   
   Crea un archivo `public/_redirects`:
   ```
   /*    /index.html   200
   ```

### Método 2: Despliegue Manual

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Desplegar
netlify deploy

# Para producción
netlify deploy --prod
```

---

## 📄 Despliegue en GitHub Pages

### 1. Configurar vite.config.ts

Agrega la base URL en `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/novodent-web/', // Nombre de tu repositorio
  plugins: [react()],
})
```

### 2. Instalar gh-pages

```bash
npm install --save-dev gh-pages
```

### 3. Agregar scripts en package.json

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 4. Desplegar

```bash
npm run deploy
```

### 5. Configurar GitHub Pages

- Ve a Settings → Pages en tu repositorio
- Source: Deploy from a branch
- Branch: gh-pages / root

---

## 🌍 Configuración de Dominio Personalizado

### En Vercel

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Configura los DNS según las instrucciones

**Registros DNS necesarios:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### En Netlify

1. Ve a Domain settings
2. Add custom domain
3. Configura los DNS:

```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [tu-sitio].netlify.app
```

---

## 🔐 Variables de Entorno

Si tu proyecto usa variables de entorno:

### En Vercel
1. Settings → Environment Variables
2. Agrega cada variable:
   - `VITE_API_URL`
   - `VITE_WHATSAPP_NUMBER`
   - etc.

### En Netlify
1. Site settings → Environment variables
2. Agrega las variables necesarias

### Archivo .env.production

Crea un archivo `.env.production` (no lo subas a Git):

```env
VITE_API_URL=https://api.novodent.com
VITE_WHATSAPP_NUMBER=584124555310
```

---

## ⚡ Optimizaciones de Producción

### 1. Optimización de Imágenes

```bash
# Comprimir imágenes antes de desplegar
# Usar herramientas como TinyPNG o ImageOptim
```

### 2. Configurar Headers de Cache

En `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 3. Habilitar Compresión

Vercel y Netlify habilitan compresión Gzip/Brotli automáticamente.

---

## 🔍 Verificación Post-Despliegue

### Checklist

- [ ] El sitio carga correctamente
- [ ] Todas las páginas son accesibles
- [ ] Las imágenes se muestran correctamente
- [ ] Los enlaces de WhatsApp funcionan
- [ ] El formulario de contacto funciona
- [ ] El mapa de Google Maps se muestra
- [ ] La navegación entre páginas funciona
- [ ] El sitio es responsive en móviles
- [ ] No hay errores en la consola del navegador
- [ ] El SEO básico está configurado

### Herramientas de Verificación

- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **Lighthouse** (Chrome DevTools)

---

## 🐛 Solución de Problemas

### Problema: Página 404 al recargar

**Solución**: Configurar redirects/rewrites

En Vercel (vercel.json):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

En Netlify (_redirects):
```
/*    /index.html   200
```

### Problema: Imágenes no se cargan

**Solución**: Verificar rutas de imágenes
- Usar rutas absolutas desde `/public`
- Ejemplo: `/logo-novodent.png` en lugar de `./logo-novodent.png`

### Problema: Build falla

**Solución**: 
```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Problema: Variables de entorno no funcionan

**Solución**:
- Verificar que las variables empiecen con `VITE_`
- Configurarlas en el panel de la plataforma de hosting
- Redesplegar después de agregar variables

---

## 📊 Monitoreo y Analytics

### Google Analytics

1. Crear cuenta en Google Analytics
2. Obtener ID de medición (G-XXXXXXXXXX)
3. Agregar script en `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Vercel Analytics

Vercel incluye analytics automáticos en planes pagos.

---

## 🔄 Actualizaciones Continuas

### Flujo de Trabajo Recomendado

1. **Desarrollo Local**
   ```bash
   git checkout -b feature/nueva-funcionalidad
   # Hacer cambios
   npm run dev
   ```

2. **Commit y Push**
   ```bash
   git add .
   git commit -m "Descripción de cambios"
   git push origin feature/nueva-funcionalidad
   ```

3. **Merge a Main**
   - Crear Pull Request en GitHub
   - Revisar cambios
   - Merge a main

4. **Despliegue Automático**
   - Vercel/Netlify detectan el push a main
   - Despliegan automáticamente

---

## 📞 Soporte

Para problemas con el despliegue:
1. Revisar logs de la plataforma de hosting
2. Consultar documentación oficial
3. Contactar al equipo de desarrollo

---

## 📚 Referencias

- [Documentación de Vite](https://vitejs.dev/guide/static-deploy.html)
- [Documentación de Vercel](https://vercel.com/docs)
- [Documentación de Netlify](https://docs.netlify.com/)
- [React Router - Deployment](https://reactrouter.com/en/main/guides/deployment)

---

<div align="center">
  <p>© 2025 Novodent C.A. - Guía de Despliegue v1.0</p>
</div>
