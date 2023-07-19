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

const checkoutCoffeeList = [
    {
        name: 'Expresso Tradicional',
        tags: ['Tradicional'],
        description: 'O tradicional café feito com água quente e grãos moídos',
        imageSrc: 'src/assets/Type=Expresso.png',
        price: 9.9,
    },
    {
        name: 'Expresso Americano',
        tags: ['Tradicional'],
        description: 'Expresso diluído, menos intenso que o tradicional',
        imageSrc: 'src/assets/Type=Americano.png',
        price: 9.9,
    },
    {
        name: 'Expresso Cremoso',
        tags: ['Tradicional'],
        description: 'Café expresso tradicional com espuma cremosa',
        imageSrc: 'src/assets/Type=Expresso Cremoso.png',
        price: 9.9,
    },
    {
        name: 'Expresso Gelado',
        tags: ['Tradicional', 'Gelado'],
        description: 'Bebida preparada com café expresso e cubos de gelo',
        imageSrc: 'src/assets/Type=Café Gelado.png',
        price: 9.9,
    },
    {
        name: 'Café com Leite',
        tags: ['Tradicional', 'com leite'],
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        imageSrc: 'src/assets/Type=Café com Leite.png',
        price: 9.9,
    },
]

export function Checkout() {
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
                        {checkoutCoffeeList.map((coffee) => (
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
