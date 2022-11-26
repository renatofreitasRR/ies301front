import { useState, useEffect, useContext } from 'react';
import { AiOutlineArrowLeft, AiOutlinePlus } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard';
import { Loader } from '../../components/shared/Loader';
import { AuthContext } from '../../contexts/AuthContext';
import { ProductProps } from '../../models/productProps';
import { api } from '../../services/api';
import {
    Container,
    ProductList,
    ListTitle,
    BackHome,
    RegisterProductsButton
} from './styles';

export function Products() {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<ProductProps[]>([])

    const navigate = useNavigate();

    useEffect(() => {
        async function getProducts() {
            setLoading(true);
            try {
                let route = user?.idTipoUsuario == 1 ? `produto` : `produto/meusprodutos`
                const response = await api.get(route);
                const data = await response.data;

                if (response.status === 200) {
                    setProducts(response.data);
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
                            id={product.idProduto}
                            key={product.idProduto}
                            date=''
                            imgSrc={product.imagemProduto}
                            link={product.linkProduto}
                            price={product.preco.toString()}
                            title={product.nomeProduto}
                            products={products}
                            setProducts={setProducts}
                        />
                    )) : (
                        <span>Não há produtos cadastrados</span>
                    )}
                </ProductList>
            </Container>
            <RegisterProductsButton title='Cadastrar Produto' onClick={() => navigate('/products/register')}>
                <AiOutlinePlus size={40} />
            </RegisterProductsButton>
        </>

    );
}