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
        }
    }
    async deleteCity(cityId) {
        try {
            return await this.cityRepository.deleteCity(cityId)
        } catch (error) {
            console.log('Something went wrong at service layer')
        }
    }
    async updateCity(cityId, data) {
        try {
            return await this.cityRepository.updateCity(cityId, data)
        } catch (error) {
            console.log('Something went wrong at service layer')
        }
    }
    async getCity(cityId) {
        try {
            return await this.cityRepository.getCity(cityId)
        } catch (error) {
            console.log('Something went wrong at service layer')
        }
    }
}

module.exports = CityService;