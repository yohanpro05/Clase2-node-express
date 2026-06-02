// Simulamos la base de datos
let estudiantes = [
    { id: 1, nombre: "Ana", nota: 4.5 },
    { id: 2, nombre: "Luis", nota: 2.8 },
    { id: 3, nombre: "Marta", nota: 3.9 }
];

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