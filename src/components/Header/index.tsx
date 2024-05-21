import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoImg from '../../assets/Logo.png'

export function Header() {
    return(
        <div>
            <HeaderContainer >
                <HeaderContent>
                    <img src={logoImg} alt="logo" />

                    <NewTransactionButton>New transaction</NewTransactionButton>
                </HeaderContent>
            </HeaderContainer>
        </div>
    )
}