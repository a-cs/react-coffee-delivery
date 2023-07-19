import { ButtonsContainer, CartCardContainer, ColumnContainer } from './styles'
import InputNumber from '../../InputNumber'
import SecondaryButton from '../../Buttons/SecondaryButton'
import { Coffee } from '../../../reducers/Cart/Reducer'

interface CartCardProps {
    coffee: Coffee
}

export function CartCard({ coffee }: CartCardProps) {
    return (
        <>
            <CartCardContainer>
                <img src={coffee.imageSrc} alt="" />
                <ColumnContainer>
                    <p>{coffee.name}</p>
                    <ButtonsContainer>
                        <InputNumber value={coffee.quantity || 0} />
                        <SecondaryButton />
                    </ButtonsContainer>
                </ColumnContainer>
                <span>
                    {`R$ ${parseFloat(String(coffee.price))
                        .toFixed(2)
                        .replace('.', ',')}`}
                </span>
            </CartCardContainer>
            <hr />
        </>
    )
}

export default CartCard
