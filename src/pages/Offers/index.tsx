import { useContext, useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { OfferCard } from '../../components/OfferCard';
import { ProductCard } from '../../components/ProductCard';
import { AuthContext } from '../../contexts/AuthContext';
import { OfferProps } from '../../models/offerProps';
import { ProductProps } from '../../models/productProps';
import { api } from '../../services/api';
import {
    Container,
    ProductList,
    ListTitle,
    BackHome
} from './styles';

interface OfferProductProps extends OfferProps {
    idProdutoNavigation: ProductProps;
}

export function Offers() {
    const { user } = useContext(AuthContext);

    const [products, setProducts] = useState<OfferProductProps[]>([])

    useEffect(() => {
        async function getProducts() {
            let route = user?.idTipoUsuario == 1 ? `reserva` : `reserva/minhasreservas`

            const response = await api.get(route);
            const data = await response.data;

            console.log(data);

            if (response.status === 200) {
                setProducts(response.data);
            }
        }
        getProducts();
    }, [])

    return (
        <Container>
            <BackHome>
                <Link to='/home'>
                    <AiOutlineArrowLeft size={30} />
                    <span>Voltar</span>
                </Link>
            </BackHome>
            <ListTitle>Lista de Ofertas</ListTitle>
            <ProductList>
                {products.length > 0 ? products.map((product) => (
                    <OfferCard
                        products={products}
                        setProducts={setProducts}
                        idReserva={product.idReserva}
                        id={product.idProdutoNavigation.idProduto}
                        key={product.idProdutoNavigation.idProduto}
                        date=''
                        imgSrc={product.idProdutoNavigation.imagemProduto}
                        link={product.idProdutoNavigation.linkProduto}
                        price={product.idProdutoNavigation.preco.toString()}
                        title={product.idProdutoNavigation.nomeProduto}
                    />
                )) : (
                    <span>Não há ofertas cadastradas</span>
                )}
            </ProductList>
        </Container>
    );
}