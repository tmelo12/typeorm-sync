import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm"
import { Capacitable } from "./Capacitable"

@Entity()
export class Community {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => Capacitable, (capacitable) => capacitable.community)
    capacitables: Capacitable[]
}