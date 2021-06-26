import { getCustomRepository } from "typeorm"
import { Compliments } from "../entities/Compliments";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";

class ListUserReceiveComplimentsService{
    async execute(user_id: string): Promise<Compliments[]>{
        const complimentsRepository = getCustomRepository(ComplimentsRepository);
        const compliments = await complimentsRepository.find({
            where: {
                user_receiver: user_id
            },
            relations: [
                "userSender",
                "userReceiver",
                "tag"
            ]
        });

        return compliments;
    }
}

export {ListUserReceiveComplimentsService}