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

const schema = Yup.object().shape({
    email: Yup
        .string()
        .email('Formato de email incorreto')
        .required('O campo email é obrigatório'),

    password: Yup
        .string()
        .required('O campo senha é obrigatório'),
});

export function Register() {
    const { handleSubmit, register, formState: { errors } } = useForm<any>({ resolver: yupResolver(schema) });
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
                <Form onSubmit={componentToShow === 'cpfPage' ? handleSubmit(handleSubmitCPFForm) : handleSubmit(handleSubmitCNPJForm)}>
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
                                <Input title='Nome' inputName='name' register={register} />
                                <Input title='Telefone' inputName='name' register={register} />
                            </InputContainer>
                            <InputContainer>
                                <Input title='E-mail' inputName='name' register={register} />
                                <Input title='Nome do usuário' inputName='name' register={register} />
                            </InputContainer>
                            <InputContainer>
                                <Input title='Senha' inputName='name' register={register} />
                                <Input title='CPF' inputName='name' register={register} />
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
                                <Input title='Nome' inputName='name' register={register} />
                                <Input title='Telefone' inputName='name' register={register} />
                            </InputContainer>
                            <InputContainer>
                                <Input title='E-mail' inputName='name' register={register} />
                                <Input title='Senha' inputName='name' register={register} />
                            </InputContainer>
                            <InputContainer>
                                <Input title='Nome da empresa' inputName='name' register={register} />
                                <Input title='Email da empresa' inputName='name' register={register} />
                            </InputContainer>
                            <InputContainer>
                                <Input title='Nome do usuário' inputName='name' register={register} />
                                <Input title='CNPJ' inputName='name' register={register} />
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