import * as Dialog from "@radix-ui/react-dialog";
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./Styles";

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    //type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
    const { 
        register, 
        handleSubmit,
        formState: { isSubmitting }

    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema)
    })

    function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        console.log(data)
    }

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title> New transaction</Dialog.Title>
                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input 
                        type="text" 
                        placeholder="Description" 
                        required 
                        {...register('description')}
                    />
                    <input 
                        type="number" 
                        placeholder="Price" 
                        required 
                        {...register('price', { valueAsNumber: true})}
                    />
                    <input 
                        type="text" 
                        placeholder="Category" 
                        required 
                        {...register('category')}
                    />

                    <TransactionType>
                        <TransactionTypeButton variant="income" value="income">
                            <ArrowCircleUp size={24} /> 
                            Entry
                        </TransactionTypeButton>
                        <TransactionTypeButton variant="outcome" value="outcome">
                            <ArrowCircleDown size={24} /> 
                            Exit
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit" disabled={ isSubmitting }>
                        Register
                    </button>
                </form>

            </Content>
        </Dialog.Portal>

    )
}

