import CoffeeCard from '../CoffeeCard'
import { CoffeeListContainer, CoffeeListWrapper } from './styles'

export interface Coffee {
    name: string
    tags: string[]
    description: string
    imageSrc: string
    price: number
}

const coffeeList: Coffee[] = [
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
    {
        name: 'Latte',
        tags: ['Tradicional', 'com leite'],
        description:
            'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        imageSrc: 'src/assets/Type=Latte.png',
        price: 9.9,
    },
    {
        name: 'Capuccino',
        tags: ['Tradicional', 'com leite'],
        description:
            'Bebida com canela feita de doses iguais de café, leite e espuma',
        imageSrc: 'src/assets/Type=Capuccino.png',
        price: 9.9,
    },
    {
        name: 'Macchiato',
        tags: ['Tradicional', 'com leite'],
        description:
            'Café expresso misturado com um pouco de leite quente e espuma',
        imageSrc: 'src/assets/Type=Macchiato.png',
        price: 9.9,
    },
    {
        name: 'Mocaccino',
        tags: ['Tradicional', 'com leite'],
        description:
            'Café expresso com calda de chocolate, pouco leite e espuma',
        imageSrc: 'src/assets/Type=Mochaccino.png',
        price: 9.9,
    },
    {
        name: 'Chocolate Quente',
        tags: ['especial', 'com leite'],
        description:
            'Bebida feita com chocolate dissolvido no leite quente e café',
        imageSrc: 'src/assets/Type=Chocolate Quente.png',
        price: 9.9,
    },
    {
        name: 'Cubano',
        tags: ['especial', 'alcoólico', 'gelado'],
        description:
            'Drink gelado de café expresso com rum, creme de leite e hortelã',
        imageSrc: 'src/assets/Type=Cubano.png',
        price: 9.9,
    },
    {
        name: 'Havaiano',
        tags: ['especial'],
        description: 'Bebida adocicada preparada com café e leite de coco',
        imageSrc: 'src/assets/Type=Havaiano.png',
        price: 9.9,
    },
    {
        name: 'Árabe',
        tags: ['especial'],
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        imageSrc: 'src/assets/Type=Árabe.png',
        price: 9.9,
    },
    {
        name: 'Irlandês',
        tags: ['especial', 'alcoólico'],
        description:
            'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        imageSrc: 'src/assets/Type=Irlandês.png',
        price: 9.9,
    },
]

export function CoffeeList() {
    return (
        <CoffeeListContainer>
            <h1>Nossos cafés</h1>
            <CoffeeListWrapper>
                {coffeeList.map((coffee) => {
                    return <CoffeeCard key={coffee.name} coffee={coffee} />
                })}
            </CoffeeListWrapper>
        </CoffeeListContainer>
    )
}

export default CoffeeList
