# Parque Tecnológico Cartagena - Landing Page

![Estado del Proyecto](https://img.shields.io/badge/Estado-En_Desarrollo-green)
![Tecnología](https://img.shields.io/badge/Stack-React_|_Tailwind_|_TypeScript-blue)

Una landing page moderna y minimalista diseñada para posicionar al **Parque Tecnológico de Cartagena** como el principal hub de innovación Web3 y emprendimiento en el Caribe. Este proyecto busca atraer startups, inversores y talento digital mediante una interfaz limpia, profesional y tecnológicamente avanzada.

## 🚀 Características Principales

- **Diseño Web3 & Moderno**: Estética limpia con uso de espacios en blanco, tipografía sans-serif (Inter) y detalles en colores "Teal/Turquesa" que evocan tecnología y frescura caribeña.
- **Totalmente Responsivo**: Adaptable a dispositivos móviles, tablets y escritorio (Mobile-First).
- **Componentes Interactivos**:
  - Navbar con efecto "glassmorphism" al hacer scroll.
  - Sección de Beneficios con tooltips interactivos en hover.
  - Carrusel/Grid de Startups y Testimonios.
  - Formulario de contacto con validación de estado visual.
- **Optimización**: Estructura preparada para SEO básico y carga rápida utilizando Tailwind CSS.

## 🛠️ Stack Tecnológico

El proyecto está construido utilizando las últimas tecnologías para el desarrollo web moderno:

- **React 18**: Biblioteca principal para la construcción de la interfaz de usuario.
- **TypeScript**: Para un código robusto, tipado y mantenible.
- **Tailwind CSS**: Framework de utilidad para el diseño y estilizado rápido y consistente.
- **Lucide React**: Biblioteca de iconos ligeros y modernos.
- **Vite**: Entorno de desarrollo rápido (implícito en la estructura).

## 📂 Estructura del Proyecto

```text
/
├── components/          # Componentes reutilizables de la UI
│   ├── Navbar.tsx       # Navegación responsiva
│   ├── Hero.tsx         # Sección principal con CTA
│   ├── Benefits.tsx     # Grid de beneficios con interacciones
│   ├── Portfolio.tsx    # Listado de startups y testimonios
│   ├── ContactSection.tsx # Formulario de captura de leads
│   └── Footer.tsx       # Pie de página con enlaces legales
├── types.ts             # Definiciones de tipos TypeScript globales
├── App.tsx              # Componente raíz y orquestador
├── index.tsx            # Punto de entrada de la aplicación
└── index.html           # Documento HTML base con configuraciones SEO
```

## 🎨 Personalización

### Paleta de Colores
El proyecto utiliza una extensión de la configuración de Tailwind para definir los colores de marca (`brand`). Puedes modificar estos valores en el archivo `index.html` dentro del script de configuración de Tailwind:

```javascript
colors: {
  brand: {
    500: '#14b8a6', // Color primario
    // ... otros tonos
  }
}
```

### Contenido
Los datos mostrados (startups, testimonios, beneficios) están definidos como constantes dentro de cada archivo de componente para facilitar su edición rápida sin necesidad de un backend en esta etapa.

## 📦 Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/cartagena-tech-park.git
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

## 📄 Licencia

Este proyecto está distribuido bajo la licencia MIT. Siéntete libre de usarlo y modificarlo para tus necesidades.

---
*Desarrollado con ❤️ para el ecosistema de innovación de Cartagena.*