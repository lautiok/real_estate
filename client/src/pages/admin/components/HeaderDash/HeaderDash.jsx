import React from 'react';
import { useAuth } from '../../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import './HeaderDash.css';

export const HeaderDash = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const { logout, user } = useAuth();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // Alternar la visibilidad del sidebar
    };

    return (
        <>
            {/* Botón para abrir el menú si está cerrado */}
            {!isSidebarOpen && (
                <button className="sidebar-open-btn" onClick={toggleSidebar}>
                    ❯
                </button>
            )}

            <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-header">
                    <h1><Link to='/dashboard'>RentSale</Link></h1>
                    <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                        {isSidebarOpen ? '❮' : '❯'}
                    </button>
                </div>
                {isSidebarOpen && (
                    <div className="sidebar-content">
                        <ul>
                            {user.user.role.includes('admin') && <li><Link to='/admin/users'>Usuarios</Link></li>}
                            <li><Link to='/admin/properties'>Propiedades</Link></li>
                            <li><Link to='/clients'>Clientes</Link></li>
                            <li><Link to='/admin/owners'>Propietarios</Link></li>
                        </ul>
                        <div className='btns'>
                            <button className='btn'> <a href="/" target="_blank">Ir a la web</a> </button>
                            <button className='btn'> <Link to='/perfile'>Mi Perfil</Link> </button>
                            <button className='btn' onClick={logout}>Cerrar Sesión</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
