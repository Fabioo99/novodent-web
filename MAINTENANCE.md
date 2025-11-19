# 🔧 Guía de Mantenimiento - Novodent

Esta guía proporciona instrucciones para mantener y actualizar el contenido del sitio web de Novodent sin necesidad de conocimientos técnicos avanzados.

---

## 📋 Tabla de Contenidos

1. [Tareas Comunes de Mantenimiento](#tareas-comunes-de-mantenimiento)
2. [Actualizar Información de Contacto](#actualizar-información-de-contacto)
3. [Agregar o Modificar Marcas](#agregar-o-modificar-marcas)
4. [Actualizar Imágenes](#actualizar-imágenes)
5. [Modificar Testimonios](#modificar-testimonios)
6. [Actualizar Enlaces de Catálogo](#actualizar-enlaces-de-catálogo)
7. [Cambiar Textos y Contenido](#cambiar-textos-y-contenido)
8. [Mantenimiento de Dependencias](#mantenimiento-de-dependencias)
9. [Backup y Recuperación](#backup-y-recuperación)

---

## 🎯 Tareas Comunes de Mantenimiento

### Frecuencia Recomendada

| Tarea | Frecuencia | Archivo(s) |
|-------|-----------|-----------|
| Actualizar información de contacto | Cuando cambie | `Header.tsx`, `Footer.tsx`, `Contact.tsx` |
| Revisar enlaces rotos | Mensual | Todos los componentes |
| Actualizar catálogo de productos | Cuando haya nuevos | `BrandPage.tsx` |
| Verificar funcionamiento de WhatsApp | Semanal | Probar botones |
| Actualizar testimonios | Trimestral | `Testimonials.tsx` |
| Revisar imágenes rotas | Mensual | Carpeta `public/` |

---

## 📞 Actualizar Información de Contacto

### Cambiar Número de WhatsApp

**Ubicaciones a actualizar:**

1. **Header.tsx** (línea 19)
```typescript
const handleWhatsApp = () => {
  window.open('https://wa.me/584124555310', '_blank'); // ← Cambiar aquí
};
```

2. **Footer.tsx** (línea 10)
```typescript
const handleWhatsApp = () => {
  window.open('https://wa.me/584124555310', '_blank'); // ← Cambiar aquí
};
```

3. **Contact.tsx** (línea 36)
```typescript
const handleWhatsApp = () => {
  window.open('https://wa.me/584124555310', '_blank'); // ← Cambiar aquí
};
```

Y en la línea 29 del formulario:
```typescript
window.open(`https://wa.me/584124555310?text=${encodeURIComponent(message)}`, '_blank');
```

### Cambiar Email

**Ubicaciones:**

1. **Footer.tsx** (línea 22)
```typescript
const handleEmail = () => {
  window.open('mailto:novodent.vzla@gmail.com'); // ← Cambiar aquí
};
```

2. **Contact.tsx** (línea 44)
```typescript
const handleEmail = () => {
  window.open('mailto:novodent.vzla@gmail.com'); // ← Cambiar aquí
};
```

### Cambiar Instagram

**Ubicaciones:**

1. **Header.tsx** y **Footer.tsx**
```typescript
const handleInstagram = () => {
  window.open('https://instagram.com/novodentca', '_blank'); // ← Cambiar aquí
};
```

---

## 🏢 Agregar o Modificar Marcas

### Agregar una Nueva Marca

**Archivo:** `src/pages/BrandPage.tsx`

1. **Agregar al array de marcas en Header y Footer**

En `Header.tsx` y `Footer.tsx` (línea ~13):
```typescript
const brands = [
  'SAEVO BY GNATUS', 'AJAX', 'DEOCA', 'SPD', 'BIOART', 'ORTHOMETRIC',
  'VOCO', 'SHOFU', 'ANYCUBIC', 'PRIZMA', 'PANDA', 'WOSON',
  'DTE', 'JINME', 'DENTALFILM', 'PREVEST', 'MDT', 'TPC', 'DMP', 'AALBADENT',
  'NUEVA MARCA' // ← Agregar aquí
];
```

2. **Agregar información completa de la marca**

En `BrandPage.tsx`, agregar al objeto `brandData`:

```typescript
'NUEVA MARCA': {
  name: 'NUEVA MARCA',
  slogan: 'Slogan de la marca',
  description: 'Descripción detallada de la marca...',
  image: '/brands/nueva-marca/hero.png',
  logo: '/brands/nueva-marca-logo.png',
  products: [
    { 
      name: 'Producto 1', 
      description: 'Descripción del producto',
      image: '/brands/nueva-marca/producto1.png'
    },
    { 
      name: 'Producto 2', 
      description: 'Descripción del producto',
      image: '/brands/nueva-marca/producto2.png'
    }
  ]
},
```

3. **Agregar imágenes**

Crear carpeta: `public/brands/nueva-marca/`

Agregar:
- `hero.png` - Imagen principal (1200x600px recomendado)
- `producto1.png`, `producto2.png`, etc. (800x800px recomendado)
- Logo en `public/brands/nueva-marca-logo.png` (300x100px recomendado)

### Modificar Marca Existente

Buscar la marca en `BrandPage.tsx` y editar:
- `name`: Nombre de la marca
- `slogan`: Frase descriptiva
- `description`: Descripción completa
- `products`: Array de productos

### Eliminar una Marca

1. Eliminar del array `brands` en Header y Footer
2. Eliminar la entrada en `brandData` en BrandPage.tsx
3. (Opcional) Eliminar carpeta de imágenes en `public/brands/`

---

## 🖼️ Actualizar Imágenes

### Estructura de Carpetas de Imágenes

```
public/
├── logo-novodent.png          # Logo principal
├── brands/                     # Imágenes de marcas
│   ├── ajax/
│   │   ├── hero.png
│   │   └── producto1.png
│   ├── anycubic/
│   └── ...
└── assets/                     # Otros recursos
```

### Cambiar Logo Principal

**Archivo:** `public/logo-novodent.png`

1. Reemplazar el archivo manteniendo el mismo nombre
2. Tamaño recomendado: 400x100px (formato PNG con fondo transparente)
3. Si cambias el nombre, actualizar en:
   - `Header.tsx` (línea ~37)
   - `Footer.tsx` (línea ~43)

### Cambiar Imagen Hero

**Archivo:** `src/assets/dentist-professional-new.jpg`

Tamaño recomendado: 1200x800px

Actualizar en `WhyChoose.tsx`:
```typescript
import professionalImage from '@/assets/nueva-imagen.jpg';
```

### Optimizar Imágenes

Antes de subir imágenes, optimizarlas con:
- [TinyPNG](https://tinypng.com/) - Compresión PNG/JPG
- [Squoosh](https://squoosh.app/) - Herramienta de Google
- Photoshop: "Save for Web"

**Tamaños recomendados:**
- Logo: 400x100px
- Hero images: 1200x600px
- Productos: 800x800px
- Thumbnails: 400x400px

---

## 💬 Modificar Testimonios

**Archivo:** `src/components/Testimonials.tsx`

Buscar el array `testimonials` (línea ~6):

```typescript
const testimonials = [
  {
    name: "Dr. Carlos Mendoza",
    role: "Odontólogo General",
    location: "Caracas",
    content: "Texto del testimonio...",
    rating: 5,
    image: "/testimonials/doctor1.jpg"
  },
  // Agregar más testimonios aquí
];
```

### Agregar Nuevo Testimonio

```typescript
{
  name: "Dra. María González",
  role: "Ortodoncista",
  location: "Valencia",
  content: "Excelente servicio y productos de calidad...",
  rating: 5,
  image: "/testimonials/doctor-nuevo.jpg"
}
```

### Imágenes de Testimonios

- Ubicación: `public/testimonials/`
- Tamaño: 200x200px (cuadrado)
- Formato: JPG o PNG

---

## 📚 Actualizar Enlaces de Catálogo

### Cambiar Enlace de Google Drive

**Archivo:** `src/components/Header.tsx` (línea 23)

```typescript
const handleCatalog = () => {
  window.open('https://drive.google.com/drive/folders/TU_NUEVO_LINK', '_blank');
};
```

También actualizar en `Footer.tsx` si es necesario.

---

## ✏️ Cambiar Textos y Contenido

### Sección Hero (Página Principal)

**Archivo:** `src/components/Hero.tsx`

```typescript
<h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
  Tu texto aquí
</h1>
<p className="text-xl md:text-2xl text-muted-foreground mb-8">
  Subtítulo aquí
</p>
```

### Sección "¿Por Qué Elegir Novodent?"

**Archivo:** `src/components/WhyChoose.tsx`

Buscar el array `features` (línea ~5):

```typescript
const features = [
  {
    icon: Lightbulb,
    title: 'Innovación',
    description: 'Descripción aquí...'
  },
  // Modificar o agregar más características
];
```

### Footer - Información de la Empresa

**Archivo:** `src/components/Footer.tsx` (línea ~48)

```typescript
<p className="text-background/80 leading-relaxed mb-6">
  Tu descripción de la empresa aquí...
</p>
```

### Horario de Atención

**Archivo:** `src/components/Contact.tsx` (línea ~124)

```typescript
<div className="text-muted-foreground">Lunes a Viernes De 8:00 a.m. a 5:00 p.m.</div>
<div className="text-muted-foreground">Sabado y Domingo no laboramos</div>
```

---

## 📦 Mantenimiento de Dependencias

### Actualizar Dependencias

```bash
# Ver dependencias desactualizadas
npm outdated

# Actualizar todas las dependencias menores
npm update

# Actualizar dependencia específica
npm install react@latest

# Actualizar todas las dependencias (cuidado)
npm install -g npm-check-updates
ncu -u
npm install
```

### Verificar Seguridad

```bash
# Auditoría de seguridad
npm audit

# Corregir vulnerabilidades automáticamente
npm audit fix

# Corregir incluyendo breaking changes
npm audit fix --force
```

---

## 💾 Backup y Recuperación

### Crear Backup

```bash
# Backup completo del proyecto
tar -czf novodent-backup-$(date +%Y%m%d).tar.gz \
  --exclude='node_modules' \
  --exclude='dist' \
  --exclude='.git' \
  .

# O simplemente hacer commit en Git
git add .
git commit -m "Backup antes de cambios importantes"
git push
```

### Restaurar Versión Anterior

```bash
# Ver historial de commits
git log --oneline

# Volver a un commit específico
git checkout <commit-hash>

# Crear nueva rama desde ese punto
git checkout -b recuperacion-backup
```

---

## 🔍 Verificación de Cambios

### Checklist Antes de Publicar

- [ ] Probar localmente con `npm run dev`
- [ ] Verificar todos los enlaces
- [ ] Probar botones de WhatsApp
- [ ] Verificar imágenes carguen correctamente
- [ ] Probar en móvil (responsive)
- [ ] Revisar consola del navegador (sin errores)
- [ ] Hacer build de producción `npm run build`
- [ ] Probar build con `npm run preview`

### Comandos Útiles

```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install

# Verificar errores de TypeScript
npx tsc --noEmit

# Formatear código
npx prettier --write "src/**/*.{ts,tsx}"
```

---

## 🆘 Solución de Problemas Comunes

### Problema: Cambios no se reflejan

**Solución:**
```bash
# Limpiar cache del navegador
# O forzar recarga: Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)

# Limpiar cache de Vite
rm -rf node_modules/.vite
npm run dev
```

### Problema: Imagen no se muestra

**Solución:**
- Verificar que la ruta sea correcta (case-sensitive)
- Verificar que la imagen esté en `public/`
- Usar rutas absolutas: `/brands/logo.png` no `./brands/logo.png`

### Problema: Error al hacer build

**Solución:**
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install

# Verificar errores de TypeScript
npm run lint
```

---

## 📞 Contacto para Soporte Técnico

Si encuentras problemas que no puedes resolver:

1. **Revisar esta guía completa**
2. **Consultar DEPLOYMENT.md** para problemas de despliegue
3. **Contactar al desarrollador** con:
   - Descripción del problema
   - Capturas de pantalla
   - Mensajes de error (si hay)
   - Pasos para reproducir el problema

---

## 📚 Recursos Adicionales

- [Documentación de React](https://react.dev/)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de Vite](https://vitejs.dev/)

---

<div align="center">
  <p>© 2025 Novodent C.A. - Guía de Mantenimiento v1.0</p>
  <p>Última actualización: Enero 2025</p>
</div>
