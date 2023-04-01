import { TitleText } from "./style";

interface TitleType {
    children: String
}

export default function Title({ children }: TitleType) {
    return (
        <TitleText>{ children }</TitleText>
    )
}