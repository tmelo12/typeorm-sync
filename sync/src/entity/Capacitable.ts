import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { Community } from "./Community"
import { Capabilitie } from "./Capabilitie"

@Entity()
export class Capacitable {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToOne(() => Community, (community) => community.capacitables)
    community: Community

    @ManyToMany(() => Capabilitie, (capabilitie) => capabilitie.capacitables)
    capabilities: Capabilitie[]
}