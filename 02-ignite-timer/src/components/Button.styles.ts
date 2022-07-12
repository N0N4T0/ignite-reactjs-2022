import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'default'

interface ButtonContainerProps {
    variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    background: red;
    width: 100px;
    height: 40px;

    border-radius: 4px;
    border: 0;
    margin: 8px;

    background: ${props => props.theme['green-500']};
    color: ${props => props.theme.white}
`;