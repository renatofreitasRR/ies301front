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
import { Link } from 'react-router-dom';

export function Register() {
    return (
        <Container>
            <SplashArt>
                <img src={Splash} alt="Mulher com carrinho de compras saindo de um celular, uma representação de uma compra online" />
            </SplashArt>
            <RegisterContainer>
                <Form>
                    {/* <Choises>
                        <div>
                        <Title>Cadastro</Title>
                        <SubTitle>
                        Nos conte em qual das duas opções você se encaixa!
                        </SubTitle>
                        </div>
                        <ButtonsContainer>
                        <Button title='Pessoa Física' />
                            <small>ou</small>
                            <Button title='Pessoa Jurídica' />
                        </ButtonsContainer>
                    </Choises> */}

                    {/* <UserRegister>
                        <Back>
                            <BiArrowBack />
                            Voltar
                        </Back>
                        <Title>Cadastro</Title>
                        <SubTitle>
                            Preencha todos os campos para continuar o cadastro!
                        </SubTitle>
                        <InputContainer>
                            <Input title='Nome' />
                            <Input title='Telefone' />
                        </InputContainer>
                        <InputContainer>
                            <Input title='E-mail' />
                            <Input title='Nome do usuário' />
                        </InputContainer>
                        <InputContainer>
                            <Input title='Senha' />
                            <Input title='CPF' />
                        </InputContainer>
                        <Button title='Prosseguir' />
                    </UserRegister> */}

                    <CompanyRegister>
                        <Back>
                            <Link to='/'>
                                <BiArrowBack />
                                Voltar
                            </Link>
                        </Back>
                        <Title>Cadastro</Title>
                        <SubTitle>
                            Preencha todos os campos para continuar o cadastro!
                        </SubTitle>
                        <InputContainer>
                            <Input title='Nome' />
                            <Input title='Telefone' />
                        </InputContainer>
                        <InputContainer>
                            <Input title='E-mail' />
                            <Input title='Senha' />
                        </InputContainer>
                        <InputContainer>
                            <Input title='Nome da empresa' />
                            <Input title='Email da empresa' />
                        </InputContainer>
                        <InputContainer>
                            <Input title='Nome do usuário' />
                            <Input title='CNPJ' />
                        </InputContainer>

                        <Button title='Prosseguir' />
                    </CompanyRegister>

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