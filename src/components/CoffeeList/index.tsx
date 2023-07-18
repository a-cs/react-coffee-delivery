import CoffeeCard from '../CoffeeCard'
import { CoffeeListContainer, CoffeeListWrapper } from './styles'

export function CoffeeList() {
    return (
        <CoffeeListContainer>
            <h1>Nossos cafés</h1>
            <CoffeeListWrapper>
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
            </CoffeeListWrapper>
        </CoffeeListContainer>
    )
}

export default CoffeeList
