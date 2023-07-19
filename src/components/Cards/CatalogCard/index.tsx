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
import { Coffee } from '../../CoffeeList'

interface CatalogCardProps {
    coffee: Coffee
}

export function CatalogCard({ coffee }: CatalogCardProps) {
    return (
        <CardContainer>
            <CatalogCardContainer>
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
            </CatalogCardContainer>
        </CardContainer>
    )
}

export default CatalogCard
