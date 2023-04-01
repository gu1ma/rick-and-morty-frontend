import { styled } from "@/styles";


export const Input = styled('input', {
    height: 40,
    width: 400,
    padding: 5,
    fontSize: 24,
    border: 'solid "$primary" 2px',

    '&:focus': {
        outline: "transparent",
    }
})