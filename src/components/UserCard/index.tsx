import { SubTitle } from "../../styles/subTitle";
import {
    Container,
    Content,
    TrashContent,
    RoleContainer
} from "./styles";

import { FaTrash, FaUserTag } from 'react-icons/fa'
import { UserProps } from "../../models/userProps";
import { DeleteModal } from "../shared/DeleteModal";
import { useModal } from "../../hooks/useModal";
import { useState } from "react";
import { api } from "../../services/api";
import { Loader } from "../shared/Loader";
import { toast } from "react-toastify";

const roles = {
    1: 'Administrador',
    3: 'Pessoa Física',
    2: 'Pessoa Jurídica'
}

export function UserCard({ email, idTipoUsuario, nomeUsuario, idUsuario }: UserProps) {
    const { isVisible, handleOpenModal, handleCloseModal } = useModal();
    const [loading, setLoading] = useState(false);

    async function handleDeleteUser(){
        setLoading(true);
        try{

            if(idTipoUsuario == 3){
                const deleteResp = await api.delete(`pfisica/${idUsuario}`)
            }
            else if(idTipoUsuario == 2)
            {
                const deleteResp = await api.delete(`pjuridica/${idUsuario}`)
            }

            const response = await api.delete(`usuario/${idUsuario}`)

            if(response.status == 200){
                toast.success('Usuario deletado com sucesso!');
            }
            
        }
        catch(error: any){
            toast.error('Um erro ocorreu ao tentar deletar o usuário');
        }
        finally{
            setLoading(false);
        }

    }


    return (
        <>
            {loading && <Loader />}
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
                    {/* <TrashContent>
                        <FaTrash size={35} onClick={handleOpenModal} />
                    </TrashContent> */}
                </Content>
            </Container>
            {isVisible && <DeleteModal
                action={async () => await handleDeleteUser()}
                isOpen={true}
                text={'Tem certeza que deseja deletar este usuário?'}
                title={'Deletar usuário'}
                close={handleCloseModal}
            />}
        </>
    );
}