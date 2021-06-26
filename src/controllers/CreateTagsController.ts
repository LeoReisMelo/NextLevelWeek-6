import {Request, Response} from 'express'
import { CreateTagsService } from '../services/CreateTagsService';

class CreateTagsController {
    async handle(request: Request, response: Response){
            const {name} = request.body;
            const createUsersService = new CreateTagsService();
            const user = await createUsersService.execute(name);

            return response.json(user);
    }
}

export {CreateTagsController}