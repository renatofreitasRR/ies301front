import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCardHome } from '../../components/ProductCardHome';
import { ProductProps } from '../../models/productProps';
import { api } from '../../services/api';
import {
    Container,
    ProductList,
    ListTitle,
} from './styles';


export function Home() {
    const [products, setProducts] = useState<ProductProps[]>([])
    let { type } = useParams();

    useEffect(() => {
        async function getProducts() {
            let url = type == undefined || type == null || type == '' ? `/produto` : `/produto/tipos/${type}`;
            const response = await api.get(url);
            const data = await response.data;

            if (response.status === 200) {
                setProducts(response.data);
            }
        }
        getProducts();
    }, [type])


    return (
        <Container>
            <ListTitle>Principais Ofertas</ListTitle>
            <ProductList>
                {products.length > 0 ? products.map((product) => (
                    <ProductCardHome
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
            {/* <ListTitle>Ofertas recentes</ListTitle>
            <ProductList>
                <ProductCard
                    date='17/12/2001'
                    imgSrc='https://cdn.pocket-lint.com/r/s/970x/assets/images/154419-games-review-hands-on-playstation-5-hands-on-pics-image1-tbq3hzlrkw.jpg'
                    link='https://cdn.pocket-lint.com/r/s/970x/assets/images/154419-games-review-hands-on-playstation-5-hands-on-pics-image1-tbq3hzlrkw.jpg'
                    price='5.000,00'
                    title='Playstation 5'

                />
                <ProductCard
                    date='17/12/2001'
                    imgSrc='https://uploads.metropoles.com/wp-content/uploads/2020/11/16115944/PS5-1-600x400.jpg'
                    link='https://cdn.pocket-lint.com/r/s/970x/assets/images/154419-games-review-hands-on-playstation-5-hands-on-pics-image1-tbq3hzlrkw.jpg'
                    price='5.000,00'
                    title='Playstation 5'

                />
                <ProductCard
                    date='17/12/2001'
                    imgSrc='https://images.kabum.com.br/produtos/fotos/358110/console-sony-playstation-5-horizon-forbidden-west_1662143033_g.jpg'
                    link='https://cdn.pocket-lint.com/r/s/970x/assets/images/154419-games-review-hands-on-playstation-5-hands-on-pics-image1-tbq3hzlrkw.jpg'
                    price='5.000,00'
                    title='Playstation 5'
                />
                <ProductCard
                    date='17/12/2001'
                    imgSrc='https://images.kabum.com.br/produtos/fotos/358110/console-sony-playstation-5-horizon-forbidden-west_1662143033_g.jpg'
                    link='https://cdn.pocket-lint.com/r/s/970x/assets/images/154419-games-review-hands-on-playstation-5-hands-on-pics-image1-tbq3hzlrkw.jpg'
                    price='5.000,00'
                    title='Playstation 5'
                />
                <ProductCard
                    date='17/12/2001'
                    imgSrc='https://images.kabum.com.br/produtos/fotos/358110/console-sony-playstation-5-horizon-forbidden-west_1662143033_g.jpg'
                    link='https://cdn.pocket-lint.com/r/s/970x/assets/images/154419-games-review-hands-on-playstation-5-hands-on-pics-image1-tbq3hzlrkw.jpg'
                    price='5.000,00'
                    title='Playstation 5'
                />
                <ProductCard
                    date='17/12/2001'
                    imgSrc='https://images.kabum.com.br/produtos/fotos/358110/console-sony-playstation-5-horizon-forbidden-west_1662143033_g.jpg'
                    link='https://cdn.pocket-lint.com/r/s/970x/assets/images/154419-games-review-hands-on-playstation-5-hands-on-pics-image1-tbq3hzlrkw.jpg'
                    price='5.000,00'
                    title='Playstation 5'
                />
            </ProductList> */}
        </Container>
    );
}