import { useContext } from "react";
import { SaleContext } from "../context/SaleContext";

export const useSale = () => {
    const sale = useContext(SaleContext);
    if (!sale) {
        throw new Error("useSale must be used within a SaleProvider");
    }
    return sale
}  