import Navbar from "../../Components/Navbar/Navbar";
import "./Main.scss";
import { Container } from '../../Components/Container/styled';

export default function Main(){
return(
    <>
    <Navbar />
    <Container>
        <h1>Eu sou a Main</h1>
    </Container>
    </>
)
}