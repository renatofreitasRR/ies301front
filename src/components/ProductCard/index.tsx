import { SubTitle } from "../../styles/subTitle";
import {
    Container,
    Photo,
    Content,
    DateText
} from "./styles";

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
                <img src='https://product-hub-prd.madeiramadeira.com.br/4413436/images/17056c7e-bd7b-4ac2-a81b-6f2e7a16ce754413436sofa1.jpg' />
            </Photo>
            <Content>
                <DateText>
                    <small>17/12/2022 12:01</small>
                </DateText>

                <div>
                    <SubTitle>Sofá Retrátil Bege</SubTitle>
                    <span>
                        R$ <strong>2.500,00</strong>
                    </span>
                </div>
            </Content>
        </Container>
    );
}