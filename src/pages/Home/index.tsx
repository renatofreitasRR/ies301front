import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCardHome } from '../../components/ProductCardHome';
import { Loader } from '../../components/shared/Loader';
import { ProductProps } from '../../models/productProps';
import { api } from '../../services/api';
import {
    Container,
    ProductList,
    ListTitle,
} from './styles';

const types = {
    1: 'Eletrônicos',
    2: 'Alimentos',
    3: 'Vestuário'
}



export function Home() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<ProductProps[]>([])
    let { type } = useParams();

    let typeExists = type == undefined || type == null || type == '';

    useEffect(() => {
        async function getProducts() {
            setLoading(true);
            try {
                let url = typeExists ? `/produto` : `/produto/tipos/${type}`;
                const response = await api.get(url);
                const data = await response.data;

                if (response.status === 200) {
                    setProducts(data);
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
                <ListTitle>Principais Ofertas {type == undefined || type == null || type == ''  ? '' :  `em ${types[type]}`}</ListTitle>
                <ProductList>
                    {products.length > 0 ? products.map((product) => (
                        <ProductCardHome
                            quantity={product.quantidade}
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