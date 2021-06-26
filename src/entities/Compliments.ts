import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid';
import { Tags } from "./Tags";
import { Users } from "./Users";

@Entity()
class Compliments {
    @PrimaryColumn({type: 'uuid'})
    readonly id: string;

    @Column({nullable: true, type: 'text'})
    message: string;

    @Column({nullable: true, type: 'uuid'})
    user_sender: string;

    @JoinColumn({name: "user_sender"})
    @ManyToOne(() => Users)
    userSender: Users

    @Column({nullable: true, type: 'uuid'})
    user_receiver: string;

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => Users)
    userReceiver: Users

    @Column({nullable: true, type: 'uuid'})
    tag_id: string;

    @JoinColumn({name: "tag_id"})
    @ManyToOne(() => Tags)
    tag: Tags

    @CreateDateColumn()
    createdAt: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Compliments};
