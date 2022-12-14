import { SubTitle } from "../../styles/subTitle";
import {
    Container,
    Photo,
    Content,
    DateText,
    TrashContent
} from "./styles";

import { FaTrash } from 'react-icons/fa'
import { BsFillPencilFill } from 'react-icons/bs'
import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { DeleteModal } from "../shared/DeleteModal";
import { useModal } from "../../hooks/useModal";
import { Loader } from "../shared/Loader";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
    title: string;
    date: string;
    price: string;
    link: string;
    imgSrc: string;
    id: number;
    products: any;
    setProducts: any;
}


export function ProductCard({ id, title, date, price, link, imgSrc, products, setProducts }: ProductCardProps) {
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
            const response = await api.delete(`produto/${id}`)

            if (response.status == 204) {
                removeFromList(id);
                toast.success('Produto deletado com sucesso!');
            }

        }
        catch (error: any) {
            toast.error('Um erro ocorreu ao tentar deletar o produto');
            toast.error(error.response.data);
        }
        finally {
            setLoading(false);
        }

    }

    function handleEdit(e : any){
        e.stopPropagation();

        navigate(`/product/edit/${id}`);
    }

    function handleDelete(e : any){
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
                    <TrashContent >
                        <BsFillPencilFill size={35} onClick={handleEdit} />
                        <FaTrash size={35} onClick={handleDelete} />
                    </TrashContent>
                </Content>
            </Container>
            {isVisible && <DeleteModal
                action={async () => await handleDeleteProduct()}
                isOpen={true}
                text={'Tem certeza que deseja deletar este produto?'}
                title={'Deletar produto'}
                close={handleCloseModal}
            />}
        </>
    );
}