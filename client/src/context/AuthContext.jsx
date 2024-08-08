import { createContext, useState, useEffect } from "react";
import { delateUser, getUserRes, loginRequest, obtenerUsers, register, updateUserRes, verifyToken, } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [use, setUse] = useState([]);
  const [users, setUsers] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const res = await obtenerUsers();
      setUsers(Array.isArray(res.data) ? res.data : []);
      setLoading(false);
    } catch (error) {
      console.error(error); 
      throw error;
    }
  };

  const getUser = async (id) => {
    try {
      const res = await getUserRes(id);
      setUse(res.data);
      return res.data;
    } catch (error) {
      console.error(error); 
      throw error;
    }
  };

  const singup = async (user) => {
    try {
      const { name, lastname, email, password, role } = user;
      await register({ name, lastname, email, password, role });
      return user;
    } catch (error) {
      console.error(error.response?.data || 'Error during signup');
      throw error;
    }
  };
  

  const singin = async (data) => {
    try {
      const res = await loginRequest(data);
      setIsAuth(true);
      setUser(res.data);
    } catch (error) {
      console.error(error); 
      throw error;
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setIsAuth(false);
    setUser(null);
  };

  const updateUser = async (id, data) => {
    try {
      await updateUserRes(id, data);
      return data;
  } catch (error) {
      console.error(error); 
      throw error;
    }
  };
  

  const deleteUser = async (id) => {
    try {
      const res = await delateUser(id);
      getUsers();
      return res.data;
    } catch (error) {
      console.error(error.response?.data || 'Error during signup');
      throw error;
    }
  };
  useEffect(() => {
    const checkLogin = async () => {
      const token = Cookies.get('token');
      if (!token) {
        setIsAuth(false);
        setLoading(false);
        return;
      }

      try {
        const res = await verifyToken(token);
        if (res.data) {
          setIsAuth(true);
          setUser(res.data);
        } else {
          setIsAuth(false);
        }
        setLoading(false);
      } catch (error) {
        setIsAuth(false);
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider value={{
      singin,
      user,
      isAuth,
      logout,
      loading,
      getUsers,
      users,
      deleteUser,
      singup,
      getUser,
      use,
      updateUser,

    }}>
      {children}
    </AuthContext.Provider>
  );
};
