import React, { useEffect, useState } from 'react'
import { HeaderDash } from '../HeaderDash/HeaderDash'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { useProperties } from '../../../../hooks/useProperties'
import { useRent } from '../../../../hooks/useRent'
import { useSale } from '../../../../hooks/useSale'
import './PropertiesAdmin.css'

export const PropertiesAdmin = () => {
  
  const {propertiesAll, propertieAll} = useProperties();
  const {delateRent} = useRent();
  const {delateSale} = useSale();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    propertiesAll();
  }, []);

  const handleDeleteRent = async (id) => {
    toast.loading('Procesando...', { id: 'processing' });  
    try {
      await delateRent(id);
      toast.success('Propiedad eliminada', { id: 'processing' }); 
    } catch (error) {
      toast.error('Error al eliminar la propiedad'); 
    }
  };

  const handleDeleteSale = async (id) => {
    toast.loading('Procesando...', { id: 'processing' }); 
    try {
      await delateSale(id);
      toast.success('Propiedad eliminada', { id: 'processing' }); 
    } catch (error) {
      toast.error('Error al eliminar la propiedad');
    }
  };

  return (
    <>
    <HeaderDash isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    <section className='users'>
    <div className="container-btn">
          <Link className="btn" to="/admin/properties/new">Nueva Propiedad</Link>
        </div>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Direccion</th>
              <th>Precio</th>
              <th>estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!propertieAll ? (
              <tr><td>Loading...</td></tr>
            ) : propertieAll.map(property => (
                <tr key={property._id}>
                  <td>{property._id}</td>
                  <td>{property.direccion}</td>
                  <td>{property.price} USD</td>
                  <td>{property.type}</td>
                  <td className="actions">

                    {property.type === 'rent' ? ( 
                      <button className="btn" onClick={() => handleDeleteRent(property._id)}>Delete</button>
                    ) : (
                      <button className="btn" onClick={() => handleDeleteSale(property._id)}>Delete</button>
                    )}
                  </td>
                </tr>
            ))
            }
          </tbody>
        </table>
        <Toaster position="bottom-right" reverseOrder={false} />
    </section>
    </>
  )
}
