import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

interface UseCanParams {
    rolesCan?: number[];
}

export function useCan({ rolesCan = [] }: UseCanParams) {
    const { user, isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return false;
    }

    if (user?.idTipoUsuario == 1)
        return true

    if (rolesCan?.length > 0) {
        const hassAllRoles = rolesCan.some(role => {
            return role == user?.idTipoUsuario;
        });

        if (!hassAllRoles)
            return false;
    }

    return true;
}