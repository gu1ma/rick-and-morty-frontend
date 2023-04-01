import { ButtonEl } from "./style";

interface ButtonProps {
    children: string
}

export default function Button({ children }: ButtonProps) {
    return (
        <ButtonEl>{ children }</ButtonEl>
    )
}