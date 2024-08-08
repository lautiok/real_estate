import {useContext} from 'react'
import { OwnerContext } from '../context/OwerContext';


export const useOwner = () => {
    const owner = useContext(OwnerContext);
    if (!owner) {
        throw new Error("useOwner must be used within a OwnerProvider");
    }
    return owner
}