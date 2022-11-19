import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductDescription } from "../pages/ProductDescription";
import { AuthenticatedRoute } from "../Layouts/AuthenticatedRoute";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Offers } from "../pages/Offers";
import { Products } from "../pages/Products";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { RegisterProducts } from "../pages/RegisterProducts";
import { Users } from "../pages/Users";


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<AuthenticatedRoute />}>
                    <Route path='/users' element={<Users />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/home/:type' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/offers' element={<Offers />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/product/:id' element={<ProductDescription />} />
                    <Route path='/products/register' element={<RegisterProducts />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}