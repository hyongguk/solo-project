import { createConnection, ConnectionOptions, Connection, Repository, getRepository } from "typeorm";
import express from "express";
import Sazaesan from "./entities/Sazaesan";




createConnection().then(connect => {
    const app = express();
    
    const repository = connect.getRepository(Sazaesan);
    console.log(repository);

    app.get("/isonoke", async (req, res) => {
        const findAll = await repository.find();
        console.log(findAll)
        console.log("konnidfaf")
        res.send(findAll);
    })
    app.post("/isonoke/:id/:firstname/:lastname", async (req, res) => {
        const id = req.params.id;
        const firstname = req.params.firstname;
        const lastname = req.params.lastname;
        const newMember =  await new Sazaesan();
        newMember.firstname = firstname;
        newMember.lastname = lastname;
        newMember.id = id;
        await repository.save(newMember)
        const allFamily = await repository.find()
        res.send(allFamily)

    })

    app.listen(3000, () => {console.log("Listenning")});
});
