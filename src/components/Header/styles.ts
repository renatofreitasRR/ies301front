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

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        background-color: ${props => props.theme.colors.primary};
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