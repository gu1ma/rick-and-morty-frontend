import { styled } from "@/styles";


export const Input = styled('input', {
    height: 40,
    width: 400,
    padding: 8,
    fontSize: 24,
    border: 'none',
    borderRadius: 8,
    backgroundColor: "$primary",
    color: 'white',

    '&:focus': {
        outline: "transparent",
        border: 'solid 1px white'
    }
})