import { handleHttpError } from "../utils/handleError.js"

export const checkRole = (roles) => (req, res, next) => {
    try {
        const { user } = req
        console.log({user})
        const rolesByUser = user.role
        const checkArrayRol = roles.some((rol) => rolesByUser.includes(rol))

        if (!checkArrayRol) {
            return handleHttpError(res, 'ACCESO DENEGADO', 403)
        }
        next()
    } catch (error) {
        handleHttpError(res, 'ERROR DE AUTENTICACIÓN', 403);
    }
}

