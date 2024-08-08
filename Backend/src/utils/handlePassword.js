import bcrypt from "bcryptjs";


export const encryptPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    return hash
}

export const comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}