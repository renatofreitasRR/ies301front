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
import { Link } from 'react-router-dom';

export function Login() {
    return (
        <Container>
            <LoginContainer>
                <Form>
                    <div>
                        <Title>Promo Ofertas</Title>
                        <SubTitle>
                            Bem-vindo de volta, aproveite as melhores ofertas disponíveis para você!
                        </SubTitle>
                    </div>
                    <div>
                        <Input title='Email' />
                        <Input title='Senha' />
                        <Button title='Entrar' />
                        <RegisterContent>
                            <small>Não possui conta?</small>
                            <a href="/register">Cadastre-se</a>
                        </RegisterContent>
                    </div>
                </Form>
            </LoginContainer>
            <SplashArt>
                <img src={Splash} alt="Mulher com carrinho de compras saindo de um celular, uma representação de uma compra online" /> 
            </SplashArt>
        </Container >
    );
}