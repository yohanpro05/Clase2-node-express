# Sistema de Gestión de Estudiantes

Proyecto desarrollado en **Node.js** utilizando el framework **Express**, siguiendo una arquitectura de capas (MVC + Services) para la gestión y procesamiento de datos de estudiantes.

## 🚀 Características
El sistema permite realizar operaciones CRUD básicas y de procesamiento sobre un conjunto de datos (array de objetos):

- **Agregar:** Añadir nuevos estudiantes al sistema.
- **Buscar:** Localizar un estudiante específico mediante su ID.
- **Filtrar:** Obtener un listado exclusivo de estudiantes aprobados (nota $\geq 3.0$).
- **Calcular:** Obtener el promedio general de las notas registradas.

## 🛠️ Tecnologías
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- JavaScript (ES Modules)

## 📂 Estructura del Proyecto
La lógica está organizada para mantener una separación clara de responsabilidades:

```text
src/
├── app.js               # Punto de entrada y configuración del servidor
├── controllers/         # Lógica de manejo de peticiones (req/res)
├── data/                # Fuente de datos (estudiantes.data.js)
├── routes/              # Definición de rutas y endpoints
└── services/            # Lógica de negocio (find, filter, reduce)



