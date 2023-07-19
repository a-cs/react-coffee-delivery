import SelectButton from '../SelectButton'
import {
    FormContainer,
    Header,
    Input,
    InputContainer,
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
                <InputContainer>
                    <Input width="12.5rem" type="text" placeholder="CEP" />
                </InputContainer>
                <InputContainer>
                    <Input type="text" placeholder="Rua" />
                </InputContainer>
                <InputContainer>
                    <Input width="12.5rem" type="text" placeholder="Número" />
                    <Input type="text" placeholder="Complemento" />
                </InputContainer>
                <InputContainer>
                    <Input width="12.5rem" type="text" placeholder="Bairro" />
                    <Input type="text" placeholder="Cidade" />
                    <Input width="3.75rem" type="text" placeholder="UF" />
                </InputContainer>
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
                <InputContainer>
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
                </InputContainer>
            </PanelContainer>
        </FormContainer>
    )
}

export default Form
