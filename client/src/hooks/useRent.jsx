import { useContext } from "react";
import { RentContext } from "../context/RentContext";

export const useRent = () => {
    const rent = useContext(RentContext);
    if (!rent) {
        throw new Error("useRent must be used within a RentProvider");
    }
    return rent
}