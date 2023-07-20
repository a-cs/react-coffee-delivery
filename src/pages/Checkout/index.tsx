import { useContext } from 'react'

import PrimaryButton from '../../components/Buttons/PrimaryButton'
import CartCard from '../../components/Cards/CartCard'
import Form from '../../components/Form'
import {
    CartCardListContainer,
    CheckoutContainerForm,
    ColumnContainer,
    LeftContainer,
    PanelContainer,
    RightContainer,
    RowContainer,
    Title,
} from './styles'
import CartContext from '../../contexts/CartContext'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const CheckoutFormValidationSchema = zod.object({
    cep: zod.string().nonempty('Campo Obrigatório'),
    street: zod.string().nonempty('Campo Obrigatório'),
    number: zod.string().nonempty('Campo Obrigatório'),
    complement: zod.string(),
    district: zod.string().nonempty('Campo Obrigatório'),
    city: zod.string().nonempty('Campo Obrigatório'),
    state: zod.string().nonempty('Campo Obrigatório'),
    paymentMethod: zod.string().nonempty('Campo Obrigatório'),
})

type CheckoutFormData = Zod.infer<typeof CheckoutFormValidationSchema>

export function Checkout() {
    const { cart } = useContext(CartContext)

    const cartTotalPrice = cart.reduce(
        (accumulator, currentValue) =>
            accumulator + currentValue.quantity * currentValue.price,
        0,
    )

    const checkoutForm = useForm<CheckoutFormData>({
        resolver: zodResolver(CheckoutFormValidationSchema),
        defaultValues: {
            cep: '',
            street: '',
            number: '',
            complement: '',
            district: '',
            city: '',
            state: '',
            paymentMethod: '',
        },
    })

    const {
        handleSubmit,
        formState: { errors },
    } = checkoutForm
    console.log('formState:', errors)

    const deliveryPrice = cartTotalPrice ? 3.5 : 0

    const totalPrice = cartTotalPrice + deliveryPrice

    function formatValue(value: number) {
        return parseFloat(String(value)).toFixed(2).replace('.', ',')
    }

    function handlePayment(data: any) {
        console.log('form', data)
    }

    function handleErrors(errors: any) {
        console.log('errors', errors)
    }

    return (
        <CheckoutContainerForm
            onSubmit={handleSubmit(handlePayment, handleErrors)}
        >
            <LeftContainer>
                <Title>Complete seu pedido</Title>
                <FormProvider {...checkoutForm}>
                    <Form />
                </FormProvider>
            </LeftContainer>
            <RightContainer>
                <Title>Cafés selecionados</Title>
                <PanelContainer>
                    <CartCardListContainer>
                        {cart.map((coffee) => (
                            <CartCard key={coffee.name} coffee={coffee} />
                        ))}
                    </CartCardListContainer>
                    <ColumnContainer>
                        <RowContainer>
                            <p>Total de itens</p>
                            <span>R$ {formatValue(cartTotalPrice)}</span>
                        </RowContainer>
                        <RowContainer>
                            <p>Entrega</p>
                            <span>R$ {formatValue(deliveryPrice)}</span>
                        </RowContainer>
                        <RowContainer>
                            <strong>Total</strong>
                            <strong>R$ {formatValue(totalPrice)}</strong>
                        </RowContainer>
                    </ColumnContainer>
                    <PrimaryButton type="submit">
                        Confirmar Pedido
                    </PrimaryButton>
                </PanelContainer>
            </RightContainer>
        </CheckoutContainerForm>
    )
}

export default Checkout
