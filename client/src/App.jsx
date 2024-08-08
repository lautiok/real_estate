import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SaleProvider } from "./context/SaleContext";
import { RentProvider } from "./context/RentContext";
import { Rent } from "./pages/Rent";
import { Sale } from "./pages/Sale";
import { FilterProvider } from "./context/FilterContext";
import { Filter } from "./pages/Filter";
import { Loginp } from "./components/Login/Loginp";
import { AuthProvider } from "./context/AuthContext";
import { Protected } from "./utils/Protected";
import { Dashboard } from "./pages/admin/Dashboard";
import { MainLayout } from "./layouts/MainLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import { User } from "./pages/admin/components/User/User";
import { NewUser } from "./pages/admin/components/NewUser/NewUser";
import { OwnerProvider } from "./context/OwerContext";
import { Owner } from "./pages/admin/components/Owner/Owner";
import { OwnerProperties } from "./pages/admin/components/OwnerProperties/OwnerProperties";
import { NewOwner } from "./pages/admin/components/NewOwner/NewOwner";
import { ItemRent } from "./pages/ItemRent/ItemRent";
import { ItemSale } from "./pages/ItemSale/ItemSale";
import { PropertiesProvider } from "./context/PropertiesContext";
import { PropertiesAdmin } from "./pages/admin/components/PropertiesAdmin/PropertiesAdmin";
import { AddProperties } from "./pages/admin/components/AddProperties/AddProperties";

function App() {
  return (
    <>
      <BrowserRouter>
        <PropertiesProvider>
          <SaleProvider>
            <RentProvider>
              <FilterProvider>
                <AuthProvider>
                  <OwnerProvider>
                    <Routes>
                      <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/rent" element={<Rent />} />
                        <Route path="/buys" element={<Sale />} />
                        <Route path="/filter" element={<Filter />} />
                        <Route path="/item/rent/:id" element={<ItemRent />} />
                        <Route path="/item/sale/:id" element={<ItemSale />} />
                      </Route>
                      <Route element={<AuthLayout />}>
                      <Route path="/login" element={<Loginp />} />

                        <Route element={<Protected />}>
                          <Route path="/dashboard" element={<Dashboard />} />
                          <Route path="/admin/users" element={<User />} />
                          <Route
                            path="/admin/users/new"
                            element={<NewUser />}
                          />
                          <Route
                            path="/admin/users/:id"
                            element={<NewUser />}
                          />
                          <Route
                            path="/admin/properties"
                            element={<PropertiesAdmin />}
                          />
                          <Route path="/admin/owners" element={<Owner />} />
                          <Route
                            path="/admin/properties/owner/:id"
                            element={<OwnerProperties />}
                          />
                          <Route
                            path="/admin/users/owner/new"
                            element={<NewOwner />}
                          />
                          <Route
                            path="/admin/users/owner/:id"
                            element={<NewOwner />}
                          />
                          <Route
                            path="/admin/properties/new"
                            element={<AddProperties />}
                          />
                        </Route>
                      </Route>
                    </Routes>
                  </OwnerProvider>
                </AuthProvider>
              </FilterProvider>
            </RentProvider>
          </SaleProvider>
        </PropertiesProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
