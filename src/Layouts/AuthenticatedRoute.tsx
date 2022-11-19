import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
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
            <Footer />
        </>
    );
}