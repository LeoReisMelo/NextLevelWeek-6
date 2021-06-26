import { Exclude } from "class-transformer";
import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid';

@Entity()
class Users {
    @PrimaryColumn({type: 'uuid'})
    readonly id: string;

    @Column({nullable: true, type: 'text'})
    name: string;

    @Column({nullable: true, type: 'text'})
    email: string;

    @Exclude()
    @Column({nullable: true, type: 'text'})
    password: string;

    @Column({nullable: true, type: 'boolean'})
    admin: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: string;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Users};
