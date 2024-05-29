import * as Dialog from "@radix-ui/react-dialog";
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./Styles";

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

                    <TransactionType>
                        <TransactionTypeButton variant="income">
                            <ArrowCircleUp size={24} /> 
                            Entry
                        </TransactionTypeButton>
                        <TransactionTypeButton variant="outcome">
                            <ArrowCircleDown size={24} /> 
                            Exit
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit">
                        Register
                    </button>
                </form>

            </Content>
        </Dialog.Portal>

    )
}