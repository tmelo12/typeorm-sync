import { Entity, Column, Generated, ManyToOne, CreateDateColumn, ManyToMany, UpdateDateColumn, PrimaryColumn, JoinTable } from "typeorm"
import { Community } from "./Community"
import { Capabilitie } from "./Capabilitie"
@Entity({
    name: 'Capacitables',
})
export class Capacitable {
    @Column()
    @Generated("uuid")
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @ManyToOne(() => Community, (community) => community.capacitables)
    community: Community

    @ManyToMany(() => Capabilitie, (capabilitie) => capabilitie.capacitables)
    @JoinTable({
        name: "CapabilitiesOfPeople",
    })
    capabilities: Capabilitie[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}