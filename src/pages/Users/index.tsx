import { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlinePlus } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard';
import { Loader } from '../../components/shared/Loader';
import { UserCard } from '../../components/UserCard';
import { ProductProps } from '../../models/productProps';
import { UserProps } from '../../models/userProps';
import { api } from '../../services/api';
import {
    Container,
    ProductList,
    ListTitle,
    BackHome,
    RegisterProductsButton
} from './styles';

export function Users() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<UserProps[]>([])

    const navigate = useNavigate();

    useEffect(() => {
        async function getUsers() {
            setLoading(true);
            try {
                const response = await api.get(`/usuario`);
                const data = await response.data;

                console.log('Data', data);
        
                if (response.status === 200) {
                    setUsers(response.data);
                }
            }
            catch (err: any) {

            }
            finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000)
            }

        }

        getUsers();
    }, [])

    return (
        <>
            {loading && <Loader />}
            <Container>
                <ListTitle>Lista de Usuários</ListTitle>
                <ProductList>
                    {users.length > 0 ? users.map((user) => (
                        <UserCard
                            key={user.idUsuario}
                            email={user.email}
                            idTipoUsuario={user.idTipoUsuario}
                            idUsuario={user.idUsuario}
                            nomeUsuario={user.nomeUsuario}
                            senha={user.senha}
                        />
                    )) : (
                        <span>Não há usuários cadastrados</span>
                    )}
                </ProductList>
            </Container>
        </>

    );
}