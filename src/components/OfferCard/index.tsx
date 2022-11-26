import { SubTitle } from "../../styles/subTitle";
import {
    Container,
    Photo,
    Content,
    DateText,
    TrashContent
} from "./styles";

import { FaTrash } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useModal } from "../../hooks/useModal";
import { api } from "../../services/api";
import { DeleteModal } from "../shared/DeleteModal";
import { Loader } from "../shared/Loader";

interface ProductCardProps {
    idReserva: number;
    id: number;
    title: string;
    date: string;
    price: string;
    link: string;
    imgSrc: string;
    products: any;
    setProducts: any;
}


export function OfferCard({ title, date, price, link, imgSrc, id, idReserva, products, setProducts }: ProductCardProps) {
    const [loading, setLoading] = useState(false);
    const { isVisible, handleOpenModal, handleCloseModal } = useModal();

    const navigate = useNavigate();

    function removeFromList(id: number) {
        const filterList = products.filter((product: any) => {
            return product.idProduto != id;
        })
        setProducts(filterList);
    }


    async function handleDeleteProduct() {
        setLoading(true);
        handleCloseModal();
        try {
            const response = await api.delete(`reserva/${idReserva}`)

            if (response.status == 204) {
                removeFromList(id);
                toast.success('Oferta registrada deletada com sucesso!');
            }

        }
        catch (error: any) {
            toast.error('Um erro ocorreu ao tentar deletar a oferta registrada');
            toast.error(error.response.data);
        }
        finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        }

    }

    function handleDelete(e: any) {
        e.stopPropagation();

        handleOpenModal();
    }


    return (
        <>
            {loading && <Loader />}
            <Container onClick={() => navigate(`/product/info/${id}`)}>
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
                    <TrashContent onClick={handleDelete}>
                        <FaTrash size={35} />
                    </TrashContent>
                </Content>
            </Container>
            {isVisible && <DeleteModal
                action={async () => await handleDeleteProduct()}
                isOpen={true}
                text={'Tem certeza que deseja deletar esta oferta?'}
                title={'Deletar oferta'}
                close={handleCloseModal}
            />}
        </>

    );
}