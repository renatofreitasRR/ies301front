import styled, { css } from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 700px;
    max-height: 70vh;

    background-color: ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.sizes.borderRadius};


    -webkit-box-shadow: -1px 7px 21px 0px rgba(0,0,0,0.23);
    -moz-box-shadow: -1px 7px 21px 0px rgba(0,0,0,0.23);
    box-shadow: -1px 7px 21px 0px rgba(0,0,0,0.23);

    position: relative;
`;

export const Photo = styled.div`
    background-color: ${props => props.theme.colors.secondary};
    height: 40%;
    border-radius: ${props => props.theme.sizes.borderRadius} ${props => props.theme.sizes.borderRadius} 48px 48px ;

    img{
        width: 100%;
        height: 100%;
        object-fit: scale-down;
        object-position: center;

        border-radius: ${props => props.theme.sizes.borderRadius} ${props => props.theme.sizes.borderRadius} 48px 48px ;
    }

`;

export const Content = styled.div`
    padding: 16px 32px;
    width: 100%;

    h2{
        margin-top: 16px;
        font-size: 28px;
    }

    span{
        display: block;
        margin-top: 16px;
        color: ${props => props.theme.colors.primary};
        font-weight: 400;
        font-size: 25px;
        line-height: 23px;
    }
`;

export const DateText = styled.div`
    display: flex;
    justify-content: end;

    small{
        color: ${props => props.theme.colors.text};
        font-weight: 400;
        font-size: 14px;
        display: block;
        line-height: 12px;
        margin-top: 16px;
        white-space: nowrap;
    }
`;

export const TrashContent = styled.div`
    display: flex;
    justify-content: end;

    position: absolute;
    bottom: 24px;
    right: 32px;

    height: 1fr;

    svg{
        color: ${props => props.theme.colors.secondary};
    }
`;


export const Description = styled.p`
    margin-top: 12px;

    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.sizes.text};
`;



