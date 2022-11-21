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
import { useNavigate } from "react-router-dom";
import { Text } from "../../styles/text";


interface ProductCardProps {
    id: number;
    title: string;
    date: string;
    price: string;
    link: string;
    imgSrc: string;
    description: string;
    quantity: number;
}


export function ProductCardHome({ id, quantity, title, date, description, price, link, imgSrc }: ProductCardProps) {
    const navigate = useNavigate();

    function navigateToProduct() {
        navigate(`/product/${id}`);
    }

    function registerOffer(e: any) {
        e.stopPropagation();

        console.log('Oi');
    }

    return (
        <Container onClick={navigateToProduct}>
            <Photo>
                <img src={imgSrc} />
            </Photo>
            <Content>
                <DateText>
                    <small>{date}</small>
                </DateText>
                <div>
                    <SubTitle>{title}</SubTitle>
                    <span>
                        R$ <strong>{price}</strong>
                    </span>
                    <Description>
                        {description}
                    </Description>
                </div>
                <TrashContent>
                    <strong>Quantidade disponível: {quantity}</strong>
                </TrashContent>
            </Content>
        </Container>
    );
}