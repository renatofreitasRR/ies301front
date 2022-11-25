import { Button } from '../../components/shared/Button';
import { Input } from '../../components/shared/Input';
import { SubTitle } from '../../styles/subTitle';
import { Title } from '../../styles/title';
import Splash from '../../assets/arts/login.svg';
import {
    Container,
    LoginContainer,
    Form,
    RegisterContent,
    SplashArt
} from './styles';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Register } from '../Register';
import { Loader } from '../../components/shared/Loader';


const schema = Yup.object().shape({
    email: Yup
        .string()
        .email('Formato de email incorreto')
        .required('O campo email é obrigatório'),

    password: Yup
        .string()
        .required('O campo senha é obrigatório'),
});

interface LoginFormProps {
    email: string;
    password: string;
}

export function Login() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { signIn } = useContext(AuthContext);
    const { handleSubmit, register, formState: { errors } } = useForm<LoginFormProps>({ resolver: yupResolver(schema) });
    async function handleLogin(data: any) {
        setLoading(true);
        try{
            const result = await signIn({
                email: data.email,
                password: data.password
            });

            if (result === 200) {
                navigate('/home');
            }
        }
        catch(err: any){
            console.log('Login Error', err)
        }
        finally{
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        }
    }

    return (
        <>
            {loading && <Loader />}
            <Container>
                <LoginContainer>
                    <Form onSubmit={handleSubmit(handleLogin)}>
                        <div>
                            <Title>Promo Ofertas</Title>
                            <SubTitle>
                                Bem-vindo de volta, aproveite as melhores ofertas disponíveis para você!
                            </SubTitle>
                        </div>
                        <div>
                            <Input title='Email' placeholder='email@email.com' register={register} inputName={'email'} error={errors.email?.message} />
                            <Input title='Senha' register={register} inputName={'password'} error={errors.password?.message} type='password' />
                            <Button title='Entrar' />
                            <RegisterContent>
                                <small>Não possui conta?</small>
                                <Link to="/register">Cadastre-se</Link>
                            </RegisterContent>
                        </div>
                    </Form>
                </LoginContainer>
                <SplashArt>
                    <img src={Splash} alt="Mulher com carrinho de compras saindo de um celular, uma representação de uma compra online" />
                </SplashArt>
            </Container >
        </>
    );
}