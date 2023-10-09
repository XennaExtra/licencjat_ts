import './component_css/navbar.scss';
import logo from './component_elements/logo.png';
export function Navbar(){
    return(
        <header>
            <div>
                <img className={'bannerLogo'} src={logo} alt={'Praktyka Lekarska'}/>
            </div>
        </header>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export default Navbar();
