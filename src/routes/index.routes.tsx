import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthenticatedRoute } from "../Layouts/AuthenticatedRoute";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Offers } from "../pages/Offers";
import { Products } from "../pages/Products";
import { Register } from "../pages/Register";


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<AuthenticatedRoute />}>
                    <Route path='/home/:type' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/offers' element={<Offers />} />
                    <Route path='/products' element={<Products />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}