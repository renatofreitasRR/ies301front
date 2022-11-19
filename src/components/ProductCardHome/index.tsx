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


interface ProductCardProps {
    id: number;
    title: string;
    date: string;
    price: string;
    link: string;
    imgSrc: string;
    description: string;
}


export function ProductCardHome({ id, title, date, description, price, link, imgSrc }: ProductCardProps) {
    const navigate = useNavigate();
    
    return (
        <Container onClick={() => navigate(`/product/${id}`)}>
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
                    <AiFillHeart size={35} />
                </TrashContent>
            </Content>
        </Container>
    );
}