import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid';
import {Expose} from 'class-transformer';

@Entity()
class Tags {
    @PrimaryColumn({type: 'uuid'})
    readonly id: string;

    @Column({nullable: true, type: 'text'})
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: string;

    @Expose({name: "name_custom"})
    nameCustom(): string{
        return `#${this.name}`;
    }

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Tags};
