import { ButtonsContainer, CartCardContainer, ColumnContainer } from './styles'
import InputNumber from '../../InputNumber'
import SecondaryButton from '../../Buttons/SecondaryButton'
import { Coffee } from '../../../reducers/Cart/Reducer'
import { useContext } from 'react'
import CartContext from '../../../contexts/CartContext'

interface CartCardProps {
    coffee: Coffee
}

const minValue = 1

export function CartCard({ coffee }: CartCardProps) {
    const { changeItemQuantity, removeItem } = useContext(CartContext)

    function handleIncreaseQuantity() {
        changeItemQuantity(coffee.name, coffee.quantity + 1)
    }

    function handleDecreaseQuantity() {
        if (coffee.quantity > minValue)
            changeItemQuantity(coffee.name, coffee.quantity - 1)
    }

    function handleRemoveItem() {
        removeItem(coffee.name)
    }
    return (
        <>
            <CartCardContainer>
                <img src={coffee.imageSrc} alt="" />
                <ColumnContainer>
                    <p>{coffee.name}</p>
                    <ButtonsContainer>
                        <InputNumber
                            value={coffee.quantity || 0}
                            onIncrease={handleIncreaseQuantity}
                            onDecrease={handleDecreaseQuantity}
                            minValue={minValue}
                        />
                        <SecondaryButton onRemove={handleRemoveItem} />
                    </ButtonsContainer>
                </ColumnContainer>
                <span>
                    {`R$ ${parseFloat(String(coffee.price * coffee.quantity))
                        .toFixed(2)
                        .replace('.', ',')}`}
                </span>
            </CartCardContainer>
            <hr />
        </>
    )
}

export default CartCard
