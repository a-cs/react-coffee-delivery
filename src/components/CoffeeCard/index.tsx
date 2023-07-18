import {
    ButtonsContainer,
    CardContainer,
    CoffeeCardContainer,
    Description,
    Footer,
    Tag,
    Title,
} from './styles'
import img from '../../assets/Type=Expresso.png'
import AddToCartButton from '../AddToCartButton'
import InputNumber from '../InputNumber'

export function CoffeeCard() {
    return (
        <CardContainer>
            <CoffeeCardContainer>
                <img src={img} alt="" />
                <Tag>Tradicional</Tag>
                <Title>Expresso Tradicional</Title>
                <Description>
                    O tradicional café feito com água quente e grãos moídos
                </Description>
                <Footer>
                    <p>
                        R$ <span>9,90</span>
                    </p>
                    <ButtonsContainer>
                        <InputNumber />
                        <AddToCartButton />
                    </ButtonsContainer>
                </Footer>
            </CoffeeCardContainer>
        </CardContainer>
    )
}

export default CoffeeCard
