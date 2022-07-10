import styled, {css} from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'default'

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green', 
    default: 'blue'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    background: red;
    width: 100px;
    height: 40px;

    border-radius: 4px;
    border: 0;
    margin: 8px;

    //variant => background-color: primary
    background: ${props => props.theme.primary};
    color: ${props => props.theme.secondary}
`;