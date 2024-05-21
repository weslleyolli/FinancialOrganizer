import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Inputs</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>

                <strong>R$ 17.400,00</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Exits</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>

                <strong>R$ 17.400,00</strong>
            </SummaryCard>
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>

                <strong>R$ 17.400,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}