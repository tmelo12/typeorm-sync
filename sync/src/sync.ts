import { MoreThan, Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import { Capacitable } from "./entity/Capacitable";

export class Sync {
    private capacitableRepository: Repository<Capacitable>;
    private created: any;
    private updated: any;
    private lastSync: Date;

    constructor() {
        this.capacitableRepository = AppDataSource.getRepository(Capacitable);
        this.created = [];
        this.updated = [];
        this.lastSync = new Date();
        this.lastSync.setHours(this.lastSync.getHours() - 30);
    }

    async getAllCreated() {
        await AppDataSource.getRepository(Capacitable).find({
            where: {
                createdAt: MoreThan(this.lastSync)
            },
        }).then(response => {
            this.created.push(response);
        }).catch(e => {
            console.log('Error find', e);
        });
    }
}