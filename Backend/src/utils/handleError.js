export const handleHttpError = (res, message = 'algo a sucedido', code = 403) => {
    res.status(code)
    res.send({error: message})
}