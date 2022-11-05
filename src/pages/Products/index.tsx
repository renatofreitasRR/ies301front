import { useState, useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard';
import { Loader } from '../../components/shared/Loader';
import { ProductProps } from '../../models/productProps';
import { api } from '../../services/api';
import {
    Container,
    ProductList,
    ListTitle,
    BackHome
} from './styles';

export function Products() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<ProductProps[]>([])

    useEffect(() => {
        async function getProducts() {
            setLoading(true);
            try {
                const response = await api.get(`produto/meusprodutos`);
                const data = await response.data;

                if (response.status === 200) {
                    setProducts(response.data);
                }
            }
            catch (err: any) {

            }
            finally {
                setLoading(false);
            }

        }
        getProducts();
    }, [])

    return (
        <>
            {loading && <Loader />}
            <Container>
                <BackHome>
                    <Link to='/home'>
                        <AiOutlineArrowLeft size={30} />
                        <span>Voltar</span>
                    </Link>
                </BackHome>
                <ListTitle>Lista de Produtos</ListTitle>
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
        </>

    );
}