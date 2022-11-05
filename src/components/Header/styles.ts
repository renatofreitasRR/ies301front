import styled, { css } from 'styled-components';

export const Header = styled.header`
    margin-bottom: 32px;
`;

export const IconBar = styled.div`
    display: flex;
    align-items: center;

    svg{
        margin-right: 8px;
        color: ${props => props.theme.colors.primary};
    }

    h1{
        font-weight: 700;
        font-size: ${props => props.theme.sizes.subTitle};
        line-height: 28px;
    }
`;

export const SearchBar = styled.div`
    flex: 1;
    padding: 0 32px;
    input{
        width: 100%;
    }
`;


export const UserBar = styled.div`
    cursor: pointer;

    display: flex;
    align-items: center;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        background-color: ${props => props.theme.colors.primary};

        svg{
            color: ${props => props.theme.colors.white};
        }
        margin-right: 18px;
    }

    svg{
        color: ${props => props.theme.colors.white};
    }
`;

export const TopBar = styled.header`
    background-color: ${props => props.theme.colors.secondary};
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 10%;
`;

export const NavBar = styled.nav`
    background-color: ${props => props.theme.colors.primary};
    width: 100%;
    height: 105px;

    padding: 0 10%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    white-space: nowrap;


    @media screen and (max-width: 1035px){
       flex-direction: column;
       height: 220px;
       justify-content: center;
    }
`;

export const Pages = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button{
        :not(:first-child){
            margin-left: 32px;
        }
    }

    @media screen and (max-width: 1035px){
       align-items: center;
       margin-top: 16px;

        button{
            :not(:first-child){
                margin-left: 32px;
            }
        }

        margin-bottom: 20px;
    }

    @media screen and (max-width: 703px){
       flex-direction: column;
       align-items: center;

        button{
            :not(:first-child){
                margin-left: 0px;
                margin-top: 10px;
            }
        }

        margin-bottom: 20px;
    }
`;

export const Filters = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        :not(:first-child){
            margin-left: 32px;
        }
    }
`;