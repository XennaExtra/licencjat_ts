import './component_css/navbar.scss';
import logo from './component_elements/logo.png';
import {Routes, Route} from 'react-router-dom'
export function Navbar(){
    return(
        <>
            <header>
                <div>
                    <img className={'bannerLogo'} src={logo} alt={'Praktyka Lekarska'}/>
                </div>
            </header>
                    <ul className={'navList'}>
                        <li>Strona główna</li>
                        <li>Lista badań</li>
                        <li>Mapa punktów</li>
                        <li>O nas</li>
                        <li>Kontakt</li>
                    </ul>
                    <ul className={'navLoginList'}>
                        <li>Wyniki online</li>
                        <li>Strefa pacjenta</li>
                        <li>Logowanie lekarza</li>
                    </ul>
        </>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export default Navbar();
