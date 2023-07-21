import { SucessContainer, RowWrapper, LeftPanel } from './styles'
import illustrationImg from '../../assets/Illustration.png'
import BulletPoint from '../../components/BulletPoint'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { CheckoutFormData } from '../Checkout'

export function Sucess() {
    const [orderData, setOrderData] = useState<CheckoutFormData | null>()

    useEffect(() => {
        const localStorageDate = localStorage.getItem(
            '@CoffeeDelivery:orderData',
        )
        if (localStorageDate) {
            setOrderData(JSON.parse(localStorageDate))
        }
    }, [])

    return (
        <SucessContainer>
            {orderData ? (
                <>
                    <h1>Uhu! Pedido confirmado</h1>
                    <h2>
                        Agora é só aguardar que logo o café chegará até você
                    </h2>
                    <RowWrapper>
                        <LeftPanel>
                            <BulletPoint
                                icon={<MapPin size={16} weight="fill" />}
                                iconBackgroundColor="purple"
                            >
                                <p>
                                    Entrega em{' '}
                                    <strong>
                                        {orderData?.street}, {orderData?.number}
                                    </strong>
                                </p>
                                <p>
                                    {orderData?.district} - {orderData?.city},{' '}
                                    {orderData?.state}
                                </p>
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
                                    <strong>{orderData?.paymentMethod}</strong>
                                </p>
                            </BulletPoint>
                        </LeftPanel>
                        <img src={illustrationImg} alt="" />
                    </RowWrapper>
                </>
            ) : (
                <h1>Você ainda não fez um pedido</h1>
            )}
        </SucessContainer>
    )
}

export default Sucess
