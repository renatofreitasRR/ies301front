import { SubTitle } from "../../styles/subTitle";
import {
    Container,
    Photo,
    Content,
    DateText,
    TrashContent,
    Description
} from "./styles";

import { AiFillHeart } from 'react-icons/ai'
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "../../components/shared/Loader";


interface ProductCardProps {
    title: string;
    date: string;
    price: string;
    link: string;
    imgSrc: string;
    description: string;
}


export function ProductDescription() {
    let { id } = useParams();
    const [product, setProduct] = useState<ProductCardProps>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function GetProduct() {
            setLoading(true);
            
            try {
                const response = await api.get(`produto/${id}`);
                const data = await response.data;

                console.log(data);

                const productResponse: ProductCardProps = {
                    description: data.descricao,
                    date: '',
                    imgSrc: data.imagemProduto,
                    link: data.linkProduto,
                    price: data.preco,
                    title: data.nomeProduto
                }

                setProduct(productResponse);
            }
            catch (error: any) {
                toast.error('Ocorreu um erro ao tentar buscar o produto, tente novamente mais tarde!')
            }
            finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000)
            }

        }

        GetProduct();
    }, [])


    return (
        <>
            {loading && <Loader />}
            <Container>
                <Photo>
                    <img src={product?.imgSrc} />
                </Photo>
                <Content>
                    <DateText>
                        {/* <small>{date}</small> */}
                    </DateText>
                    <div>
                        <SubTitle>{product?.title}</SubTitle>
                        <span>
                            R$ <strong>{product?.price}</strong>
                        </span>
                        <Description>
                            {product?.description}
                        </Description>
                    </div>
                    <TrashContent>
                        <AiFillHeart size={35} />
                    </TrashContent>
                </Content>
            </Container>
        </>

    );
}