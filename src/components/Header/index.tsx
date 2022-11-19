import { AiOutlineSearch } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { FaCouch } from "react-icons/fa";
import { MdFilterVintage, MdLogout } from "react-icons/md";
import { BiCloset, BiCategoryAlt } from "react-icons/bi";
import { HiDesktopComputer } from "react-icons/hi";
import { GiMeal } from "react-icons/gi";

import { HeaderButton } from "../HeaderButton";
import { NavItem } from "../NavItem";
import { Input } from "../shared/Input";
import {
    Header,
    TopBar,
    IconBar,
    SearchBar,
    UserBar,
    NavBar,
    Pages,
    Filters
} from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function MainHeader() {
    const { signOut } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogOut() {
        signOut();
        navigate('/');
    }

    return (
        <Header>
            <TopBar>
                <IconBar>
                    <MdFilterVintage size={50} />
                    <h1>Promo Ofertas</h1>
                </IconBar>
                <SearchBar>
                    {/* <Input title='Pesquisar' hasLabel={false} Icon={AiOutlineSearch} placeholder='Pesquisar' /> */}
                </SearchBar>
                <UserBar>
                    <div onClick={() => navigate('/profile')}>
                        <FiUser size={30} />
                    </div>
                    <MdLogout size={30} title='Deslogar' onClick={handleLogOut} />
                </UserBar>
            </TopBar>
            <NavBar>
                <Filters>
                    <NavItem title='Todos' to='home' Icon={BiCategoryAlt} />
                    <NavItem title='Eletrônicos' to='home/1' Icon={HiDesktopComputer} />
                    <NavItem title='Alimentos' to='home/2' Icon={GiMeal} />
                    <NavItem title='Vestuário' to='home/3' Icon={BiCloset} />
                </Filters>
                <Pages>
                    <HeaderButton title='Minhas Ofertas' to='offers' Icon={MdFilterVintage} />
                    <HeaderButton title='Meus Produtos' to='products' Icon={MdFilterVintage} />
                </Pages>
            </NavBar>
        </Header>
    );
}