
import User from "../models/user.models.js";
import bcrypt from "bcryptjs";

const createAdminUser = async () => {
  try {
    // Verifica si ya existen usuarios en la base de datos
    const usersCount = await User.countDocuments();
    if (usersCount === 0) {
      // Crear un usuario administrador predeterminado
      const adminUser = new User({
        name: "Admin",
        lastname: "User",
        email: "admin@admin.com",
        password: await bcrypt.hash("AdminPassword123!", 10), // Asegúrate de cambiar la contraseña en producción
        role: "admin",
      });

      await adminUser.save();
      console.log("Usuario administrador creado con éxito");
    } else {
      console.log("Usuarios ya existen en la base de datos");
    }
  } catch (error) {
    console.error("Error al crear el usuario administrador:", error);
  }
};

export default createAdminUser;