import { styled } from "../../styles";


export const Container = styled('div', {
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    img: {
        borderRadius: 10,
        width: '100%',
        height: 300
    },
    h2: {
        color: 'white',
        fontSize: 28,
        marginTop: 5,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: 250
    }, 
    p: {
        color: "$secondary"
    }
})