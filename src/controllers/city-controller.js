const { CityService } = require("../services/index");

const cityService = new CityService();

/**
 * @method POST
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            error: {}
        })
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            error
        })
    }
}

/**
 * @method DELETE
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id)
        res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted',
            error: {}
        })
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the city',
            error
        })
    }
}

/**
 * @method POST
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body)
        res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated the city',
            error: {}
        })
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            error
        })
    }
}

/**
 * @method GET
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id)
        res.status(200).json({
            data: city,
            success: true,
            message: 'Successfully fetched a city',
            error: {}
        })
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the city',
            error
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    get
}