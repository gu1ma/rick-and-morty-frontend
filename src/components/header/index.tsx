import { Header } from "./style";
import Logo from '../../../public/logo.png'

export default function HeaderComponent() {
    return (
        <Header>
            <img 
                src={Logo.src}
                alt="Rick and Morty Logo"
            />
        </Header>
    )
}