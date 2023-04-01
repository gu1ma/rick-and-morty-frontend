import { Container } from "./style";
import Image from "next/image";

interface CharacterProps {
    imgUrl: string;
    name: string;
    desc: string;
}

export default function Character({ imgUrl, name, desc }: CharacterProps) {
    return (
        <Container>
            <Image 
                src={`${imgUrl}`}
                width={250}
                height={250}
                alt="Rick and Morty Logo"
            />
            <h2>{name}</h2>
            <p>{desc}</p>
        </Container>
    )
}