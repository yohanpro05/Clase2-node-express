import { 
    Agregar_Estudiante, 
    Buscar_Estudiante, 
    Filtrar_Aprobados, 
    Calcular_Promedio 
} from "../services/estudiantes.service.js";

export const agregar = (req, res) => {
    const nuevo = Agregar_Estudiante(req.body);
    res.status(201).json({ mensaje: "Agregado", data: nuevo });
};

export const buscar = (req, res) => {
    const id = parseInt(req.params.id);
    const estudiante = Buscar_Estudiante(id);
    estudiante 
        ? res.json({ mensaje: "Ok", data: estudiante }) 
        : res.status(404).json({ mensaje: "No encontrado" });
};

export const aprobados = (req, res) => {
    res.json({ mensaje: "Ok", data: Filtrar_Aprobados() });
};

export const promedio = (req, res) => {
    res.json({ mensaje: "Ok", data: Calcular_Promedio() });
};