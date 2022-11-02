import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;

  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  transform: translate(-50%, -50%);

  background: ${(props) => props.theme["gray-800"]};

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      padding: 1rem;

      background: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["gray-300"]};

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }
    button[type="submit"] {
      height: 50px;
      border: 0;

      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.25rem;

      cursor: pointer;

      background: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};

      &:hover {
        background: ${(props) => props.theme["green-700"]};
        transition: background-color 0.2s;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  border: 0;

  cursor: pointer;

  background: transparent;
  color: ${(props) => props.theme["gray-500"]};
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin-top: 0.5rem;
`;

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  gap: 0.5rem;
  border-radius: 6px;
  border: 0;

  cursor: pointer;

  background: ${(props) => props.theme["gray-700"]};
  color: ${(props) => props.theme["gray-300"]};

  &[data-state="unchecked"]:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme["gray-600"]};
  }

  svg {
    color: ${(props) =>
      props.variant === "income"
        ? props.theme["green-300"]
        : props.theme["red-300"]};
  }

  &[data-state="checked"] {
    color: ${(props) => props.theme.white};

    background: ${(props) =>
      props.variant === "income"
        ? props.theme["green-300"]
        : props.theme["red-300"]};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;

// :focus {
//   box-shadow: 0 0 0 2px
//     ${(props) =>
//       props.variant === "income"
//         ? props.theme["green-300"]
//         : props.theme["red-300"]};
// }
