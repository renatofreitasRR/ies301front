import { SubTitle } from "../../styles/subTitle";
import {
    Container,
    Photo,
    Content,
    DateText,
    OfferSelect,
    OfferRegisterContent,
    Description
} from "./styles";

import { AiFillHeart, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "../../components/shared/Loader";
import { Button } from "../../components/shared/Button";
import { Text } from "../../styles/text";
import { Title } from "../../styles/title";
import { AuthContext } from "../../contexts/AuthContext";


interface ProductCardProps {
    id: number;
    title: string;
    date: string;
    price: number;
    link: string;
    imgSrc: string;
    description: string;
    quantity: number;
}


export function ProductDescriptionInfos() {
    let { id } = useParams();
    const [product, setProduct] = useState<ProductCardProps>();
    const [loading, setLoading] = useState(false);
    const [quantitySelected, setQuantitySelected] = useState(1);
    const [finalPrice, setFinalPrice] = useState(0);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        async function GetProduct() {
            setLoading(true);

            try {
                const response = await api.get(`produto/${id}`);
                const data = await response.data;

                const productResponse: ProductCardProps = {
                    description: data.descricao,
                    date: '',
                    imgSrc: data.imagemProduto,
                    link: data.linkProduto,
                    price: data.preco,
                    title: data.nomeProduto,
                    quantity: data.quantidade,
                    id: data.idProduto
                }

                setProduct(productResponse);
                setFinalPrice(data.preco);
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
                    <div>
                        <Title>{product?.title}</Title>
                        <span>
                            R$ <strong>{product?.price}</strong>
                        </span>
                        <Description>
                            {product?.description}
                        </Description>
                    </div>
                    <SubTitle>
                        Quantidade disponível: {product?.quantity}
                    </SubTitle>
                </Content>
            </Container>
        </>

    );
}