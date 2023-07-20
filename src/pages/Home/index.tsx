import { BulletPointsWrapper, HomeContainer, Main, MainWrapper } from './styles'
import coffeeImg from '../../assets/Coffee.png'
import BulletPoint from '../../components/BulletPoint'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import CoffeeList from '../../components/CoffeeList'

export function Home() {
    return (
        <HomeContainer>
            <MainWrapper>
                <Main>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <h2>
                        Com o Coffee Delivery você recebe seu café onde estiver,
                        a qualquer hora
                    </h2>

                    <BulletPointsWrapper>
                        <BulletPoint
                            iconBackgroundColor="yellow-dark"
                            icon={<ShoppingCart size={16} weight="fill" />}
                        >
                            <p>Compra simples e segura</p>
                        </BulletPoint>
                        <BulletPoint
                            iconBackgroundColor="base-text"
                            icon={<Package size={16} weight="fill" />}
                        >
                            <p>Embalagem mantém o café intacto</p>
                        </BulletPoint>
                        <BulletPoint
                            iconBackgroundColor="yellow"
                            icon={<Timer size={16} weight="fill" />}
                        >
                            <p>Entrega rápida e rastreada</p>
                        </BulletPoint>
                        <BulletPoint
                            iconBackgroundColor="purple"
                            icon={<Coffee size={16} weight="fill" />}
                        >
                            <p>O café chega fresquinho até você</p>
                        </BulletPoint>
                    </BulletPointsWrapper>
                </Main>
                <img src={coffeeImg} alt="" />
            </MainWrapper>
            <CoffeeList />
        </HomeContainer>
    )
}

export default Home
