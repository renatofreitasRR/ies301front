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
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import { Loader } from "../../components/shared/Loader";
import { toast } from "react-toastify";

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

interface ProductProps {
    name: string;
    imageUrl: string;
    productUrl: string;
    description: string;
    quantity: number;
    price: number;
    type: number;
}

export function RegisterProducts() {
    const { handleSubmit, register, formState: { errors } } = useForm<ProductProps>({ resolver: yupResolver(schema) });

    const { user } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    async function submitData(data: ProductProps) {
        try {
            setLoading(true);

            const product = {
                idUsuario: user?.idUsuario,
                nomeProduto: data.name,
                linkProduto: data.productUrl,
                imagemProduto: data.imageUrl,
                descricao: data.description,
                quantidade: data.quantity,
                preco: data.price,
                idTipoProduto: data.type
            }

            console.log(product);

            const response = await api.post('/produto', product);
            const result = response.status;

            if(result === 201){
                toast.success('Produto cadastrado com sucesso!');
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
                    <Title>Cadastro de Produto</Title>
                    <SubTitle>
                        Preencha todos os campos para completar o cadastro!
                    </SubTitle>
                    <InputContainer>
                        <Input title='Nome' inputName='name' register={register} error={errors.name?.message} />
                        <Input title='Preço' inputName='price' register={register} error={errors.price?.message} />
                    </InputContainer>
                    <InputContainer>
                        <Input title='Imagem(URL)' inputName='imageUrl' register={register} error={errors.imageUrl?.message} />
                        <Input title='Produto(URL)' inputName='productUrl' register={register} error={errors.productUrl?.message} />
                    </InputContainer>
                    <InputContainer>
                        <Input title='Quantidade' inputName='quantity' register={register} error={errors.quantity?.message} />
                        <Select
                            title='Tipo de Produto'
                            inputName='type'
                            register={register}
                            error={errors.type?.message}
                            options={
                                <>
                                    <option value=''>Selecione um Produto</option>
                                    <option value='1'>Eletrônicos</option>
                                    <option value='2'>Alimentos</option>
                                    <option value='3'>Vestuário</option>
                                </>
                            }
                        />
                    </InputContainer>
                    <TextArea title='Descrição' inputName='description' register={register} error={errors.description?.message} rows={4} cols={4} />
                    <Button title='Cadastrar' />
                </CompanyRegister>
            </Form>
        </>
    )
}