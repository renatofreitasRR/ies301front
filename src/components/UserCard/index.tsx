import { SubTitle } from "../../styles/subTitle";
import {
    Container,
    Content,
    TrashContent,
    RoleContainer
} from "./styles";

import { FaTrash, FaUserTag } from 'react-icons/fa'
import { UserProps } from "../../models/userProps";

const roles = {
    1: 'Administrador',
    3: 'Pessoa Física',
    2: 'Pessoa Jurídica'
}

export function UserCard({ email, idTipoUsuario, nomeUsuario, idUsuario }: UserProps) {



    return (
        <Container>
            <Content>
                <div>
                    <SubTitle>Nome: {nomeUsuario}</SubTitle>
                    <span>
                        <strong>Email: {email}</strong>
                    </span>
                </div>
                <RoleContainer>
                    <FaUserTag size={30} />
                    <strong>
                        {roles[idTipoUsuario]}
                    </strong>
                </RoleContainer>
                <TrashContent>
                    <FaTrash size={35} />
                </TrashContent>
            </Content>
        </Container>
    );
}