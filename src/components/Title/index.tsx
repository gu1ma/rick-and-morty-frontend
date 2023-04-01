import { TitleText } from "./style";

interface TitleProps {
    children: string
}

export default function Title({ children }: TitleProps) {
    return (
        <TitleText>{ children }</TitleText>
    )
}