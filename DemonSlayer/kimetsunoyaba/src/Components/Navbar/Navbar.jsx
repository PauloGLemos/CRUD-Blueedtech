import logo from "./logo.png";
import * as S from "./styled";

export default function Navbar() {
    return(
        <S.Navbar>
            <S.Img src={logo} alt="Dragon Ball"/>

            <S.List>
                <S.ListItem>
                    <S.Linkedpage href="/">Inicio</S.Linkedpage>
                </S.ListItem>

                <S.ListItem>
                    <S.Linkedpage href="/create">Criar</S.Linkedpage>
                </S.ListItem>

                <S.ListItem>
                    <S.Linkedpage href="/deleteall">Deletar Tudo</S.Linkedpage>
                </S.ListItem>

                <S.ListItem>
                    <S.Linkedpage href="/about">Sobre</S.Linkedpage>
                </S.ListItem>

            </S.List>
        </S.Navbar>
    )
}