import {useContext} from 'react'
import { PropertiesContext } from '../context/PropertiesContext';


export const useProperties = () => {
    const properties = useContext(PropertiesContext);
    if (!properties) {
        throw new Error("useProperties must be used within a PropertiesProvider");
    }
    return properties
}