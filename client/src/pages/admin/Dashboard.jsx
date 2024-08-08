import React, { useEffect, useState } from 'react'
import { HeaderDash } from './components/HeaderDash/HeaderDash'
import { useAuth } from '../../hooks/useAuth'
import { Helmet } from 'react-helmet-async';

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 



  return (
    <>
    <Helmet title=" Dashboard | RentSale Inmobiliaria" />
    <HeaderDash isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    <div className='dashboard'>
      <h1>RentSale</h1>
      <p>dashboard</p>
    </div>
    </>
    
  )
}
