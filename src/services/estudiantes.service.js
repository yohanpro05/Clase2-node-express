import { estudiantes } from "../data/estudiantes.data.js";

export const Agregar_Estudiante = (nuevo) => {
    estudiantes.push(nuevo);
    return nuevo;
};

export const Buscar_Estudiante = (id) => {
    return estudiantes.find(e => e.id === id);
};

export const Filtrar_Aprobados = () => {
    return estudiantes.filter(e => e.nota >= 3.0);
};

export const Calcular_Promedio = () => {
    if (estudiantes.length === 0) return 0;
    const suma = estudiantes.reduce((acc, e) => acc + e.nota, 0);
    return (suma / estudiantes.length).toFixed(2);
};