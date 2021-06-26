import {Request, Response} from 'express'
import { CreateComplimentsService } from '../services/CreateComplimentsService';

class CreateComplimentController {
    async handle(request: Request, response: Response){
            const {tag_id, user_receiver, message} = request.body;
            const {user_id} = request;
            const createComplimentsService = new CreateComplimentsService();
            const compliment = await createComplimentsService.execute({message, tag_id, user_receiver, user_sender: user_id});

            return response.json(compliment);
    }
}

export {CreateComplimentController}