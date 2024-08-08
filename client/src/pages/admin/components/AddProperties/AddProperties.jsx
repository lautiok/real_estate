import React, { useEffect, useState } from "react";
import { HeaderDash } from "../HeaderDash/HeaderDash";
import { useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { locationOptions, propertyTypeOptions } from "../../../../utils/OptionSelect";
import { useOwner } from "../../../../hooks/useOwner";
import { useRent } from "../../../../hooks/useRent";
import { useSale } from "../../../../hooks/useSale";


export const AddProperties = () => {
  const { register, handleSubmit } = useForm();
  const [provincia, setProvincia] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [propietario, setPropietario] = useState([]);
  const [propertyType, setPropertyType] = useState([]);
  const [files, setFiles] = useState([]);
  const [type, setType] = useState([]);
  const {getOwners, owners} = useOwner();
  const {addPropertyRent} = useRent();
  const {addPropertySale} = useSale();
  const params = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    getOwners();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    setIsloading(true);
    const toastId = toast.loading("Procesando...");
    try {
      const user = {
        ...data,
        propertyType: propertyType.value,
        owner: propietario.value,
        provincia: provincia.value,
        images : files
      };
      if (type.value === 'rent') {
        await addPropertyRent(user);
        toast.success("Propiedad registrada exitosamente", { id: toastId });
      } else {
        await addPropertySale(user);
        toast.success("Propiedad registrada exitosamente", { id: toastId });
      }
      navigate("/admin/properties");
    } catch (err) {
      toast.error(err.response?.data.message || "Error al procesar", {
        id: toastId,
      });
    } finally {
      setIsloading(false);
    }
  });

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
};

  return (
    <section>
      <HeaderDash isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="new-user-container">
        <h2>{params.id ? "Editar propiedad" : "Nueva propiedad"}</h2>

        <form onSubmit={onSubmit}>
          <div className="select-container">
            <Select
              name="type"
              options = {[
                { value: 'rent', label: 'Alquiler' },
                { value: 'sale', label: 'Venta' }
              ]}
              className="select"
              classNamePrefix="select"
              placeholder="Tipo de gestion"
              value={type}
              isClearable
              onChange={setType}
              isDisabled={isloading}
            />
          </div>
          <input
            type="text"
            placeholder="direccion"
            {...register("direccion")}
            required
            disabled={isloading}
          />
          <input
            type="text"
            placeholder="localidad"
            {...register("localidad")}
            required
            disabled={isloading}
          />
          <input
            type="text"
            placeholder="metros cuadrados"
            name="mcuadrados"
            {...register("mcuadrados")}
            disabled={isloading}
          />
          <input
            type="text"
            placeholder="ambientes"
            name="ambientes"
            {...register("ambientes")}
            disabled={isloading}
          />

          <input
            type="text"
            placeholder="dormitorios"
            name="dormitorios"
            {...register("dormitorios")}
            disabled={isloading}
          />
          <input
            type="text"
            placeholder="baños"
            name="banos"
            {...register("banos")}
            disabled={isloading}
          />
          <input
            type="text"
            placeholder="contacto"
            name="contacto"
            {...register("contacto")}
            disabled={isloading}
          />
          <input
            type="number"
            placeholder="price"
            name="price"
            {...register("price")}
            disabled={isloading}
          />
          <textarea
            name="descripcion"
            placeholder="descripcion"
            required
            disabled={isloading}
            {...register("descripcion")}
          ></textarea>
          <div className="select-container">
            <Select
              name="propertyType"
              options={propertyTypeOptions}
              className="select"
              classNamePrefix="select"
              placeholder="tipo de Propiedad"
              value={propertyType}
              isClearable
              onChange={setPropertyType}
              isDisabled={isloading}
            />
          </div>
          <div className="select-container">
            <Select
              name="owner"
              options={owners.map((owner) => ({ value: owner._id, label: `${owner.name} ${owner.lastname} - ${owner.numberidentification}` }))}
              className="select"
              classNamePrefix="select"
              placeholder="propietario"
              value={propietario}
              isClearable
              onChange={setPropietario}
              isDisabled={isloading}
            />
          </div>
          <div className="select-container">
            <Select
              name="provincia"
              options={locationOptions}
              className="select"
              classNamePrefix="select"
              placeholder="provincia"
              value={provincia}
              isClearable
              onChange={setProvincia}
              isDisabled={isloading}
            />
          </div>
        <input type="file" name="images" className="inputfile" multiple onChange={handleChange} disabled={isloading} />
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
