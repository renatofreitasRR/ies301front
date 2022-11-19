import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCardHome } from '../../components/ProductCardHome';
import { Loader } from '../../components/shared/Loader';
import { AuthContext } from '../../contexts/AuthContext';
import { ProductProps } from '../../models/productProps';
import { api } from '../../services/api';
import {
    Container,
    ProductList,
    ListTitle,
} from './styles';


export function Home() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<ProductProps[]>([])
    let { type } = useParams();

    useEffect(() => {
        async function getProducts() {
            setLoading(true);
            try {
                let url = type == undefined || type == null || type == '' ? `/produto` : `/produto/tipos/${type}`;
                const response = await api.get(url);
                const data = await response.data;

                if (response.status === 200) {
                    setProducts(response.data);
                }
            }
            catch (err: any) {
                console.log('ERROR', err);
            }
            finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000)
            }

        }
        getProducts();
    }, [type])


    return (
        <>
            {loading && <Loader />}
            <Container>
                <ListTitle>Principais Ofertas</ListTitle>
                <ProductList>
                    {products.length > 0 ? products.map((product) => (
                        <ProductCardHome
                            id={product.idProduto}
                            key={product.idProduto}
                            description={product.descricao}
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