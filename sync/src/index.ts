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


    const capacitableInfo = await AppDataSource.getRepository(Capacitable).findOne({
        where: {
            id: 1,
        },
        relations: {
            capabilities: true,
            community: true
        },
    })

    const communityInfo = await AppDataSource.getRepository(Community).findOne({
        where: {
            id: 1,
        },
        relations: {
            capacitables: {
                capabilities: true
            }
        },
    })

    console.log('Capacitable Info: ', capacitableInfo)

    console.log('Community Info', communityInfo)
}).catch(error => console.log(error))
