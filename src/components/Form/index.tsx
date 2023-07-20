import { useFormContext } from 'react-hook-form'
import Input from '../Input'
import SelectButton from '../SelectButton'
import {
    ButtonPanelContainer,
    FormContainer,
    Header,
    InputRowWrapper,
    PanelContainer,
} from './styles'
import {
    Bank,
    CreditCard,
    CurrencyDollar,
    MapPinLine,
    Money,
} from '@phosphor-icons/react'

interface paymentMethod {
    icon: any
    text: string
}

export function Form() {
    const {
        register,
        formState: { errors },
        watch,
        setValue,
    } = useFormContext()

    const paymentMethods: paymentMethod[] = [
        {
            icon: <CreditCard size={16} />,
            text: 'Cartão de crédito',
        },
        {
            icon: <Bank size={16} />,
            text: 'cartão de débito',
        },
        {
            icon: <Money size={16} />,
            text: 'dinheiro',
        },
    ]

    const selectPaymentMethod = watch('paymentMethod')
    return (
        <FormContainer>
            <PanelContainer>
                <Header iconColor="yellow-dark">
                    <MapPinLine size={22} />
                    <div>
                        <h2>Endereço de Entrega</h2>
                        <h3>
                            Informe o endereço onde deseja receber seu pedido
                        </h3>
                    </div>
                </Header>
                <InputRowWrapper>
                    <Input
                        id="cep"
                        containerWidth="12.5rem"
                        type="text"
                        placeholder="CEP"
                        required
                        errors={errors}
                        register={register}
                    />
                </InputRowWrapper>
                <InputRowWrapper>
                    <Input
                        id="street"
                        type="text"
                        placeholder="Rua"
                        required
                        errors={errors}
                        register={register}
                    />
                </InputRowWrapper>
                <InputRowWrapper>
                    <Input
                        id="number"
                        containerWidth="12.5rem"
                        type="text"
                        placeholder="Número"
                        required
                        errors={errors}
                        register={register}
                    />
                    <Input
                        id="complement"
                        type="text"
                        placeholder="Complemento"
                        errors={errors}
                        register={register}
                    />
                </InputRowWrapper>
                <InputRowWrapper>
                    <Input
                        id="district"
                        containerWidth="12.5rem"
                        type="text"
                        placeholder="Bairro"
                        required
                        errors={errors}
                        register={register}
                    />
                    <Input
                        id="city"
                        type="text"
                        placeholder="Cidade"
                        required
                        errors={errors}
                        register={register}
                    />
                    <Input
                        id="state"
                        containerWidth="3.75rem"
                        type="text"
                        placeholder="UF"
                        required
                        errors={errors}
                        register={register}
                    />
                </InputRowWrapper>
            </PanelContainer>
            <ButtonPanelContainer
                error={!selectPaymentMethod && errors.paymentMethod}
            >
                <Header iconColor="purple">
                    <CurrencyDollar size={22} />
                    <div>
                        <h2>Pagamento</h2>
                        <h3>
                            O pagamento é feito na entrega. Escolha a forma que
                            deseja pagar
                        </h3>
                    </div>
                </Header>
                <InputRowWrapper>
                    {paymentMethods.map((method) => {
                        return (
                            <SelectButton
                                key={method.text}
                                isSelected={selectPaymentMethod === method.text}
                                icon={method.icon}
                                text={method.text}
                                onSetValue={() =>
                                    setValue('paymentMethod', method.text)
                                }
                            />
                        )
                    })}
                </InputRowWrapper>
            </ButtonPanelContainer>
        </FormContainer>
    )
}

export default Form
