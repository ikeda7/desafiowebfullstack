import setorRoutes from './routes/setor.route.js';
import empresaRoutes from './routes/empresa.route.js';

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/setor', setorRoutes);
app.use('/empresa', empresaRoutes);

app.get('/', (req, res) => {
    res.send('Hello jv');
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
