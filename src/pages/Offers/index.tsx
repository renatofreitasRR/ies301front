import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ProductCard } from '../../components/ProductCard';
import { OfferProps } from '../../models/offerProps';
import { ProductProps } from '../../models/productProps';
import { api } from '../../services/api';
import {
    Container,
    ProductList,
    ListTitle,
    BackHome
} from './styles';

interface OfferProductProps extends OfferProps{
    idProdutoNavigation: ProductProps;
}

export function Offers() {
    const [products, setProducts] = useState<OfferProductProps[]>([])

    useEffect(() => {
        async function getProducts() {
            const response = await api.get(`reserva/minhasreservas`);
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
                    <ProductCard
                        key={product.idProdutoNavigation.idProduto}
                        date=''
                        imgSrc={product.idProdutoNavigation.imagemProduto}
                        link={product.idProdutoNavigation.linkProduto}
                        price={product.idProdutoNavigation.preco.toString()}
                        title={product.idProdutoNavigation.nomeProduto}
                    />
                )) : (
                    <span>Não há produtos cadastrados</span>
                )}
            </ProductList>
        </Container>
    );
}