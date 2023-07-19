import { useContext } from 'react'

import PrimaryButton from '../../components/Buttons/PrimaryButton'
import CartCard from '../../components/Cards/CartCard'
import Form from '../../components/Form'
import {
    CartCardListContainer,
    CheckoutContainer,
    ColumnContainer,
    LeftContainer,
    PanelContainer,
    RightContainer,
    RowContainer,
    Title,
} from './styles'
import CartContext from '../../contexts/CartContext'

export function Checkout() {
    const { cart } = useContext(CartContext)

    return (
        <CheckoutContainer>
            <LeftContainer>
                <Title>Complete seu pedido</Title>
                <Form />
            </LeftContainer>
            <RightContainer>
                <Title>Cafés selecionados</Title>
                <PanelContainer>
                    <CartCardListContainer>
                        {cart.map((coffee) => (
                            <CartCard key={coffee.name} coffee={coffee} />
                        ))}
                    </CartCardListContainer>
                    <ColumnContainer>
                        <RowContainer>
                            <p>Total de itens</p>
                            <span>R$ 29,70</span>
                        </RowContainer>
                        <RowContainer>
                            <p>Entrega</p>
                            <span>R$ 3,50</span>
                        </RowContainer>
                        <RowContainer>
                            <strong>Total</strong>
                            <strong>R$ 33,20</strong>
                        </RowContainer>
                    </ColumnContainer>
                    <PrimaryButton>Confirmar Pedido</PrimaryButton>
                </PanelContainer>
            </RightContainer>
        </CheckoutContainer>
    )
}

export default Checkout
