import "reflect-metadata"
import { DataSource } from "typeorm"
import { Capacitable } from "./entity/Capacitable"
import { Community } from "./entity/Community"
import { Capabilitie } from "./entity/Capabilitie"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "mydb.db",
    synchronize: true,
    logging: false,
    entities: [Capacitable, Community, Capabilitie],
    migrations: [],
    subscribers: [],
})
