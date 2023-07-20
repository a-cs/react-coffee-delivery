import { SucessContainer, RowWrapper, LeftPanel } from './styles'
import illustrationImg from '../../assets/Illustration.png'
import BulletPoint from '../../components/BulletPoint'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

export function Sucess() {
    return (
        <SucessContainer>
            <h1>Uhu! Pedido confirmado</h1>
            <h2>Agora é só aguardar que logo o café chegará até você</h2>
            <RowWrapper>
                <LeftPanel>
                    <BulletPoint
                        icon={<MapPin size={16} weight="fill" />}
                        iconBackgroundColor="purple"
                    >
                        <p>
                            Entrega em{' '}
                            <strong>Rua João Daniel Martinelli, 102</strong>
                        </p>
                        <p>Farrapos - Porto Alegre, RS</p>
                    </BulletPoint>
                    <BulletPoint
                        icon={<Timer size={16} weight="fill" />}
                        iconBackgroundColor="yellow"
                    >
                        <p>Previsão de entrega</p>
                        <p>
                            <strong>20 min - 30 min</strong>
                        </p>
                    </BulletPoint>
                    <BulletPoint
                        icon={<CurrencyDollar size={16} />}
                        iconBackgroundColor="yellow-dark"
                    >
                        <p>Pagamento na entrega</p>
                        <p>
                            <strong>Cartão de Crédito</strong>
                        </p>
                    </BulletPoint>
                </LeftPanel>
                <img src={illustrationImg} alt="" />
            </RowWrapper>
        </SucessContainer>
    )
}

export default Sucess
