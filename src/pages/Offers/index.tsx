import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ProductCard } from '../../components/ProductCard';
import { ProductProps } from '../../models/productProps';
import { api } from '../../services/api';
import {
    Container,
    ProductList,
    ListTitle,
    BackHome
} from './styles';

export function Offers() {
    const [products, setProducts] = useState<ProductProps[]>([])

    useEffect(() => {
        async function getProducts() {
            const response = await api.get(`produto/meusprodutos`);
            const data = await response.data;

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
                        key={product.idProduto}
                        date=''
                        imgSrc={product.imagemProduto}
                        link={product.linkProduto}
                        price={product.preco.toString()}
                        title={product.nomeProduto}
                    />
                )) : (
                    <span>Não há produtos cadastrados</span>
                )}
            </ProductList>
        </Container>
    );
}