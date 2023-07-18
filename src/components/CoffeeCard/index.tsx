import {
    BottomContainer,
    ButtonsContainer,
    CardContainer,
    CoffeeCardContainer,
    Description,
    Footer,
    Tag,
    TagContainer,
    Title,
} from './styles'
import AddToCartButton from '../AddToCartButton'
import InputNumber from '../InputNumber'
import { Coffee } from '../CoffeeList'

interface CoffeeCardProps {
    coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
    return (
        <CardContainer>
            <CoffeeCardContainer>
                <img src={coffee.imageSrc} alt="" />
                <TagContainer>
                    {coffee.tags.map((tag) => {
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
                            <InputNumber />
                            <AddToCartButton />
                        </ButtonsContainer>
                    </Footer>
                </BottomContainer>
            </CoffeeCardContainer>
        </CardContainer>
    )
}

export default CoffeeCard
