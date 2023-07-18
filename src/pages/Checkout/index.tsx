import Form from '../../components/Form'
import {
    CheckoutContainer,
    LeftContainer,
    RightContainer,
    Title,
} from './styles'

export function Checkout() {
    return (
        <CheckoutContainer>
            <LeftContainer>
                <Title>Complete seu pedido</Title>
                <Form />
            </LeftContainer>
            <RightContainer>
                <Title>Cafés selecionados</Title>
            </RightContainer>
        </CheckoutContainer>
    )
}

export default Checkout
