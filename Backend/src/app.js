import express from "express";
import config from "./config/config.js";
import cors from "cors";
import connectDB from "./config/database.js";
import ownerRoutes from "./router/owner.routes.js";
import propertiesRentRoutes from "./router/propertyRent.routes.js";
import propertiesSaleRoutes from "./router/propertySale.routes.js";
import tenantsRoutes from "./router/tenants.routes.js";
import propertiesRoutes from "./router/property.routes.js";
import filterRoutes from "./router/filter.routes.js";
import authRoutes from "./router/auth.routes.js";
import fileupload from "express-fileupload";
import cookieParser from "cookie-parser";
import authUserRoutes from "./router/users.routes.js";
import ownerNewRoutes from "./router/newOwner.routes.js";

const app = express();
const PORT = config.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: "./upload"
}));
app.use(cookieParser());


app.use("/api/user/owners", ownerRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/user/newOwner', ownerNewRoutes);
app.use("/api/auth/users", authUserRoutes);
app.use("/api/user/tenants", tenantsRoutes);
app.use("/api/properties/all", propertiesRoutes);
app.use("/api/properties/rent", propertiesRentRoutes);
app.use("/api/properties/sale", propertiesSaleRoutes);
app.use("/api/filter", filterRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

connectDB();

export default app