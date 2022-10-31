import { HeaderContainer, HeaderContent, NewTransactinButton } from "./styles.";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactinButton>Nova transação</NewTransactinButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay />

            <Dialog.Content>
              <Dialog.Title>Nova transação</Dialog.Title>

              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
