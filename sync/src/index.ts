import { MoreThan } from "typeorm"
import { AppDataSource } from "./data-source"
import { Capabilitie } from "./entity/Capabilitie"
import { Capacitable } from "./entity/Capacitable"
import { Community } from "./entity/Community"

AppDataSource.initialize().then(async () => {
    //capabilities
    const capabilitie1 = new Capabilitie()
    capabilitie1.name = "Manutenção purificador"
    await AppDataSource.manager.save(capabilitie1)

    const capabilitie2 = new Capabilitie()
    capabilitie2.name = "Primeiros Socorros"
    await AppDataSource.manager.save(capabilitie2)

    //communities
    const community = new Community()
    community.name = "Comunidade Multirao"
    await AppDataSource.manager.save(community)

    //capacitable
    const capacitable = new Capacitable()
    capacitable.name = "Thiago"
    capacitable.capabilities = [capabilitie1, capabilitie2]
    capacitable.community = community
    await AppDataSource.manager.save(capacitable)

    const capacitable2 = new Capacitable()
    capacitable2.name = "Matheus"
    capacitable2.capabilities = [capabilitie1, capabilitie2]
    capacitable2.community = community
    await AppDataSource.manager.save(capacitable2)

}).catch(error => console.log(error))