import { FormContainer, Header } from './styles'
import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'

export function Form() {
    return (
        <>
            <FormContainer>
                <Header iconColor="yellow-dark">
                    <MapPinLine size={22} />
                    <div>
                        <h2>Endereço de Entrega</h2>
                        <h3>
                            Informe o endereço onde deseja receber seu pedido
                        </h3>
                    </div>
                </Header>
            </FormContainer>
            <FormContainer>
                <Header iconColor="purple">
                    <CurrencyDollar size={22} />
                    <div>
                        <h2>Pagamento</h2>
                        <h3>
                            O pagamento é feito na entrega. Escolha a forma que
                            deseja pagar
                        </h3>
                    </div>
                </Header>
            </FormContainer>
        </>
    )
}

export default Form
