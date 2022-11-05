import { SubTitle } from "../../styles/subTitle";
import {
    Container,
    Photo,
    Content,
    DateText,
    TrashContent
} from "./styles";

import { FaTrash } from 'react-icons/fa'

interface ProductCardProps {
    title: string;
    date: string;
    price: string;
    link: string;
    imgSrc: string;
}


export function ProductCard({ title, date, price, link, imgSrc }: ProductCardProps) {
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
                </div>


                <TrashContent>
                    <FaTrash size={35} />
                </TrashContent>
            </Content>
        </Container>
    );
}