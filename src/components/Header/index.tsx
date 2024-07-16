import {
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  NewTransactionButton,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/Logo.png'
import { NewTransactionModal } from '../NewTrasactionModal'

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <LogoContainer>
            <img src={logoImg} alt="logo" />
            <span>Finantial Organizer</span>
          </LogoContainer>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>New transaction</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}
