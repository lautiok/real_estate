import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { HeaderDash } from "../HeaderDash/HeaderDash";
import "./user.css";

export const User = () => {
  const { getUsers, users, deleteUser} = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    toast.loading('Procesando...', { id: 'processing' });
    try {
      await deleteUser(id);
      toast.success('Usuario eliminado', { id: 'processing' });
    } catch (error) {
      toast.error('Error al eliminar el usuario');
    }
  };


  return (
    <>
      <HeaderDash isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <section className="users">
        <div className="container-btn">
          <Link className="btn" to="/admin/users/new">Nuevo Usuario</Link>
        </div>
        <table className="user-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Apellido</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!users ? (
              <tr><td>Loading...</td></tr>
            ) : (
              Array.isArray(users) && users.length > 0 ? (
                users.map(user => (
                  <tr key={user._id}>
                    <td>{user.email}</td>
                    <td>{user.lastname}</td>
                    <td>{user.name}</td>
                    <td>{user.role.join(", ")}</td>
                    <td className="actions">
                      <button className="btn">
                        <Link to={`/admin/users/${user._id}`}>Edit</Link>
                      </button>
                      <button className="btn" onClick={() => handleDeleteUser(user._id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td>No users found</td></tr>
              )
            )}
          </tbody>
        </table>
        <Toaster position="bottom-right" reverseOrder={false} />
      </section>
    </>
  );
};
