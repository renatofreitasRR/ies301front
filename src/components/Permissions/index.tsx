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

    console.log('Roles Can', rolesCan);
    console.log('TRUE OR FALSE', userCanSeeComponent);

    if (!userCanSeeComponent) {
        return null;
    }

    return (
        <>
            {children}
        </>
    );
}