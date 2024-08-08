import React, { useEffect, useState} from "react";
import { HeaderDash } from "../HeaderDash/HeaderDash";
import { useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Select from "react-select";
import { useForm } from "react-hook-form";
import { useOwner } from "../../../../hooks/useOwner";

export const NewOwner = () => {
  const { register, handleSubmit, setValue} = useForm();
  const {createOwner , getOwner, updateOwner} = useOwner();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const [identificacion, setIdentificacion] = useState([]);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    const dataUpdate = async () => {
      if (params.id) {
        const user = await getOwner(params.id);
        setValue("name", user.name);
        setValue("lastname", user.lastname);
        setValue("phone", user.phone);
        
      }
    };
    dataUpdate();
  }, [ params.id, getOwner, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    setIsloading(true);
    const toastId = toast.loading("Procesando...");
    try {
      const user = {
        ...data,
        identification: identificacion.value,
      };
      console.log(user);
      if (params.id) {
        await updateOwner(params.id, user);
        toast.success("Propietario actualizado exitosamente", { id: toastId });
      } else {
        await createOwner(user);
        toast.success("Propietario registrado exitosamente", { id: toastId });
      }
      navigate("/admin/owners");
    } catch (err) {
      toast.error(err.response?.data.message || "Error al procesar", { id: toastId });
      
    }
  });



  return (
    <section>
      <HeaderDash isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="new-user-container">
        <h2>{params.id ? "Editar propietario" : "Nuevo propietario"}</h2>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            {...register("name")}
            required
          />
          <input
            type="text"
            placeholder="Apellido"
            {...register("lastname")}
            required
          />
          { !params.id && (
            <input type="text" placeholder="Email" {...register("email")} required />
          )}
          {  !params.id && (
            <div className="select-container">
              <Select
                name="identification"
                options={[
                  { value: "DNI", label: "DNI" },
                  { value: "Pasaporte", label: "Pasaporte" },
                ]}
                className="select"
                classNamePrefix="select"
                placeholder="Identificacion"
                value={identificacion}
                isClearable
                onChange={setIdentificacion}
              />
            </div>
              )}
          { !params.id && (
            <input type="number" placeholder="Numero de identificacion" {...register("numberidentification")} required  />
          )}
          <input type="number" placeholder="telefono" {...register("phone")} required  />
          <button type="submit">{params.id ? "Actualizar" : "Registrar"}</button>
          {params.id && <p>Para poder editar el emai y la identificacion es necesario eliminar el usuario</p>}
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
