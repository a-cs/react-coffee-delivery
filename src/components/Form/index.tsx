import Input from '../Input'
import SelectButton from '../SelectButton'
import {
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

export function Form() {
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
                        containerWidth="12.5rem"
                        type="text"
                        placeholder="CEP"
                        required
                    />
                </InputRowWrapper>
                <InputRowWrapper>
                    <Input type="text" placeholder="Rua" required />
                </InputRowWrapper>
                <InputRowWrapper>
                    <Input
                        containerWidth="12.5rem"
                        type="text"
                        placeholder="Número"
                        required
                    />
                    <Input type="text" placeholder="Complemento" />
                </InputRowWrapper>
                <InputRowWrapper>
                    <Input
                        containerWidth="12.5rem"
                        type="text"
                        placeholder="Bairro"
                        required
                    />
                    <Input type="text" placeholder="Cidade" required />
                    <Input
                        containerWidth="3.75rem"
                        type="text"
                        placeholder="UF"
                        required
                    />
                </InputRowWrapper>
            </PanelContainer>
            <PanelContainer>
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
                    <SelectButton
                        isSelected={true}
                        icon={<CreditCard size={16} />}
                        text="Cartão de crédito"
                    />
                    <SelectButton
                        isSelected={false}
                        icon={<Bank size={16} />}
                        text="cartão de débito"
                    />
                    <SelectButton
                        isSelected={false}
                        icon={<Money size={16} />}
                        text="dinheiro"
                    />
                </InputRowWrapper>
            </PanelContainer>
        </FormContainer>
    )
}

export default Form
