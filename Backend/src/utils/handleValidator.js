import { validationResult } from "express-validator"

const validate = async (req, res, next) => {
    try {
        validationResult(req).throw()
        return next() 
    } catch (error) {
        res.status(403)
        res.send({ error: error.array() })
    }
}

export default validate