import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionContainer>
                <TransactionTable>
                    <tbody>
                        <tr>
                            <td width="50%">Development of a website</td>
                            <td>
                                <PriceHighlight variant="income">
                                    $ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Sale</td>
                            <td>22/05/2024</td>

                        </tr>
                        <tr>
                            <td width="50%">Hamburger</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    $ 59,80
                                </PriceHighlight>
                            </td>
                            <td>Food</td>
                            <td>21/05/2024</td>
                        </tr>
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
        </div>
    )
}