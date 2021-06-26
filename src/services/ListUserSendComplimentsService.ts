import { getCustomRepository } from "typeorm"
import { Compliments } from "../entities/Compliments";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";

class ListUserSendComplimentsService{
    async execute(user_id: string): Promise<Compliments[]>{
        const complimentsRepository = getCustomRepository(ComplimentsRepository);
        const compliments = await complimentsRepository.find({
            where: {
                user_sender: user_id
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

export {ListUserSendComplimentsService}