# L'essence du temps - Frontend

Este es el frontend de la aplicación L'essence du temps, una tienda de lujo de relojes y perfumes.

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Sidebar.jsx
│   │   ├── TrustBanner.jsx
│   │   └── ProductCard.jsx
│   │
│   ├── pages/            # Páginas de la aplicación
│   │   ├── inicio/
│   │   │   └── Inicio.jsx
│   │   ├── perfumes/
│   │   │   └── Perfumes.jsx
│   │   └── relojes/
│   │       └── Relojes.jsx
│   │
│   ├── types/            # Datos estáticos (simulan API)
│   │   └── types.js
│   │
│   ├── services/         # Servicios para llamadas API futuras
│   │   └── productService.js
│   │
│   ├── hooks/            # Custom React hooks
│   │   └── useCustomHooks.js
│   │
│   ├── assets/           # Recursos estáticos
│   │
│   ├── App.jsx           # Componente principal
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── public/               # Archivos públicos
├── package.json
└── vite.config.js
```

## 🚀 Características

- ✅ Estructura modular y escalable
- ✅ Componentes reutilizables
- ✅ Datos estáticos preparados para migración a API
- ✅ Navegación entre páginas (Inicio, Perfumes, Relojes)
- ✅ Diseño responsive
- ✅ Imágenes mediante URLs
- ✅ Sistema de tipos para datos
- ✅ Servicios preparados para integración de API
- ✅ Custom hooks para funcionalidades futuras

## 📦 Dependencias Instaladas

- **React** - Librería UI
- **lucide-react** - Iconos modernos
- **Vite** - Build tool

## 🔧 Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Preview de producción
npm run preview
```

## 📝 Datos Estáticos

Los datos están organizados en `src/types/types.js`:

- **products**: Array de productos (relojes y perfumes)
- **carouselSlides**: Slides del carousel principal
- **reviews**: Reseñas de clientes
- **trustFeatures**: Características de confianza

Estos datos están preparados para ser reemplazados por llamadas a API en el futuro.

## 🎨 Estilos

- Fuentes: **Playfair Display** (títulos) y **Montserrat** (texto)
- Colores principales: Negro (#000000), Blanco (#FFFFFF), Grises
- Diseño minimalista y elegante

## 🔄 Próximos Pasos

1. Integrar API real en `services/productService.js`
2. Implementar sistema de carrito de compras
3. Añadir autenticación de usuarios
4. Implementar sistema de búsqueda
5. Añadir filtros y ordenamiento de productos
6. Implementar sistema de favoritos
7. Añadir proceso de checkout

## 🖼️ Imágenes

Las imágenes se gestionan mediante URLs externas (Unsplash). Para usar imágenes locales:

1. Colocar imágenes en `src/assets/`
2. Importar en el componente: `import imagen from './assets/imagen.jpg'`
3. Usar en el componente: `<img src={imagen} alt="..." />`
