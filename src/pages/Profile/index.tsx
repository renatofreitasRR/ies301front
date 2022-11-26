import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button } from "../../components/shared/Button";
import { Input } from "../../components/shared/Input";
import { SubTitle } from "../../styles/subTitle";
import { Title } from "../../styles/title";
import { Back, CompanyRegister, Form, InputContainer, PersonLogo, PersonData } from "./styles";
import * as Yup from 'yup';
import { TextArea } from "../../components/shared/TextArea";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const schema = Yup.object().shape({
    name: Yup
        .string()
});

interface ProductProps {
    name: string;
    imageUrl: string;
    productUrl: string;
    description: string;
    quantity: number;
    price: number;
}

const roles = {
    1: 'Administrador',
    3: 'Pessoa Física',
    2: 'Pessoa Jurídica'
}

export function Profile() {
    const { user } = useContext(AuthContext);

    console.log('User',user);

    const { handleSubmit, register, formState: { errors } } = useForm<ProductProps>({ resolver: yupResolver(schema) });

    return (
        <Form>
            <CompanyRegister>
                <Back onClick={() => console.log('OI')}>
                    <Link to='/products'>
                        <BiArrowBack />
                        Voltar
                    </Link>
                </Back>
                <PersonData>
                    <Title>Perfil de usuário</Title>
                    <PersonLogo>
                        <IoMdPerson size={60} />
                    </PersonLogo>
                    <SubTitle>
                        Veja aqui as informações do seu perfil!
                    </SubTitle>
                </PersonData>
                <InputContainer>
                    <Input title='Nome' defaultValue={user?.nomeUsuario} disabled inputName='name' register={register} />
                    <Input title='Email' defaultValue={user?.email} disabled inputName='name' register={register} />
                </InputContainer>
                <InputContainer>
                    {user?.idTipoUsuario == 2 &&
                        <>
                            <Input title='CNPJ da Empresa' defaultValue={user?.pjuridicas[0].cnpj} disabled inputName='name' register={register} />
                            <Input title='Telefone' defaultValue={user?.pjuridicas[0].telefone} disabled inputName='name' register={register} />
                        </>
                    }

                    {user?.idTipoUsuario == 3 &&
                        <>
                            <Input title='CPF' defaultValue={user?.pfisicas[0].cpf} disabled inputName='name' register={register} />
                            <Input title='Telefone' defaultValue={user?.pfisicas[0].telefone} disabled inputName='name' register={register} />
                        </>
                    }

                </InputContainer>
            </CompanyRegister>
        </Form>
    )
}