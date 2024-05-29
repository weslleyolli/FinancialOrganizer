import * as Dialog from "@radix-ui/react-dialog";
import { X } from 'phosphor-react'

import { CloseButton, Content, Overlay } from "./Styles";

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title> New transaction</Dialog.Title>
                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form action="">
                    <input type="text" placeholder="Description" required />
                    <input type="number" placeholder="Price" required />
                    <input type="text" placeholder="Category" required />

                    <button type="submit">
                        Register
                    </button>
                </form>

            </Content>
        </Dialog.Portal>

    )
}