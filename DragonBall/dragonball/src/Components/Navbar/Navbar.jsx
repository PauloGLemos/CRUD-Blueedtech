import './Navbar.scss';

export default function Navbar() {
    return(
        <>
            <div className="navbar">
                <ul className="navbar__list">
                    <li><a className="navbar__list__item" href="#!">Inicio</a></li>
                    <li><a className="navbar__list__item" href="#!">Criar</a></li>
                    <li><a className="navbar__list__item" href="#!">Deletar Tudo</a></li>
                    <li><a className="navbar__list__item" href="#!">Sobre</a></li>
                </ul>
            </div>
        </>
    )
}