import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from "typeorm"
import { Capacitable } from "./Capacitable"

@Entity()
export class Capabilitie {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToMany(() => Capacitable, (capacitable) => capacitable.capabilities)
    @JoinTable()
    capacitables: Capacitable[]
}