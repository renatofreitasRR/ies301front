import { AiOutlineSearch } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { FaCouch } from "react-icons/fa";
import { MdFilterVintage } from "react-icons/md";
import { BiCloset } from "react-icons/bi";
import { HiDesktopComputer } from "react-icons/hi";
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

export function MainHeader() {
    return (
        <Header>
            <TopBar>
                <IconBar>
                    <MdFilterVintage size={50} />
                    <h1>Promo Ofertas</h1>
                </IconBar>
                <SearchBar>
                    <Input title='Pesquisar' hasLabel={false} Icon={AiOutlineSearch} placeholder='Pesquisar' />
                </SearchBar>
                <UserBar>
                    <div>
                        <FiUser size={30} />
                    </div>
                </UserBar>
            </TopBar>
            <NavBar>
                <Filters>
                    <NavItem title='Eletrônicos' to='ofertas' Icon={HiDesktopComputer} />
                    <NavItem title='Vestuário' to='produtos' Icon={BiCloset} />
                    <NavItem title='Casa e Cozinha' to='produtos' Icon={FaCouch} />
                </Filters>
                <Pages>
                    <HeaderButton title='Minhas Ofertas' to='ofertas' Icon={MdFilterVintage} />
                    <HeaderButton title='Meus Produtos' to='produtos' Icon={MdFilterVintage} />
                </Pages>
            </NavBar>
        </Header>
    );
}