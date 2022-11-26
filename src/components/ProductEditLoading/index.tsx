import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";
import { EditProduct, ProductProps } from "../../pages/EditProduct";
import { api } from "../../services/api";
import { Loader } from "../shared/Loader";

export function ProductEditLoading() {
    let { id } = useParams();
    const [product, setProduct] = useState<ProductProps>();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function GetProduct() {
            setLoading(true);

            try {
                const response = await api.get(`produto/${id}`);
                const data = await response.data;

                const productResponse: ProductProps = {
                    description: data.descricao,
                    imageUrl: data.imagemProduto,
                    productUrl: data.linkProduto,
                    price: data.preco,
                    name: data.nomeProduto,
                    quantity: data.quantidade,
                    id: data.idProduto,
                    type: data.tipoProduto
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
    }, []);


    return (
        <>
            {loading && <Loader />}
            {product && <EditProduct product={product} />}
        </>
    )
}