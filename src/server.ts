import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import './database';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        });
    }
    return response.status(500).json({
        status: "Error",
        message: "Internal Server Error"
    });
});
app.listen(3333, () => console.log('Server is running on port: 3333'));

/*
    GET => Buscar uma informação
    POST => Inserir (criar) uma informação
    PUT => Alterar uma informação
    DELETE => Remover um dado
    PATCH => Alterar uma informação específica
*/

/**
 * Query Params => Parametros para filtro (opcional) - http://localhost:3333/exemplo?name=exemplo&description=exemplo
 * Routes Params => Parametros que vem na rota - http://localhost:3333/exemplo
 * Body Params => Parametros que vem no corpo da requisição - {"name": "exemplo", "description": "exemplo"}
 */

