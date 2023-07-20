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

    const cartTotalPrice = cart.reduce(
        (accumulator, currentValue) =>
            accumulator + currentValue.quantity * currentValue.price,
        0,
    )

    const deliveryPrice = 3.5

    const totalPrice = cartTotalPrice + deliveryPrice

    function formatValue(value: number) {
        return parseFloat(String(value)).toFixed(2).replace('.', ',')
    }

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
                            <span>R$ {formatValue(cartTotalPrice)}</span>
                        </RowContainer>
                        <RowContainer>
                            <p>Entrega</p>
                            <span>R$ {formatValue(deliveryPrice)}</span>
                        </RowContainer>
                        <RowContainer>
                            <strong>Total</strong>
                            <strong>R$ {formatValue(totalPrice)}</strong>
                        </RowContainer>
                    </ColumnContainer>
                    <PrimaryButton>Confirmar Pedido</PrimaryButton>
                </PanelContainer>
            </RightContainer>
        </CheckoutContainer>
    )
}

export default Checkout
