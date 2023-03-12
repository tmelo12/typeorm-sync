import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
} from "typeorm"
import { Capacitable } from "./Capacitable"

@Entity()
export class Community {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Capacitable, (capacitable) => capacitable.community)
    capacitables: Capacitable[]
}