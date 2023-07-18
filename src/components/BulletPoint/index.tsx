import { BulletPointContainer, IconContainer } from './styles'

interface BulletPointProps {
    text: string
    iconBackgroundColor: string
    icon: any
}

export function BulletPoint({
    text,
    iconBackgroundColor,
    icon,
}: BulletPointProps) {
    return (
        <BulletPointContainer>
            <IconContainer backgroundColor={iconBackgroundColor}>
                {icon}
            </IconContainer>
            <span>{text}</span>
        </BulletPointContainer>
    )
}

export default BulletPoint
