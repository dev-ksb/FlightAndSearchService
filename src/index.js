const express = require("express");
const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository")

const setupAndStartSearch = async () => {

    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }))
    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        const city = new CityRepository()
        await city.createCity({name: "New Delhi"});
    })
}

setupAndStartSearch();