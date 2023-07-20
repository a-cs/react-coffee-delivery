import { useContext, useState } from 'react'

import {
    BottomContainer,
    ButtonsContainer,
    CardContainer,
    CatalogCardContainer,
    Description,
    Footer,
    Tag,
    TagContainer,
    Title,
} from './styles'
import AddToCartButton from '../../Buttons/AddToCartButton'
import InputNumber from '../../InputNumber'
import { Coffee } from '../../../reducers/Cart/Reducer'
import CartContext from '../../../contexts/CartContext'

interface CatalogCardProps {
    coffee: Coffee
}

export function CatalogCard({ coffee }: CatalogCardProps) {
    const [quantity, setQuantity] = useState(coffee.quantity)

    const { changeItemQuantity, addItemToCart, removeItem } =
        useContext(CartContext)

    function handleIncreaseQuantity() {
        setQuantity((previousState) => previousState + 1)
    }

    function handleDecreaseQuantity() {
        setQuantity((previousState) => previousState - 1)
    }

    function isItemAlreadyInCart() {
        return quantity !== 0 && coffee.quantity !== 0
    }

    function isNewItem() {
        return quantity !== 0 && coffee.quantity === 0
    }

    function shouldRemoveItem() {
        return quantity === 0 && coffee.quantity !== 0
    }

    function handleAddToCart() {
        if (quantity !== coffee.quantity) {
            if (isItemAlreadyInCart()) {
                changeItemQuantity(coffee.name, quantity)
            } else if (isNewItem()) {
                const newCoffee = { ...coffee, quantity }
                addItemToCart(newCoffee)
            } else if (shouldRemoveItem()) {
                removeItem(coffee.name)
            }
        }
    }

    return (
        <CardContainer>
            <CatalogCardContainer>
                <img src={coffee.imageSrc} alt="" />
                <TagContainer>
                    {coffee.tags.map((tag: string) => {
                        return <Tag key={tag}>{tag}</Tag>
                    })}
                </TagContainer>
                <Title>{coffee.name}</Title>
                <BottomContainer>
                    <Description>{coffee.description}</Description>
                    <Footer>
                        <p>
                            R${' '}
                            <span>
                                {parseFloat(String(coffee.price))
                                    .toFixed(2)
                                    .replace('.', ',')}
                            </span>
                        </p>
                        <ButtonsContainer>
                            <InputNumber
                                minValue={0}
                                value={quantity}
                                onIncrease={handleIncreaseQuantity}
                                onDecrease={handleDecreaseQuantity}
                            />
                            <AddToCartButton onAddToCart={handleAddToCart} />
                        </ButtonsContainer>
                    </Footer>
                </BottomContainer>
            </CatalogCardContainer>
        </CardContainer>
    )
}

export default CatalogCard
