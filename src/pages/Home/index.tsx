import { BulletPointsWrapper, HomeContainer, Main, MainWrapper } from './styles'
import coffeeImg from '../../assets/Coffee.png'
import BulletPoint from '../../components/BulletPoint'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

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
                            text="Compra simples e segura"
                            iconBackgroundColor="yellow-dark"
                            icon={<ShoppingCart size={16} weight="fill" />}
                        />
                        <BulletPoint
                            text="Embalagem mantém o café intacto"
                            iconBackgroundColor="base-text"
                            icon={<Package size={16} weight="fill" />}
                        />
                        <BulletPoint
                            text="Entrega rápida e rastreada"
                            iconBackgroundColor="yellow"
                            icon={<Timer size={16} weight="fill" />}
                        />
                        <BulletPoint
                            text="O café chega fresquinho até você"
                            iconBackgroundColor="purple"
                            icon={<Coffee size={16} weight="fill" />}
                        />
                    </BulletPointsWrapper>
                </Main>
                <img src={coffeeImg} alt="" />
            </MainWrapper>
            <h1>Home</h1>
        </HomeContainer>
    )
}

export default Home
