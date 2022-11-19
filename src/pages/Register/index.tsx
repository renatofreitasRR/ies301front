import { Button } from '../../components/shared/Button';
import { Input } from '../../components/shared/Input';
import { SubTitle } from '../../styles/subTitle';
import { Title } from '../../styles/title';
import Splash from '../../assets/arts/register.svg';
import { BiArrowBack } from 'react-icons/bi';
import {
    Container,
    RegisterContainer,
    Form,
    ButtonsContainer,
    LoginContent,
    Choises,
    UserRegister,
    InputContainer,
    CompanyRegister,
    Back,
    SplashArt
} from './styles';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface CPFRegisterProps{
    email: string;
    name: string;
    cpf: string;
    cellphone: string;
    password: string;
    confirmPassword: string;
}

interface CNPJRegisterProps{
    email: string;
    name: string;
    cnpj: string;
    cellphone: string;
    password: string;
    confirmPassword: string;
    companyName: string;
    userCompanyEmail: string;
}



const cpfRegisterSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('Formato de Email incorreto')
        .required('O campo Email é obrigatório'),

    name: Yup
        .string()
        .required('O campo Nome é obrigatório')
        .min(3, 'Digite no mínimo 3 caracteres')
        .max(100, 'Máximo de 100 caracteres atingido'),

    cpf: Yup
        .string()
        .required('O campo CPF é obrigatório'),

    cellphone: Yup
        .string()
        .required('O campo Telefone é obrigatório'),

    password: Yup
        .string()
        .required('O campo Senha é obrigatório'),

    confirmPassword: Yup
        .string()
        .required('O campo Confirmação de Senha é obrigatório')
        .oneOf([Yup.ref('password'), null], 'As senhas não coincidem'),
});

const cnpjRegisterSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('Formato de Email incorreto')
        .required('O campo Email é obrigatório'),

    name: Yup
        .string()
        .required('O campo Nome é obrigatório')
        .min(3, 'Digite no mínimo 3 caracteres')
        .max(100, 'Máximo de 100 caracteres atingido'),

    profileName: Yup
        .string()
        .required('O campo email é obrigatório')
        .min(3, 'Digite no mínimo 3 caracteres')
        .max(100, 'Máximo de 100 caracteres atingido'),

    cnpj: Yup
        .string()
        .required('O campo CNPJ é obrigatório'),

    cellphone: Yup
        .string()
        .required('O campo Telefone é obrigatório'),

    companyName: Yup
        .string()
        .required('O campo Nome da Empresa é obrigatório'),

    userCompanyEmail: Yup
        .string()
        .required('O campo Email Empresarial é obrigatório'),

    password: Yup
        .string()
        .required('O campo Senha é obrigatório'),

    confirmPassword: Yup
        .string()
        .required('O campo Confirmação de Senha é obrigatório')
        .oneOf([Yup.ref('password'), null], 'As senhas não coincidem'),
});

export function Register() {
    const { handleSubmit, register, formState: { errors } } = useForm<CPFRegisterProps>({ resolver: yupResolver(cpfRegisterSchema) });

    const { handleSubmit: handleSubmitCnpj, register: registerCnpj, formState: { errors: errorsCnpj } } = useForm<CNPJRegisterProps>({ resolver: yupResolver(cnpjRegisterSchema) });


    const [componentToShow, setComponentToShow] = useState('register');

    const navigate = useNavigate();

    async function handleSubmitCPFForm(data: any) {

    }

    async function handleSubmitCNPJForm(data: any) {

    }


    return (
        <Container>
            <SplashArt>
                <img src={Splash} alt="Mulher com carrinho de compras saindo de um celular, uma representação de uma compra online" />
            </SplashArt>
            <RegisterContainer>
                <Form onSubmit={componentToShow === 'cpfPage' ? handleSubmit(handleSubmitCPFForm) : handleSubmitCnpj(handleSubmitCNPJForm)}>
                    {componentToShow === 'register' && (
                        <Choises>
                            <div>
                                <Title>Cadastro</Title>
                                <SubTitle>
                                    Nos conte em qual das duas opções você se encaixa!
                                </SubTitle>
                            </div>
                            <ButtonsContainer>
                                <Button title='Pessoa Física' type='button' onClick={() => setComponentToShow('cpfPage')} />
                                <small>ou</small>
                                <Button title='Pessoa Jurídica' type='button' onClick={() => setComponentToShow('cnpjPage')} />
                            </ButtonsContainer>
                        </Choises>
                    )}

                    {componentToShow === 'cpfPage' && (
                        <UserRegister>
                            <Back onClick={() => setComponentToShow('register')}>
                                <Link to='/register'>
                                    <BiArrowBack />
                                    Voltar
                                </Link>
                            </Back>
                            <Title>Cadastro</Title>
                            <SubTitle>
                                Preencha todos os campos para continuar o cadastro!
                            </SubTitle>
                            <InputContainer>
                                <Input title='Nome' inputName='name' register={register} error={errors.name?.message} />
                                <Input title='Telefone' inputName='cellphone' register={register}  error={errors.cellphone?.message} />
                            </InputContainer>
                            <InputContainer>
                                <Input title='E-mail' inputName='email' register={register}  error={errors.email?.message} />
                                <Input title='CPF' inputName='cpf' register={register}  error={errors.cpf?.message} />
                            </InputContainer>
                            <InputContainer>
                                <Input title='Senha' type='password' inputName='password' register={register}  error={errors.password?.message} />
                                <Input title='Confirmação de Senha' type='password' inputName='confirmPassword' register={register}  error={errors.confirmPassword?.message} />
                            </InputContainer>
                            <Button title='Prosseguir' />
                        </UserRegister>
                    )}

                    {componentToShow === 'cnpjPage' && (
                        <CompanyRegister>
                            <Back onClick={() => setComponentToShow('register')}>
                                <Link to='/register'>
                                    <BiArrowBack />
                                    Voltar
                                </Link>
                            </Back>
                            <Title>Cadastro</Title>
                            <SubTitle>
                                Preencha todos os campos para continuar o cadastro!
                            </SubTitle>
                            <InputContainer>
                                <Input title='Nome' inputName='name' register={registerCnpj} error={errorsCnpj.name?.message} />
                                <Input title='Telefone' inputName='cellphone' register={registerCnpj} error={errorsCnpj.cellphone?.message} />
                            </InputContainer>
                            <InputContainer>
                                <Input title='E-mail Pessoal' inputName='email' register={registerCnpj} error={errorsCnpj.email?.message} />
                                <Input title='CNPJ' inputName='cnpj' register={registerCnpj} error={errorsCnpj.cnpj?.message} />
                            </InputContainer>
                            <InputContainer>
                                <Input title='Nome da Empresa' inputName='companyName' register={registerCnpj} error={errorsCnpj.companyName?.message} />
                                <Input title='Email Empresarial' inputName='userCompanyEmail' register={registerCnpj} error={errorsCnpj.userCompanyEmail?.message} />
                            </InputContainer>
                            <InputContainer>
                                <Input title='Senha' type='password' inputName='password' register={registerCnpj} error={errorsCnpj.password?.message} />
                                <Input title='Confirmação de Senha' type='password' inputName='confirmPassword' register={registerCnpj} error={errorsCnpj.confirmPassword?.message} />
                            </InputContainer>
                            <Button title='Prosseguir' />
                        </CompanyRegister>
                    )}
                    <LoginContent>
                        <Link to='/'>
                            <small>Já possui conta?</small>
                            <a href="/login">Faça Login</a>
                        </Link>
                    </LoginContent>
                </Form>
            </RegisterContainer>
        </Container >
    );
}