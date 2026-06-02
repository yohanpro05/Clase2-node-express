import express from 'express';
import estududiantesRoutes from './routes/estudiantes.routes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/estudiantes', estududiantesRoutes);

app.listen(PORT, () => {

    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});