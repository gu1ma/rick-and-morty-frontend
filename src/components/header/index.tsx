import { Header } from "./style";
import Image from "next/image";


export default function HeaderComponent() {
    return (
        <Header>
            <Image 
                src='/logo.png'
                width={200}
                height={60}
                alt="Rick and Morty Logo"
            />
        </Header>
    )
}