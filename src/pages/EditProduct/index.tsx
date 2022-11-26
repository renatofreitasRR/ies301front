import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/shared/Button";
import { Input } from "../../components/shared/Input";
import { SubTitle } from "../../styles/subTitle";
import { Title } from "../../styles/title";
import { Back, CompanyRegister, Form, InputContainer } from "./styles";
import * as Yup from 'yup';
import { TextArea } from "../../components/shared/TextArea";
import { Select } from "../../components/shared/Select";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import { Loader } from "../../components/shared/Loader";
import { toast } from "react-toastify";
import { ProductCard } from "../../components/ProductCard";

const schema = Yup.object().shape({
    name: Yup
        .string()
        .required('O campo Nome é obrigatório')
        .min(3, 'Por favor insira no mínimo 3 caracteres'),

    price: Yup
        .number()
        .typeError('Por favor, insira um número válido')
        .required('O campo Preço é obrigatório'),

    imageUrl: Yup
        .string()
        .url('Por favor, insira uma url válida')
        .required('O campo Imagem(URL) é obrigatório'),

    productUrl: Yup
        .string()
        .url('Por favor, insira uma url válida')
        .required('O campo Produto(URL) é obrigatório'),

    quantity: Yup
        .number()
        .typeError('Por favor, insira um número válido')
        .required('O campo Quantidade é obrigatório'),

    type: Yup
        .number()
        .typeError('O campo Tipo de Produto é obrigatório')
        .required('O campo Tipo de Produto é obrigatório'),

    description: Yup
        .string()
        .required('O campo Descrição é obrigatório')
        .min(10, 'Por favor insira no mínimo 10 caracteres')
});

export interface ProductProps {
    id: number;
    name: string;
    imageUrl: string;
    productUrl: string;
    description: string;
    quantity: number;
    price: number;
    type: number;
}

interface EditProductProps{
    product: ProductProps;
}

export function EditProduct({ product }: EditProductProps) {
    const { handleSubmit, register, formState: { errors }, setValue } = useForm<ProductProps>({ resolver: yupResolver(schema) });

    const { user } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setValue('type', product.type);
    }, [])


    async function submitData(data: ProductProps) {

        console.log('submitdata', data);

        try {
            setLoading(true);

            const productData = {
                idProduto: product.id,
                idUsuario: user?.idUsuario,
                nomeProduto: data.name,
                linkProduto: data.productUrl,
                imagemProduto: data.imageUrl,
                descricao: data.description,
                quantidade: data.quantity,
                preco: data.price,
                idTipoProduto: data.type
            }

            const response = await api.put(`/produto/${product.id}`, productData);
            const result = response.status;

            if(result === 204){
                toast.success('Produto editado com sucesso!');
                navigate('/products');

            }
        }
        catch (error: any) {
            toast.error('Ocorreu um erro ao tentar cadastrar produto, tente novamente mais tarde!');
        }
        finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        }
    }

    return (
        <>
            {loading && <Loader />}
            <Form onSubmit={handleSubmit(submitData)}>
                <CompanyRegister>
                    <Back onClick={() => console.log('OI')}>
                        <Link to='/products'>
                            <BiArrowBack />
                            Voltar
                        </Link>
                    </Back>
                    <Title>Edição de Produto</Title>
                    <SubTitle>
                        Preencha todos os campos corretamente para completar a edição!
                    </SubTitle>
                    <InputContainer>
                        <Input defaultValue={product.name} title='Nome' placeholder='Produto 01' inputName='name' register={register} error={errors.name?.message} />
                        <Input defaultValue={product.price} title='Preço' placeholder='400,00' inputName='price' register={register} error={errors.price?.message} />
                    </InputContainer>
                    <InputContainer>
                        <Input defaultValue={product.imageUrl} title='Imagem(URL)' placeholder='www.google.com/imagem.png' inputName='imageUrl' register={register} error={errors.imageUrl?.message} />
                        <Input defaultValue={product.productUrl} title='Produto(URL)' placeholder='www.google.com/produto' inputName='productUrl' register={register} error={errors.productUrl?.message} />
                    </InputContainer>
                    <InputContainer>
                        <Input defaultValue={product.quantity} title='Quantidade' inputName='quantity' register={register} error={errors.quantity?.message} />
                        <Select
                            title='Tipo de Produto'
                            inputName='type'
                            register={register}
                            error={errors.type?.message}
                            defaultValue={product.type}
                            options={
                                <>
                                    <option value='' selected>Selecione um Produto</option>
                                    <option value='1'>Eletrônicos</option>
                                    <option value='2'>Alimentos</option>
                                    <option value='3'>Vestuário</option>
                                </>
                            }
                        />
                    </InputContainer>
                    <TextArea defaultValue={product.description} title='Descrição' placeholder='Meu produto possui...' inputName='description' register={register} error={errors.description?.message} rows={4} cols={4} />
                    <Button title='Editar' />
                </CompanyRegister>
            </Form>
        </>
    )
}