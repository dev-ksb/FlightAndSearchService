const { CityRepository } = require("../repository/index");

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            return await this.cityRepository.createCity(data);
        } catch (error) {
            console.log('Something went wrong at service layer')
            throw {error}
        }
    }
    async deleteCity(cityId) {
        try {
            return await this.cityRepository.deleteCity(cityId)
        } catch (error) {
            console.log('Something went wrong at service layer')
            throw {error}
        }
    }
    async updateCity(cityId, data) {
        try {
            return await this.cityRepository.updateCity(cityId, data)
        } catch (error) {
            console.log('Something went wrong at service layer')
            throw {error}
        }
    }
    async getCity(cityId) {
        try {
            return await this.cityRepository.getCity(cityId)
        } catch (error) {
            console.log('Something went wrong at service layer')
            throw {error}
        }
    }

    async getAllCities(filter) {
        try {
            return await this.cityRepository.getAllCities({ name: filter.name});
        } catch (error) {
            console.log('Something went wrong at service layer')
            throw {error}
        }
    }
}

module.exports = CityService;