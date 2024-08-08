import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderDash } from "../HeaderDash/HeaderDash";
import { useOwner } from "../../../../hooks/useOwner";
import toast, { Toaster } from 'react-hot-toast';

export const Owner = () => {
  const { getOwners, owners, isLoading, deleteOwner } = useOwner();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    getOwners();
  }, []);

  return (
    <>
      <HeaderDash isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <section className="users">
        <div className="container-btn">
          <Link className="btn" to="/admin/users/owner/new">
            Nuevo Propietario
          </Link>
        </div>
        <table className="user-table">
          <thead>
            <tr>
              <th>Identificación</th>
              <th>Email</th>
              <th>Apellido</th>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Propiedades</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="7">Loading...</td>
              </tr>
            ) : (
              owners.map((owner) => (
                <tr key={owner._id}>
                  <td>{owner.numberidentification}</td>
                  <td>{owner.email}</td>
                  <td>{owner.lastname}</td>
                  <td>{owner.name}</td>
                  <td>{owner.phone}</td>
                  <td>
                    <Link className="btn-link" to={`/admin/properties/owner/${owner._id}`}>
                      Propiedades
                    </Link>
                  </td>
                  <td className="actions">
                    <button className="btn">
                      <Link to={`/admin/users/owner/${owner._id}`}>Edit</Link>
                    </button>
                    <button
                      className="btn"
                      onClick={() => {
                        deleteOwner(owner._id);
                        toast.success("Owner deleted successfully");
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
          }}
        />
      </section>
    </>
  );
};
