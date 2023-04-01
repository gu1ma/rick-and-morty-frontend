import { TitleText } from "./style";

interface TitleProps {
    children: String
}

export default function Title({ children }: TitleProps) {
    return (
        <TitleText>{ children }</TitleText>
    )
}