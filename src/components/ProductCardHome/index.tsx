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


interface ProductCardProps {
    title: string;
    date: string;
    price: string;
    link: string;
    imgSrc: string;
    description: string;
}


export function ProductCardHome({ title, date, description, price, link, imgSrc }: ProductCardProps) {
    return (
        <Container>
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