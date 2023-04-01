import { Header } from "./style";
import Logo from '../../../public/logo.png'
import Image from "next/image";


export default function HeaderComponent() {
    return (
        <Header>
            <Image 
                src={Logo}
                width={200}
                alt="Rick and Morty Logo"
            />
        </Header>
    )
}