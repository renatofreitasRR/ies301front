import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Button } from "../../components/shared/Button";
import { Input } from "../../components/shared/Input";
import { SubTitle } from "../../styles/subTitle";
import { Title } from "../../styles/title";
import { Back, CompanyRegister, Form, InputContainer } from "./styles";
import * as Yup from 'yup';
import { TextArea } from "../../components/shared/TextArea";

const schema = Yup.object().shape({
    name: Yup
        .string()
        .required('O campo Nome é obrigatório')
        .min(3, 'Por favor insira no mínimo 3 caracteres'),

    price: Yup
        .number()
        .required('O campo Preço é obrigatório')
        .default(1)
        .transform(val => typeof val == 'string' || typeof val == 'number' ? Number(val) : 0),

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
        .default(1)
        .required('O campo Quantidade é obrigatório')
        .transform(val => typeof val == 'string' || typeof val == 'number' ? Number(val) : 0),

    description: Yup
        .string()
        .required('O campo Descrição é obrigatório')
        .min(10, 'Por favor insira no mínimo 10 caracteres')
});

interface ProductProps{
    name: string;
    imageUrl: string;
    productUrl: string;
    description: string;
    quantity: number;
    price: number;
}

export function RegisterProducts() {
    const { handleSubmit, register, formState: { errors } } = useForm<ProductProps>({ resolver: yupResolver(schema) });
    
    function submitData(data: ProductProps){
        console.log(data);
    }
    
    
    
    return (
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
                    <Input title='Preço' defaultValue={1} inputName='price' register={register} error={errors.price?.message} />
                </InputContainer>
                <InputContainer>
                    <Input title='Imagem(URL)' inputName='imageUrl' register={register} error={errors.imageUrl?.message} />
                    <Input title='Produto(URL)' inputName='productUrl' register={register} error={errors.productUrl?.message} />
                </InputContainer>
                <InputContainer>
                    <Input title='Quantidade' defaultValue={1} inputName='quantity' register={register} error={errors.quantity?.message} />
                    <Input title='Tipo de Produto' inputName='name' register={register} />
                </InputContainer>
                <TextArea title='Descrição' inputName='description' register={register} error={errors.description?.message} rows={4} cols={4} />
                <Button title='Cadastrar' />
            </CompanyRegister>
        </Form>
    )
}