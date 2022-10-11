import { Outlet } from "react-router-dom";
import { MainHeader } from "../components/Header";
import {
    Container,
}
    from "./styles";

export function AuthenticatedRoute() {
    return (
        <>
            <MainHeader />
            <Container>
                <Outlet />
            </Container>
        </>
    );
}