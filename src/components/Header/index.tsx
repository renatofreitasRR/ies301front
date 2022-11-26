import { AiFillFilePdf, AiOutlineArrowDown, AiOutlineSearch } from "react-icons/ai";
import { FiUser, FiUsers } from "react-icons/fi";
import { FaCouch } from "react-icons/fa";
import { MdFilterVintage, MdKeyboardArrowDown, MdLogout } from "react-icons/md";
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
import { useNavigate, useParams } from "react-router-dom";
import { Can } from "../Permissions";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = Yup.object().shape({
    search: Yup
        .string()
        .required('O campo Nome é obrigatório')
        .min(3, 'Por favor insira no mínimo 3 caracteres'),
});

export interface SearchProps {
    search: string
}


export function MainHeader() {
    const { signOut, user } = useContext(AuthContext);
    const { handleSubmit, register, formState: { errors }, setValue, getValues } = useForm<SearchProps>({ resolver: yupResolver(schema) });
    const navigate = useNavigate();
    let { type, search } = useParams();

    function handleLogOut() {
        signOut();
        navigate('/');
    }

    function handleDownloadFile() {
        const anchor = document.createElement("a");
        anchor.href = 'https://drive.google.com/file/d/1v-5Dcaaays_y1SFWCNak1yoO2UizI3DR/view?usp=sharing';
        // anchor.download = 'MANUAL.pdf';
        anchor.target = '_blank';
        
        document.body.appendChild(anchor);
        anchor.click();
    }



    return (
        <Header>
            <TopBar>
                <IconBar>
                    <MdFilterVintage size={50} />
                    <h1>Promo Ofertas</h1>
                </IconBar>
                <SearchBar >
                    {/* <Input register={register} inputName={'search'} name='search' title='Pesquisar' hasLabel={false} Icon={AiOutlineSearch} placeholder='Pesquisar' /> */}
                </SearchBar>
                <UserBar title='Manual do Sistema' onClick={handleDownloadFile}>
                    <div>
                        <AiFillFilePdf size={30} />
                    </div>
                </UserBar>
                <Can rolesCan={[1]}>
                    <UserBar title='Todos os usuários'>
                        <div onClick={() => navigate('/users')}>
                            <FiUsers size={30} />
                        </div>
                    </UserBar>
                </Can>
                <UserBar title='Meu usuário'>
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
                    <HeaderButton title={user?.idTipoUsuario == 1 ? 'Ofertas' : 'Minhas Ofertas'} to='offers' Icon={MdFilterVintage} />
                    <Can rolesCan={[2]}>
                        <HeaderButton title={user?.idTipoUsuario == 1 ? 'Produtos' : 'Meus Produtos'} to='products' Icon={MdFilterVintage} />
                    </Can>
                </Pages>
            </NavBar>
        </Header>
    );
}