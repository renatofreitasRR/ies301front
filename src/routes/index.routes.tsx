import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthenticatedRoute } from "../Layouts/AuthenticatedRoute";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/home' element={<AuthenticatedRoute />}>
                    <Route path='/home' element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}