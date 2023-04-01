import { styled } from "@/styles";


export const ButtonEl = styled('button', {
    backgroundColor: "$secondary", 
    color: 'white', 
    padding: '14px 25px',
    fontSize: 22,
    borderRadius: 8,
    border: 'none',
    marginLeft: 15,
    cursor: 'pointer',
    transition: '0.3s',

    '&:hover': {
        backgroundColor: "$secondaryDark"
    }
})