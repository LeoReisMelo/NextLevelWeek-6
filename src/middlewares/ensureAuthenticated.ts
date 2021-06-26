import {Request, Response, NextFunction} from 'express';
import {verify} from 'jsonwebtoken'

interface IPayload {
    sub: string;
}

export function ensureAuthenticate(request: Request, response: Response, next: NextFunction){
    //Receber o token
    const authToken = request.headers.authorization;

    //Validar se o token está preenchido
    if(!authToken){
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    //Validar se o token é valido
    try{
        const {sub} = verify(token,'f3a15a9caaa9f47a6dc035042325a4a3') as IPayload;
        request.user_id = sub;
        return next();
    }catch(err){
        return response.status(401).end();
    }

    //Recuperar informações do usuario


}