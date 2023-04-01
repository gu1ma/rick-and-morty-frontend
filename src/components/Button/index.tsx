import { ButtonEl } from "./style";

interface ButtonProps {
    children: String
}

export default function Button({ children }: ButtonProps) {
    return (
        <ButtonEl>{ children }</ButtonEl>
    )
}