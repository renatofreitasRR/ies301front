import { ReactNode } from "react";
import { useCan } from "../../hooks/useCan";

interface CanProps {
    children: ReactNode;
    rolesCan?: number[];
}

export function Can({ children, rolesCan = [] }: CanProps) {
    const userCanSeeComponent = useCan({
        rolesCan,
    });


    if (!userCanSeeComponent) {
        return null;
    }

    return (
        <>
            {children}
        </>
    );
}