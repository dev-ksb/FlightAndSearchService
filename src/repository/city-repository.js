const { Op } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
    async createCity({ name }) {
        try {
            return await  City.create({ name });
        } catch (error) {
            console.log("Something went wrong with repository layer.");
            throw{error}
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong with repository layer.");
            throw{error}
        }
    }

    async updateCity(cityId, data) {
        try {
            return await City.update(data, {
                where: {
                    id: cityId
                },
            })
        } catch (error) {
            console.log("Something went wrong with repository layer.");
            throw{error}
        }
    }

    async getCity(cityId) {
        try {
            return await City.findByPk(cityId)
        } catch (error) {
            console.log("Something went wrong with repository layer.");
            throw{error}
        }
    }

    async getAllCities(filter) {
        try {
            if (filter.name) {
                return await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
            }
            return await City.findAll();
        } catch (error) {
            console.log("Something went wrong with repository layer.");
            throw{error}
        }
    }
}

module.exports = CityRepository;
