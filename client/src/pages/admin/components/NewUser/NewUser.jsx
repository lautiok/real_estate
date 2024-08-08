import React, { useEffect, useState } from "react";
import { HeaderDash } from "../HeaderDash/HeaderDash";
import { useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Select from "react-select";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../../hooks/useAuth";
import "./newuser.css";

export const NewUser = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [role, setRole] = useState([]);
  const { singup, getUser, updateUser } = useAuth();
  const [isloading, setIsloading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const dataUpdate = async () => {
      if (params.id) {
        const user = await getUser(params.id);
        setValue("name", user.name);
        setValue("lastname", user.lastname);
        setValue("email", user.email);
        setRole(user.role.map((r) => ({ value: r, label: r })));
      }
    };
    dataUpdate();
  }, [params.id, getUser, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    setIsloading(true);
    const toastId = toast.loading("Procesando...");
    try {
      const user = {
        ...data,
        role: role.map((r) => r.value),
      };
      if (params.id) {
        await updateUser(params.id, user);
        toast.success("Usuario actualizado exitosamente", { id: toastId });
      } else {
        await singup(user);
        toast.success("Usuario registrado exitosamente", { id: toastId });
      }
      navigate("/admin/users");
    } catch (err) {
      toast.error(err.response?.data.message || "Error al procesar", { id: toastId });
    } finally {
      setIsloading(false);
    }
  });

  return (
    <section>
      <HeaderDash isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="new-user-container">
        <h2>{params.id ? "Editar Usuario" : "Nuevo Usuario"}</h2>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            {...register("name")}
            required
            disabled={isloading}
          />
          <input
            type="text"
            placeholder="Apellido"
            {...register("lastname")}
            required
            disabled={isloading}
          />
          <input
            type="text"
            placeholder="Email"
            {...register("email")}
            required
            disabled={isloading}
          />
          {!params.id && (
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              required
              disabled={isloading}
            />
          )}
          <div className="select-container">
            <Select
              isMulti
              name="role"
              options={[
                { value: "admin", label: "Admin" },
                { value: "seller", label: "Vendedor" },
              ]}
              className="select"
              classNamePrefix="select"
              placeholder="Rol"
              value={role}
              isClearable
              onChange={setRole}
              isDisabled={isloading}
            />
          </div>
          <button type="submit" disabled={isloading}>
            {params.id ? "Actualizar" : "Registrar"}
          </button>
        </form>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
        }}
      />
    </section>
  );
};
