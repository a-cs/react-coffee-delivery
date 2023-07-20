import { ReactNode } from 'react'
import { BulletPointContainer, IconContainer } from './styles'

interface BulletPointProps {
    children: ReactNode
    iconBackgroundColor: string
    icon: any
}

export function BulletPoint({
    children,
    iconBackgroundColor,
    icon,
}: BulletPointProps) {
    return (
        <BulletPointContainer>
            <IconContainer backgroundColor={iconBackgroundColor}>
                {icon}
            </IconContainer>
            <div>{children}</div>
        </BulletPointContainer>
    )
}

export default BulletPoint
