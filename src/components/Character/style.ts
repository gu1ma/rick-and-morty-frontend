import { styled } from "@/styles";


export const Container = styled('div', {
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    img: {
        borderRadius: 10,
    },
    h2: {
        color: 'white',
        fontSize: 28,
        marginTop: 5,
    }, 
    p: {
        color: "$secondary"
    }
})